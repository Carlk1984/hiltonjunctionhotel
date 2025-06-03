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
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                Hilton Junction Hotel
              </h1>
              <p className="text-gray-600">Boutique accommodation in the heart of KZN Midlands</p>
              <p className="text-sm text-gray-500">Where luxury meets African hospitality</p>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-5 w-5 text-orange-600" />
              <span className="text-gray-700">+27 84 881 0561</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
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
              className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-3"
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
                    className="w-full bg-orange-600 hover:bg-orange-700"
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

      {/* Guest Reviews Section */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">What Our Guests Say</h3>
            <div className="flex justify-center items-center mb-4">
              <div className="flex space-x-1 mr-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-3xl font-bold text-orange-600 mr-2">9.7</span>
              <span className="text-gray-600">Exceptional (6 reviews)</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="p-6 bg-orange-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  A
                </div>
                <div>
                  <div className="flex space-x-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold">Alisdair</span>
                    <span className="text-gray-500 ml-2">🇭🇰 Hong Kong</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700">"Brand New rooms with Fridge, TV (DSTV), Microwave. Super comfy beds and great shower and bathroom. Got a great welcome by the owner and easy access. Safe parking free outside immediately below my room. Overall this was a great find and a..."</p>
            </Card>
            
            <Card className="p-6 bg-orange-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  S
                </div>
                <div>
                  <div className="flex space-x-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold">Sarah M.</span>
                    <span className="text-gray-500 ml-2">🇿🇦 South Africa</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700">"Perfect location for exploring the Midlands! The rooms are spotless and have everything you need. The interconnecting rooms were ideal for our family stay. Highly recommend for a peaceful getaway with easy access to attractions."</p>
            </Card>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-orange-600">9.6</div>
              <div className="text-sm text-gray-600">Staff</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">9.2</div>
              <div className="text-sm text-gray-600">Facilities</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">9.6</div>
              <div className="text-sm text-gray-600">Cleanliness</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">9.6</div>
              <div className="text-sm text-gray-600">Comfort</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">9.6</div>
              <div className="text-sm text-gray-600">Value</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">9.6</div>
              <div className="text-sm text-gray-600">Location</div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For & Easy Access Section */}
      <section className="py-16 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Perfect for</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-3">💕</span>
                  <span>Romantic Getaways</span>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-3">🏢</span>
                  <span>Business Travel</span>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-3">👨‍👩‍👧‍👦</span>
                  <span>Family Holidays</span>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-3">🏔️</span>
                  <span>Adventure Seekers</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Easy Access To</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Pietermaritzburg Airport</span>
                  <span className="text-yellow-400">12 miles</span>
                </div>
                <div className="flex justify-between">
                  <span>Queen Elizabeth Park</span>
                  <span className="text-yellow-400">4.3 miles</span>
                </div>
                <div className="flex justify-between">
                  <span>Howick Falls</span>
                  <span className="text-yellow-400">8.7 miles</span>
                </div>
                <div className="flex justify-between">
                  <span>Umgeni Valley Nature Reserve</span>
                  <span className="text-yellow-400">7.5 miles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Experience Luxury Section */}
      <section className="py-16 bg-orange-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience Luxury?</h3>
          <p className="text-xl mb-8">
            Book your stay at Hilton Junction Hotel and discover the perfect blend of comfort, 
            elegance, and South African hospitality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleBookNow}
              size="lg" 
              className="bg-white text-orange-700 hover:bg-gray-100 text-lg px-8 py-3"
            >
              View Our Rooms
            </Button>
            <Button 
              onClick={handleBookNow}
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-700 text-lg px-8 py-3"
            >
              Book Now
            </Button>
          </div>
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
                  <span className="text-2xl font-bold text-orange-600">From R2,100.00</span>
                  <span className="text-gray-500">Per night for 2 adults</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-sm bg-orange-100 text-orange-800 px-2 py-1 rounded">Max 2 adults</span>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Children 0-18 years pay 100%</span>
                </div>
                <Button onClick={handleBookNow} className="w-full bg-orange-600 hover:bg-orange-700">
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
                  <span className="text-2xl font-bold text-orange-600">From R2,100.00</span>
                  <span className="text-gray-500">Per night for 2 adults</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-sm bg-orange-100 text-orange-800 px-2 py-1 rounded">Max 2 adults</span>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Children 0-18 years pay 100%</span>
                </div>
                <Button onClick={handleBookNow} className="w-full bg-orange-600 hover:bg-orange-700">
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
              <Wifi className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Free Wi-Fi</h4>
              <p className="text-gray-600 text-sm">High-speed internet throughout the hotel</p>
            </div>
            <div className="text-center">
              <Car className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Parking</h4>
              <p className="text-gray-600 text-sm">Secure parking available</p>
            </div>
            <div className="text-center">
              <Coffee className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Coffee/Tea</h4>
              <p className="text-gray-600 text-sm">In-room coffee and tea facilities</p>
            </div>
            <div className="text-center">
              <Utensils className="h-12 w-12 text-orange-600 mx-auto mb-4" />
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
              <MapPin className="h-8 w-8 text-orange-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Address</h4>
              <p className="text-gray-600">1 Park Lane, Hilton<br />KwaZulu-Natal 3245<br />South Africa</p>
            </div>
            <div>
              <Phone className="h-8 w-8 text-orange-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Phone</h4>
              <p className="text-gray-600">+27 84 881 0561</p>
            </div>
            <div>
              <Mail className="h-8 w-8 text-orange-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Email</h4>
              <p className="text-gray-600">info@hiltonjunctionhotel.co.za</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Hilton Junction Hotel</h4>
              <p className="text-gray-400 mb-4">Experience boutique luxury in the heart of KZN Midlands. Our 8 beautifully appointed rooms offer modern amenities and warm South African hospitality.</p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                  <span className="text-sm">@</span>
                </div>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <div className="space-y-2">
                <div><a href="#" className="text-gray-400 hover:text-white">Home</a></div>
                <div><a href="#" className="text-gray-400 hover:text-white">Rooms</a></div>
                <div><a href="#" className="text-gray-400 hover:text-white">Experiences</a></div>
                <div><a href="#" className="text-gray-400 hover:text-white">Guest Portal</a></div>
                <div><a href="#" className="text-gray-400 hover:text-white">Contact</a></div>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <div className="space-y-2 text-gray-400">
                <div>1 Park Lane, Hilton</div>
                <div>KwaZulu-Natal 3245</div>
                <div>South Africa</div>
                <div className="pt-2">
                  <div>info@hiltonjunctionhotel.co.za</div>
                  <div>+27 84 881 0561</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© 2024 Hilton Junction Hotel. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm">Booking Terms</a>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <p className="text-gray-500 text-sm">
              Powered by <a href="https://book.nightsbridge.com/38093" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">Nightsbridge</a> | Secure Payment Processing
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
