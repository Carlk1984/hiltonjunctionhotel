import { useState } from 'react'
import { Calendar, MapPin, Phone, Mail, Star, Wifi, Car, Coffee, Utensils } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

function App() {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(1)

  const handleBookNow = () => {
    window.open('https://book.nightsbridge.com/38093', '_blank')
  }

  const handleCheckAvailability = () => {
    window.open('https://book.nightsbridge.com/38093', '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                Hilton Junction Hotel
              </h1>
              <p className="text-gray-600">Luxury Accommodation in the Heart of the City</p>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-5 w-5 text-blue-600" />
              <span className="text-gray-700">+27 11 123 4567</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Welcome to Hilton Junction Hotel
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Experience luxury and comfort in our beautifully appointed rooms with modern amenities and exceptional service.
            </p>
            <Button 
              onClick={handleBookNow}
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
            >
              Book Now
            </Button>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-900">Check Availability</CardTitle>
              <CardDescription>Find the perfect room for your stay</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <Label htmlFor="checkin">Check-in</Label>
                  <Input
                    id="checkin"
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="checkout">Check-out</Label>
                  <Input
                    id="checkout"
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="guests">Guests</Label>
                  <Input
                    id="guests"
                    type="number"
                    min="1"
                    max="4"
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                    className="mt-1"
                  />
                </div>
                <div className="flex items-end">
                  <Button 
                    onClick={handleCheckAvailability}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Check Availability
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Room Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Rooms</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our selection of beautifully appointed rooms, each designed for comfort and luxury.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="h-64 bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center">
                <span className="text-gray-500">Deluxe Queen Room Image</span>
              </div>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">Deluxe Queen Room</CardTitle>
                <CardDescription className="mb-4">
                  The Deluxe Queen Room offers a comfortable queen bed, an en-suite shower, air-conditioning, and a work desk. 
                  Enjoy added conveniences like Wi-Fi, DStv, a safe, a hairdryer, an iron, an ironing board, coffee/tea facilities, 
                  a microwave, and a bar fridge.
                </CardDescription>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">From R2,100.00</span>
                  <span className="text-gray-500">Per night for 2 adults</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">Max 2 adults</span>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Children 0-18 years pay 100%</span>
                </div>
                <Button onClick={handleBookNow} className="w-full bg-blue-600 hover:bg-blue-700">
                  View Rates and Book
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-64 bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center">
                <span className="text-gray-500">Deluxe King/Twin Room Image</span>
              </div>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">Deluxe King/Twin Room</CardTitle>
                <CardDescription className="mb-4">
                  The Deluxe King/Twin Room offers a king bed that can be converted into twin beds, an en-suite shower, air-con, 
                  and a desk. Enjoy added conveniences like Wi-Fi, DStv, a safe, a hairdryer, an iron, coffee/tea facilities, 
                  a microwave, and a bar fridge.
                </CardDescription>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">From R2,100.00</span>
                  <span className="text-gray-500">Per night for 2 adults</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">Max 2 adults</span>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Children 0-18 years pay 100%</span>
                </div>
                <Button onClick={handleBookNow} className="w-full bg-blue-600 hover:bg-blue-700">
                  View Rates and Book
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Hotel Amenities</h3>
            <p className="text-gray-600">Everything you need for a comfortable stay</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Wifi className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Free Wi-Fi</h4>
              <p className="text-gray-600 text-sm">High-speed internet throughout the hotel</p>
            </div>
            <div className="text-center">
              <Car className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Parking</h4>
              <p className="text-gray-600 text-sm">Secure parking available</p>
            </div>
            <div className="text-center">
              <Coffee className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Coffee/Tea</h4>
              <p className="text-gray-600 text-sm">In-room coffee and tea facilities</p>
            </div>
            <div className="text-center">
              <Utensils className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Kitchenette</h4>
              <p className="text-gray-600 text-sm">Microwave and bar fridge in every room</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h3>
            <p className="text-gray-600">Get in touch for reservations and inquiries</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Address</h4>
              <p className="text-gray-600">123 Junction Street<br />Johannesburg, South Africa</p>
            </div>
            <div>
              <Phone className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Phone</h4>
              <p className="text-gray-600">+27 11 123 4567</p>
            </div>
            <div>
              <Mail className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Email</h4>
              <p className="text-gray-600">info@hiltonjunctionhotel.co.za</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h4 className="text-xl font-bold mb-4">Hilton Junction Hotel</h4>
            <p className="text-gray-400 mb-4">Luxury accommodation with modern amenities</p>
            <div className="flex justify-center space-x-4 mb-4">
              <Star className="h-5 w-5 text-yellow-400" />
              <Star className="h-5 w-5 text-yellow-400" />
              <Star className="h-5 w-5 text-yellow-400" />
              <Star className="h-5 w-5 text-yellow-400" />
              <Star className="h-5 w-5 text-yellow-400" />
            </div>
            <p className="text-gray-500 text-sm">
              Powered by <a href="https://book.nightsbridge.com/38093" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">NightsBridge</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
