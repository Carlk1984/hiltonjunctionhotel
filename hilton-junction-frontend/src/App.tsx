import { useState } from 'react'
import { MapPin, Phone, Mail, Star, Wifi, Car, Coffee, Utensils, Camera, MessageSquare, Edit, Clock, Mountain, TreePine } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

function App() {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(1)
  const [activeTab, setActiveTab] = useState('home')

  const handleBookNow = () => {
    window.open('https://book.nightsbridge.com/38093', '_blank')
  }

  const handleCheckAvailability = () => {
    const params = new URLSearchParams()
    if (checkIn) params.append('checkin', checkIn)
    if (checkOut) params.append('checkout', checkOut)
    if (guests) params.append('guests', guests.toString())
    
    const url = `https://book.nightsbridge.com/38093?${params.toString()}`
    window.open(url, '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <img 
                src="/images/hilton-junction-logo.png" 
                alt="Hilton Junction Hotel Logo" 
                className="h-16 w-auto"
              />
              <div>
                <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Hilton Junction Hotel
                </h1>
                <p className="text-gray-600">Check In. Chill Out. Midlands Made Easy</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-5 w-5" style={{ color: '#2A4D69' }} />
              <span className="text-gray-700">+27 84 881 0561</span>
            </div>
          </div>
          
          {/* Navigation Tabs */}
          <div className="border-t border-gray-200">
            <nav className="flex space-x-8 py-4">
              <button 
                onClick={() => setActiveTab('home')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${activeTab === 'home' ? 'border-b-2' : 'text-gray-500 hover:text-gray-700'}`}
                style={activeTab === 'home' ? { color: '#2A4D69', borderColor: '#2A4D69' } : {}}
              >
                Home
              </button>
              <button 
                onClick={() => setActiveTab('experiences')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${activeTab === 'experiences' ? 'border-b-2' : 'text-gray-500 hover:text-gray-700'}`}
                style={activeTab === 'experiences' ? { color: '#2A4D69', borderColor: '#2A4D69' } : {}}
              >
                Experiences
              </button>
              <button 
                onClick={() => setActiveTab('guest-portal')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${activeTab === 'guest-portal' ? 'border-b-2' : 'text-gray-500 hover:text-gray-700'}`}
                style={activeTab === 'guest-portal' ? { color: '#2A4D69', borderColor: '#2A4D69' } : {}}
              >
                Guest Portal
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Home Tab Content */}
      {activeTab === 'home' && (
        <>
          {/* Hero Section */}
          <section 
            className="relative text-white py-20"
            style={{
              backgroundImage: 'linear-gradient(rgba(42, 77, 105, 0.8), rgba(75, 134, 180, 0.8)), url(/images/SOL.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
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
                  className="bg-white hover:bg-gray-100 text-lg px-8 py-3"
                  style={{ color: '#2A4D69' }}
                >
                  Book Now
                </Button>
              </div>
            </div>
          </section>

          {/* Booking Form */}
          <section className="py-16" style={{ backgroundColor: '#F0F4F8' }}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4" style={{ color: '#2A4D69' }}>Check Availability</h2>
                <p className="text-xl text-gray-600">Find your perfect stay in the heart of KZN Midlands</p>
              </div>
              
              <Card className="p-8 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div>
                    <Label htmlFor="checkin" className="text-sm font-medium text-gray-700">Check-in Date</Label>
                    <Input
                      id="checkin"
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="checkout" className="text-sm font-medium text-gray-700">Check-out Date</Label>
                    <Input
                      id="checkout"
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="guests" className="text-sm font-medium text-gray-700">Guests</Label>
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
                      className="w-full text-white"
                      style={{ backgroundColor: '#2A4D69' }}
                    >
                      Check Availability
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Rooms Section */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4" style={{ color: '#2A4D69' }}>Our Rooms</h2>
                <p className="text-xl text-gray-600">Comfortable accommodations with modern amenities</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Deluxe Queen Room */}
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src="/images/deluxe-queen-room.jpg" 
                      alt="Deluxe Queen Room" 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl" style={{ color: '#2A4D69' }}>Deluxe Queen Room</CardTitle>
                    <CardDescription className="text-lg font-semibold" style={{ color: '#4B86B4' }}>
                      R2,100.00 per night
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      The Deluxe Queen Room offers a comfortable queen bed, an en-suite shower, air-conditioning, and a work desk.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium" style={{ backgroundColor: '#BAC8E0', color: '#2A4D69' }}>
                        <Wifi className="w-3 h-3 mr-1" />
                        Wi-Fi
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium" style={{ backgroundColor: '#BAC8E0', color: '#2A4D69' }}>
                        <Coffee className="w-3 h-3 mr-1" />
                        Coffee/Tea
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium" style={{ backgroundColor: '#BAC8E0', color: '#2A4D69' }}>
                        <Car className="w-3 h-3 mr-1" />
                        Safe
                      </span>
                    </div>
                    <Button 
                      onClick={handleBookNow}
                      className="w-full text-white"
                      style={{ backgroundColor: '#2A4D69' }}
                    >
                      Book Now
                    </Button>
                  </CardContent>
                </Card>

                {/* Deluxe King/Twin Room */}
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src="/images/deluxe-twin-room.jpg" 
                      alt="Deluxe King/Twin Room" 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl" style={{ color: '#2A4D69' }}>Deluxe King/Twin Room</CardTitle>
                    <CardDescription className="text-lg font-semibold" style={{ color: '#4B86B4' }}>
                      R2,100.00 per night
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      The Deluxe King/Twin Room offers a king bed that can be converted into twin beds, an en-suite shower, air-con, and a desk.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium" style={{ backgroundColor: '#BAC8E0', color: '#2A4D69' }}>
                        <Wifi className="w-3 h-3 mr-1" />
                        Wi-Fi
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium" style={{ backgroundColor: '#BAC8E0', color: '#2A4D69' }}>
                        <Coffee className="w-3 h-3 mr-1" />
                        Coffee/Tea
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium" style={{ backgroundColor: '#BAC8E0', color: '#2A4D69' }}>
                        <Car className="w-3 h-3 mr-1" />
                        Safe
                      </span>
                    </div>
                    <Button 
                      onClick={handleBookNow}
                      className="w-full text-white"
                      style={{ backgroundColor: '#2A4D69' }}
                    >
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Reviews Section */}
          <section className="py-16" style={{ backgroundColor: '#F0F4F8' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4" style={{ color: '#2A4D69' }}>Guest Reviews</h2>
                <div className="flex items-center justify-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-current" style={{ color: '#4B86B4' }} />
                    ))}
                  </div>
                  <span className="ml-2 text-2xl font-bold" style={{ color: '#2A4D69' }}>9.7</span>
                </div>
                <p className="text-xl text-gray-600">Exceptional rating based on guest reviews</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" style={{ color: '#4B86B4' }} />
                      ))}
                    </div>
                    <span className="ml-2 font-semibold" style={{ color: '#2A4D69' }}>Alisdair, Hong Kong</span>
                  </div>
                  <p className="text-gray-600">
                    "Excellent location and beautiful rooms. The staff were incredibly helpful and the amenities were top-notch. 
                    Perfect for exploring the KZN Midlands region."
                  </p>
                </Card>
                
                <Card className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" style={{ color: '#4B86B4' }} />
                      ))}
                    </div>
                    <span className="ml-2 font-semibold" style={{ color: '#2A4D69' }}>Sarah M., South Africa</span>
                  </div>
                  <p className="text-gray-600">
                    "A wonderful boutique hotel with exceptional service. The rooms are spacious and well-appointed. 
                    Highly recommend for both business and leisure travelers."
                  </p>
                </Card>
              </div>
            </div>
          </section>

          {/* Location Section */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4" style={{ color: '#2A4D69' }}>Location & Attractions</h2>
                <p className="text-xl text-gray-600">Perfectly positioned in the heart of KZN Midlands</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center p-6">
                  <MapPin className="h-8 w-8 mx-auto mb-3" style={{ color: '#4B86B4' }} />
                  <h3 className="font-semibold mb-2" style={{ color: '#2A4D69' }}>Pietermaritzburg Airport</h3>
                  <p className="text-gray-600">12 miles</p>
                </div>
                <div className="text-center p-6">
                  <MapPin className="h-8 w-8 mx-auto mb-3" style={{ color: '#4B86B4' }} />
                  <h3 className="font-semibold mb-2" style={{ color: '#2A4D69' }}>Queen Elizabeth Park</h3>
                  <p className="text-gray-600">4.3 miles</p>
                </div>
                <div className="text-center p-6">
                  <MapPin className="h-8 w-8 mx-auto mb-3" style={{ color: '#4B86B4' }} />
                  <h3 className="font-semibold mb-2" style={{ color: '#2A4D69' }}>Howick Falls</h3>
                  <p className="text-gray-600">8.7 miles</p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Experiences Section */}
      {activeTab === 'experiences' && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4" style={{ color: '#2A4D69' }}>Explore KZN Midlands</h2>
              <p className="text-xl text-gray-600">Discover the most popular attractions near Hilton Junction Hotel</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Howick Falls */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src="/images/howick.avif" 
                    alt="Howick Falls" 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle style={{ color: '#2A4D69' }}>Howick Falls</CardTitle>
                  <CardDescription style={{ color: '#4B86B4' }}>8.7 miles from hotel</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Spectacular 95-meter waterfall offering breathtaking views and excellent photography opportunities in a beautiful natural setting.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Camera className="h-4 w-4 mr-2" />
                    <span>Photography & Sightseeing</span>
                  </div>
                </CardContent>
              </Card>

              {/* Queen Elizabeth Park */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src="/images/queen.jpg" 
                    alt="Queen Elizabeth Park" 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle style={{ color: '#2A4D69' }}>Queen Elizabeth Park</CardTitle>
                  <CardDescription style={{ color: '#4B86B4' }}>4.3 miles from hotel</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Beautiful nature reserve featuring indigenous flora, walking trails, and peaceful picnic spots perfect for family outings.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <TreePine className="h-4 w-4 mr-2" />
                    <span>Nature & Walking</span>
                  </div>
                </CardContent>
              </Card>

              {/* Umgeni Valley Nature Reserve */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src="/images/umgeni+valley.jpg" 
                    alt="Umgeni Valley Nature Reserve" 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle style={{ color: '#2A4D69' }}>Umgeni Valley Nature Reserve</CardTitle>
                  <CardDescription style={{ color: '#4B86B4' }}>7.5 miles from hotel</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Pristine nature reserve offering hiking trails, wildlife viewing, and peaceful river valleys perfect for nature photography.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Mountain className="h-4 w-4 mr-2" />
                    <span>Wildlife & Hiking</span>
                  </div>
                </CardContent>
              </Card>

              {/* Midlands Meander */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src="/images/meandre.jpg" 
                    alt="Midlands Meander" 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle style={{ color: '#2A4D69' }}>Midlands Meander</CardTitle>
                  <CardDescription style={{ color: '#4B86B4' }}>Arts & crafts route</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Famous arts and crafts route featuring local artisans, galleries, restaurants, and unique shopping experiences throughout the region.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Coffee className="h-4 w-4 mr-2" />
                    <span>Arts & Crafts</span>
                  </div>
                </CardContent>
              </Card>

              {/* Nelson Mandela Capture Site */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src="/images/nelso.jpg" 
                    alt="Nelson Mandela Capture Site" 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle style={{ color: '#2A4D69' }}>Nelson Mandela Capture Site</CardTitle>
                  <CardDescription style={{ color: '#4B86B4' }}>Historical landmark</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Historic site commemorating Nelson Mandela's capture in 1962, featuring a museum and the iconic sculpture installation.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Star className="h-4 w-4 mr-2" />
                    <span>History & Culture</span>
                  </div>
                </CardContent>
              </Card>

              {/* Nottingham Road */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src="/images/DSC_4080.jpg" 
                    alt="Nottingham Road" 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle style={{ color: '#2A4D69' }}>Nottingham Road</CardTitle>
                  <CardDescription style={{ color: '#4B86B4' }}>Charming village</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Picturesque village known for its breweries, restaurants, and country atmosphere, perfect for a relaxing day trip.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Utensils className="h-4 w-4 mr-2" />
                    <span>Dining & Breweries</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Activities Section */}
            <div className="mt-16">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4" style={{ color: '#2A4D69' }}>Popular Activities</h3>
                <p className="text-lg text-gray-600">Experience the best of KZN Midlands</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#2A4D69' }}>
                    <Mountain className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Hiking & Nature</h4>
                  <p className="text-gray-600">Explore scenic trails and nature reserves</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#2A4D69' }}>
                    <Coffee className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Arts & Crafts</h4>
                  <p className="text-gray-600">Visit local artisans and galleries</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#2A4D69' }}>
                    <Camera className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Photography</h4>
                  <p className="text-gray-600">Capture stunning landscapes and waterfalls</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#2A4D69' }}>
                    <Utensils className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Local Cuisine</h4>
                  <p className="text-gray-600">Taste authentic South African flavors</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Guest Portal Section */}
      {activeTab === 'guest-portal' && (
        <section className="py-16" style={{ backgroundColor: '#2A4D69' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Guest Portal</h2>
              <p className="text-xl text-white">
                Manage your booking, request changes, or contact our team directly for personalized assistance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Manage Booking */}
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center" style={{ color: '#2A4D69' }}>
                    <Edit className="h-5 w-5 mr-2" />
                    Manage Your Booking
                  </CardTitle>
                  <CardDescription>
                    Modify your reservation or request changes to your stay
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="booking-ref">Booking Reference Number</Label>
                    <Input 
                      id="booking-ref" 
                      placeholder="Enter your booking reference"
                      className="mt-1"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="new-checkin">New Check-in Date</Label>
                      <Input 
                        id="new-checkin" 
                        type="date"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="new-checkout">New Check-out Date</Label>
                      <Input 
                        id="new-checkout" 
                        type="date"
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="new-guests">Number of Guests</Label>
                    <Input 
                      id="new-guests" 
                      type="number" 
                      min="1" 
                      max="4" 
                      defaultValue="2"
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="change-reason">Reason for Change</Label>
                    <Textarea 
                      id="change-reason" 
                      placeholder="Please explain why you need to modify your booking..."
                      className="mt-1"
                      rows={3}
                    />
                  </div>
                  
                  <Button 
                    className="w-full text-white"
                    style={{ backgroundColor: '#2A4D69' }}
                  >
                    Submit Change Request
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Team */}
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center" style={{ color: '#2A4D69' }}>
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Contact Our Team
                  </CardTitle>
                  <CardDescription>
                    Send us a message or request assistance with your stay
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="guest-name">Your Name</Label>
                    <Input 
                      id="guest-name" 
                      placeholder="Enter your full name"
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="guest-email">Email Address</Label>
                    <Input 
                      id="guest-email" 
                      type="email" 
                      placeholder="your.email@example.com"
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message-type">Message Type</Label>
                    <select 
                      id="message-type" 
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="booking">Booking Amendment</option>
                      <option value="special">Special Request</option>
                      <option value="complaint">Complaint</option>
                      <option value="compliment">Compliment</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="guest-message">Your Message</Label>
                    <Textarea 
                      id="guest-message" 
                      placeholder="How can we help you today?"
                      className="mt-1"
                      rows={4}
                    />
                  </div>
                  
                  <Button 
                    className="w-full text-white"
                    style={{ backgroundColor: '#2A4D69' }}
                  >
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <Phone className="h-8 w-8 mx-auto mb-3" style={{ color: '#4B86B4' }} />
                <h3 className="font-semibold mb-2" style={{ color: '#2A4D69' }}>24/7 Phone Support</h3>
                <p className="text-gray-600">+27 84 881 0561</p>
              </Card>
              
              <Card className="p-6 text-center">
                <Mail className="h-8 w-8 mx-auto mb-3" style={{ color: '#4B86B4' }} />
                <h3 className="font-semibold mb-2" style={{ color: '#2A4D69' }}>Email Support</h3>
                <p className="text-gray-600">info@hiltonjunction.co.za</p>
              </Card>
              
              <Card className="p-6 text-center">
                <Clock className="h-8 w-8 mx-auto mb-3" style={{ color: '#4B86B4' }} />
                <h3 className="font-semibold mb-2" style={{ color: '#2A4D69' }}>Check-in/out Times</h3>
                <p className="text-gray-600">Check-in: 2:00 PM<br />Check-out: 11:00 AM</p>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="text-white py-12" style={{ backgroundColor: '#2A4D69' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Hilton Junction Hotel
              </h3>
              <p className="text-gray-300 mb-4">
                Boutique accommodation in the heart of KZN Midlands, where luxury meets African hospitality.
              </p>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: '#4B86B4' }}>
                  <span className="text-white text-sm font-bold">i</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => setActiveTab('home')} className="text-gray-300 hover:text-white transition-colors">Rooms & Suites</button></li>
                <li><button onClick={() => setActiveTab('experiences')} className="text-gray-300 hover:text-white transition-colors">Experiences</button></li>
                <li><button onClick={() => setActiveTab('guest-portal')} className="text-gray-300 hover:text-white transition-colors">Guest Portal</button></li>
                <li><button onClick={() => setActiveTab('home')} className="text-gray-300 hover:text-white transition-colors">Reviews</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><span className="text-gray-300">Free WiFi</span></li>
                <li><span className="text-gray-300">Free Parking</span></li>
                <li><span className="text-gray-300">24/7 Security</span></li>
                <li><span className="text-gray-300">Housekeeping</span></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3" style={{ color: '#4B86B4' }} />
                  <span className="text-gray-300">1 Park Lane, Hilton, KwaZulu-Natal 3245</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3" style={{ color: '#4B86B4' }} />
                  <span className="text-gray-300">+27 84 881 0561</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3" style={{ color: '#4B86B4' }} />
                  <span className="text-gray-300">info@hiltonjunction.co.za</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Hilton Junction Hotel. All rights reserved. | 
              <a href="https://book.nightsbridge.com/38093" target="_blank" rel="noopener noreferrer" className="hover:text-white ml-1" style={{ color: '#4B86B4' }}>
                Powered by NightsBridge
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
