from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
import httpx
import os
from datetime import datetime, date
import json

app = FastAPI(title="Hilton Junction Hotel API", version="1.0.0")

# Disable CORS. Do not remove this for full-stack development.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

YOCO_SECRET_KEY = os.getenv("YOCO_SECRET_KEY", "sk_test_4b2c6d44mpP4mDka757497b98e1b")
NIGHTSBRIDGE_BOOKING_URL = os.getenv("NIGHTSBRIDGE_BOOKING_URL", "https://book.nightsbridge.com/38093")

class BookingRequest(BaseModel):
    check_in: date
    check_out: date
    guests: int
    room_type: str
    guest_name: str
    guest_email: str
    guest_phone: str

class PaymentRequest(BaseModel):
    amount: int  # Amount in cents
    currency: str = "ZAR"
    description: str
    customer_email: str
    customer_name: str
    booking_reference: str

class PaymentResponse(BaseModel):
    payment_id: str
    status: str
    redirect_url: Optional[str] = None

bookings_db = {}
payments_db = {}

@app.get("/healthz")
async def healthz():
    return {"status": "ok"}

@app.get("/api/rooms")
async def get_rooms():
    """Get available room types and pricing"""
    return {
        "rooms": [
            {
                "id": "deluxe-queen",
                "name": "Deluxe Queen Room",
                "description": "The Deluxe Queen Room offers a comfortable queen bed, an en-suite shower, air-conditioning, and a work desk. Enjoy added conveniences like Wi-Fi, DStv, a safe, a hairdryer, an iron, an ironing board, coffee/tea facilities, a microwave, and a bar fridge.",
                "price": 210000,  # Price in cents (R2,100.00)
                "currency": "ZAR",
                "max_guests": 2,
                "amenities": ["Wi-Fi", "DStv", "Safe", "Hairdryer", "Iron", "Coffee/Tea", "Microwave", "Bar Fridge"]
            },
            {
                "id": "deluxe-king-twin",
                "name": "Deluxe King/Twin Room",
                "description": "The Deluxe King/Twin Room offers a king bed that can be converted into twin beds, an en-suite shower, air-con, and a desk. Enjoy added conveniences like Wi-Fi, DStv, a safe, a hairdryer, an iron, coffee/tea facilities, a microwave, and a bar fridge.",
                "price": 210000,  # Price in cents (R2,100.00)
                "currency": "ZAR",
                "max_guests": 2,
                "amenities": ["Wi-Fi", "DStv", "Safe", "Hairdryer", "Iron", "Coffee/Tea", "Microwave", "Bar Fridge"]
            }
        ]
    }

@app.post("/api/check-availability")
async def check_availability(check_in: date, check_out: date, guests: int):
    """Check room availability for given dates"""
    if check_in >= check_out:
        raise HTTPException(status_code=400, detail="Check-out date must be after check-in date")
    
    if guests < 1 or guests > 4:
        raise HTTPException(status_code=400, detail="Number of guests must be between 1 and 4")
    
    nights = (check_out - check_in).days
    
    return {
        "available": True,
        "check_in": check_in,
        "check_out": check_out,
        "nights": nights,
        "guests": guests,
        "nightsbridge_url": f"{NIGHTSBRIDGE_BOOKING_URL}?checkin={check_in}&checkout={check_out}&guests={guests}"
    }

@app.post("/api/bookings")
async def create_booking(booking: BookingRequest):
    """Create a new booking"""
    booking_id = f"BK{datetime.now().strftime('%Y%m%d%H%M%S')}"
    
    nights = (booking.check_out - booking.check_in).days
    room_price = 210000  # R2,100.00 in cents
    total_amount = nights * room_price
    
    booking_data = {
        "id": booking_id,
        "check_in": booking.check_in.isoformat(),
        "check_out": booking.check_out.isoformat(),
        "guests": booking.guests,
        "room_type": booking.room_type,
        "guest_name": booking.guest_name,
        "guest_email": booking.guest_email,
        "guest_phone": booking.guest_phone,
        "total_amount": total_amount,
        "currency": "ZAR",
        "status": "pending",
        "created_at": datetime.now().isoformat(),
        "nightsbridge_url": f"{NIGHTSBRIDGE_BOOKING_URL}?checkin={booking.check_in}&checkout={booking.check_out}&guests={booking.guests}"
    }
    
    bookings_db[booking_id] = booking_data
    
    return {
        "booking_id": booking_id,
        "total_amount": total_amount,
        "currency": "ZAR",
        "nightsbridge_url": booking_data["nightsbridge_url"],
        "status": "pending"
    }

@app.post("/api/payments/create")
async def create_payment(payment: PaymentRequest):
    """Create a Yoco payment"""
    try:
        async with httpx.AsyncClient() as client:
            headers = {
                "Authorization": f"Bearer {YOCO_SECRET_KEY}",
                "Content-Type": "application/json"
            }
            
            payload = {
                "amount": payment.amount,
                "currency": payment.currency,
                "description": payment.description,
                "metadata": {
                    "booking_reference": payment.booking_reference,
                    "customer_email": payment.customer_email,
                    "customer_name": payment.customer_name
                }
            }
            
            payment_id = f"PAY{datetime.now().strftime('%Y%m%d%H%M%S')}"
            
            payment_data = {
                "id": payment_id,
                "amount": payment.amount,
                "currency": payment.currency,
                "description": payment.description,
                "booking_reference": payment.booking_reference,
                "customer_email": payment.customer_email,
                "customer_name": payment.customer_name,
                "status": "pending",
                "created_at": datetime.now().isoformat()
            }
            
            payments_db[payment_id] = payment_data
            
            return PaymentResponse(
                payment_id=payment_id,
                status="pending",
                redirect_url=f"https://checkout.yoco.com/pay/{payment_id}"  # Simulated URL
            )
            
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Payment creation failed: {str(e)}")

@app.get("/api/payments/{payment_id}")
async def get_payment_status(payment_id: str):
    """Get payment status"""
    if payment_id not in payments_db:
        raise HTTPException(status_code=404, detail="Payment not found")
    
    return payments_db[payment_id]

@app.get("/api/bookings/{booking_id}")
async def get_booking(booking_id: str):
    """Get booking details"""
    if booking_id not in bookings_db:
        raise HTTPException(status_code=404, detail="Booking not found")
    
    return bookings_db[booking_id]

@app.get("/api/nightsbridge/redirect")
async def nightsbridge_redirect(checkin: Optional[str] = None, checkout: Optional[str] = None, guests: Optional[int] = None):
    """Redirect to NightsBridge booking engine with parameters"""
    url = NIGHTSBRIDGE_BOOKING_URL
    params = []
    
    if checkin:
        params.append(f"checkin={checkin}")
    if checkout:
        params.append(f"checkout={checkout}")
    if guests:
        params.append(f"guests={guests}")
    
    if params:
        url += "?" + "&".join(params)
    
    return {"redirect_url": url}
