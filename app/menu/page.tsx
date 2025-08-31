"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Clock, Phone, Coffee, IceCream, Star, Cake, Utensils, Menu } from "lucide-react"

const menuData = {
  "Flavoured Shakes": {
    icon: IceCream,
    items: {
      "Cookie Shake": { Regular: 850, Large: 950 },
      "Classic Vanilla Shake": { Regular: 850, Large: 950 },
      "Brownie Shake": { Regular: 850, Large: 950 },
      "Mars Shake": { Regular: 850, Large: 950 },
      "Snickers Shake": { Regular: 850, Large: 950 },
      "Nutella Shake": { Regular: 850, Large: 950 },
      "Lotus Shake": { Regular: 850, Large: 950 },
      "Oreo Shake": { Regular: 850, Large: 950 },
    },
  },
  "Kurtos Specials": {
    icon: Star,
    items: {
      "Ice Cream": 300,
      Brownie: 400,
      "Ice Cream + Brownie": 450,
      "Brownie Melt with Ice Cream": 795,
    },
  },
  "Cold Beverages": {
    icon: Coffee,
    items: {
      "Iced Americano": { Regular: 500, Large: 600 },
      "Iced Latte": { Regular: 720, Large: 820 },
      "Iced Vanilla Latte": { Regular: 750, Large: 850 },
      "Iced Caramel Latte": { Regular: 750, Large: 850 },
      "Iced Spanish Latte": { Regular: 750, Large: 850 },
      "Iced Hazelnut Latte": { Regular: 750, Large: 850 },
      "Iced Mocca Latte": { Regular: 750, Large: 850 },
      "Iced Irish Latte": { Regular: 750, Large: 850 },
      Affogato: { Regular: 585, Large: 685 },
    },
  },
  "Frozen Frappes": {
    icon: IceCream,
    items: {
      "Caramel Frappe": { Regular: 750, Large: 850 },
      "Mocha Frappe": { Regular: 750, Large: 850 },
      "Vanilla Frappe": { Regular: 750, Large: 850 },
      "Strawberry Frappe": { Regular: 750, Large: 850 },
      "Oreo Frappe": { Regular: 750, Large: 850 },
    },
  },
  "Hot Beverages": {
    icon: Coffee,
    items: {
      "Espresso": 350,
      "Americano": 400,
      "Cappuccino": 550,
      "Latte": 600,
      "Mocha": 650,
      "Caramel Latte": 650,
      "Vanilla Latte": 650,
      "Hot Chocolate": 500,
      "Tea": 300,
    },
  },
  "Snacks & Treats": {
    icon: Cake,
    items: {
      "Chocolate Brownie": 400,
      "Cheesecake": 450,
      "Tiramisu": 500,
      "Chocolate Cake": 450,
      "Red Velvet Cake": 500,
    },
  },
}

const buildYourCone = {
  "Choose Your Cone": {
    "Classic Cinnamon Sugar": 450,
    "Chocolate Coated": 500,
    "Nutella Drizzle": 550,
    "Caramel Drizzle": 550,
  },
  "Select Your Spread": {
    "Nutella": 200,
    "Chocolate": 150,
    "Caramel": 150,
    "Strawberry": 150,
  },
  "Add Your Toppings": {
    "Ice Cream": 300,
    "Brownie": 400,
    "Sprinkles": 100,
    "Nuts": 150,
    "Fresh Fruits": 200,
  },
}

export default function MenuPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff7f2] to-white">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-orange-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Left side - Mobile menu + Logo */}
          <div className="flex items-center gap-2">
            {/* Mobile Navigation Toggle */}
            <div className="md:hidden mr-2">
              <Button
                variant="ghost"
                size="sm"
                className="p-2 text-amber-800 hover:bg-amber-50"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>
            
            {/* Logo and Signboard */}
            <a href="/" className="hover:opacity-80 transition-opacity duration-200">
              <img src="/logo.png" alt="Kurtos Logo" className="w-8 h-8 object-contain" />
            </a>
            <a href="/" className="hover:opacity-80 transition-opacity duration-200">
              <img src="/kurtos signboard.png" alt="Kurtos Signboard" className="h-8 w-auto object-contain" />
            </a>
          </div>

          {/* Center - Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 text-sm text-amber-800 absolute left-1/2 transform -translate-x-1/2">
            <a href="/" className="hover:text-[#f1af7b] transition-colors">
              Home
            </a>
            <a href="/menu" className="text-[#f1af7b] font-semibold">
              Menu
            </a>
            <a href="#footer" className="hover:text-[#f1af7b] transition-colors">
              About
            </a>
          </div>

          {/* Right side - Action Buttons */}
          <div className="flex items-center gap-2 md:gap-4">
            <a
              href="https://www.foodpanda.pk/restaurant/y3wu/kurtos-i8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#f1af7b] hover:bg-[#e89b66] text-white px-2 py-1 md:px-4 md:py-2 rounded-full font-semibold transition-colors text-xs md:text-sm"
            >
              Order Now
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Kurtos+I-8+Markaz+Islamabad"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#f1af7b] border border-[#f1af7b] px-2 py-1 md:px-4 md:py-2 rounded-full font-semibold hover:bg-[#f1af7b] hover:text-white transition-colors text-xs md:text-sm"
            >
              Visit Our Store
            </a>
          </div>
          </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-amber-100 shadow-lg">
            <div className="px-4 py-4 space-y-4">
              <a 
                href="/" 
                className="block text-amber-800 hover:text-[#f1af7b] transition-colors text-lg font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="/menu" 
                className="block text-[#f1af7b] font-semibold text-lg font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Menu
              </a>
              <a 
                href="#footer" 
                className="block text-amber-800 hover:text-[#f1af7b] transition-colors text-lg font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
            </div>
          </div>
        )}
      </nav>

      <div className="pt-20">
        {/* Header Section */}
        <section className="py-20 bg-gradient-to-r from-[#f1af7b] to-[#e89b66] relative overflow-hidden">
          {/* Floating decorative elements */}
          <div className="floating-element absolute top-10 left-10 w-4 h-4 bg-white rounded-full opacity-30"></div>
          <div className="floating-element absolute top-32 right-20 w-3 h-3 bg-white rounded-full opacity-40"></div>
          <div className="floating-element absolute bottom-20 left-1/4 w-2 h-2 bg-white rounded-full opacity-50"></div>

          <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Menu</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Discover our delicious selection of chimney cakes, beverages, and treats crafted with love
            </p>
          </div>
        </section>

        {/* Build Your Cone Section */}
        <section className="py-20 bg-[#fff7f2] relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-amber-900 mb-4">Build Your Perfect Kurtos</h2>
              <p className="text-amber-700 text-lg">Create your dream chimney cake in three simple steps</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {Object.entries(buildYourCone).map(([step, options], index) => (
                  <Card
                    key={step}
                    className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <CardHeader className="text-center">
                      <div className="w-12 h-12 bg-[#f1af7b] rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </div>
                      <CardTitle className="text-amber-900">{step}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {Object.entries(options).map(([item, price]) => (
                          <div
                            key={item}
                            className="flex flex-col py-3 border-b border-amber-100 last:border-0 min-h-[80px]"
                          >
                            <div className="flex-1 mb-3">
                              <span className="text-amber-800 font-medium block">{item}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              {typeof price === "object" ? (
                               <div className="flex gap-2">
                                    {Object.entries(price).map(([size, cost]) => (
                                   <div key={size} className="flex flex-col gap-1">
                                     <Badge
                                       variant="secondary"
                                       className="bg-[#f1af7b]/20 text-amber-900 hover:bg-[#f1af7b]/30 text-center text-xs py-1"
                                     >
                                       {size}
                                     </Badge>
                                     <span className="bg-[#f1af7b] text-white text-xs px-2 py-1 h-6 w-full rounded text-center">
                                       ₨{cost}
                                      </span>
                                  </div>
                                    ))}
                                  </div>
                             ) : (
                               <Badge
                                 variant="secondary"
                                 className="bg-[#f1af7b]/20 text-amber-900 hover:bg-[#f1af7b]/30 text-center"
                               >
                                 ₨{price}
                               </Badge>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-amber-700 text-lg mb-4">
                Mix and match to create your perfect combination!
              </p>
              <a
                href="https://www.foodpanda.pk/restaurant/y3wu/kurtos-i8"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#f1af7b] hover:bg-[#e89b66] text-white px-8 py-3 rounded-full font-semibold transition-colors inline-block"
              >
                Order on Foodpanda
              </a>
              </div>
          </div>
        </section>

        {/* Menu Items Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-amber-900 mb-4">Our Complete Menu</h2>
              <p className="text-amber-700 text-lg">Explore our full selection of delicious treats and beverages</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {Object.entries(menuData).map(([category, data]) => {
                const IconComponent = data.icon
                return (
                  <Card
                    key={category}
                    className="bg-gradient-to-br from-white to-[#fff7f2] border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#f1af7b] rounded-full flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <CardTitle className="text-amber-900">{category}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {Object.entries(data.items).map(([item, price]) => (
                          <div
                            key={item}
                            className="flex items-center justify-between py-3 border-b border-amber-100 last:border-0 min-h-[60px]"
                          >
                            <span className="text-amber-800 flex-1 pr-4">{item}</span>
                            <div className="flex items-center gap-3 min-w-[200px] justify-end">
                              {typeof price === "object" ? (
                                <div className="flex gap-2">
                                    {Object.entries(price).map(([size, cost]) => (
                                    <div key={size} className="flex flex-col gap-1">
                                      <Badge
                                        variant="secondary"
                                        className="bg-[#f1af7b]/20 text-amber-900 hover:bg-[#f1af7b]/30 text-center text-xs py-1"
                                      >
                                        {size}
                                      </Badge>
                                      <span className="bg-[#f1af7b] text-white text-xs px-3 py-1 h-7 w-full rounded text-center">
                                        ₨{cost}
                                      </span>
                                  </div>
                                    ))}
                                  </div>
                              ) : (
                                    <Badge
                                      variant="secondary"
                                      className="bg-[#f1af7b]/20 text-amber-900 hover:bg-[#f1af7b]/30 text-center"
                                    >
                                      ₨{price}
                                    </Badge>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-20 bg-gradient-to-r from-[#f1af7b] to-[#e89b66]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Order?</h2>
            <p className="text-white/90 text-lg mb-8">
              Visit us today and experience the magic of authentic chimney cakes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.foodpanda.pk/restaurant/y3wu/kurtos-i8"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#f1af7b] px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors"
              >
                Order Now
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Kurtos+I-8+Markaz+Islamabad"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#f1af7b] transition-colors"
              >
                Visit Our Store
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer id="footer" className="bg-gradient-to-br from-amber-50 to-orange-50 py-16 relative overflow-hidden">
        {/* Floating decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-element absolute top-10 left-10 w-3 h-3 bg-[#f1af7b] rounded-full opacity-30"></div>
          <div className="floating-element absolute top-20 right-20 w-4 h-4 bg-[#f1af7b] rounded-full opacity-20"></div>
          <div className="floating-element absolute bottom-20 left-1/3 w-2 h-2 bg-[#f1af7b] rounded-full opacity-40"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <a href="/" className="hover:opacity-80 transition-opacity duration-200">
                <img src="/logo.png" alt="Kurtos Logo" className="w-12 h-12 object-contain" />
              </a>
              <a href="/" className="hover:opacity-80 transition-opacity duration-200">
                <img src="/kurtos signboard.png" alt="Kurtos Signboard" className="h-12 w-auto object-contain" />
              </a>
            </div>
            <h3 className="font-serif text-2xl font-bold text-amber-900 mb-2">Kurtos</h3>
            <p className="text-amber-700">Authentic Hungarian chimney cakes in Islamabad</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <h4 className="font-semibold text-amber-900 mb-3">Location</h4>
              <div className="space-y-2 text-amber-700">
                <p>I-8 Markaz, Islamabad</p>
                <p>Daily: 10:00 AM - 11:00 PM</p>
                <p>+92 317 581 8580</p>
              </div>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-amber-900 mb-3">Quick Links</h4>
              <div className="space-y-2">
                <a href="/" className="block text-amber-700 hover:text-[#f1af7b] transition-colors">Home</a>
                <a href="/menu" className="block text-amber-700 hover:text-[#f1af7b] transition-colors">Menu</a>
                <a href="/#testimonials" className="block text-amber-700 hover:text-[#f1af7b] transition-colors">Reviews</a>
              </div>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-amber-900 mb-3">Order Online</h4>
              <div className="space-y-2">
                <a 
                  href="https://www.foodpanda.pk/restaurant/y3wu/kurtos-i8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-amber-700 hover:text-[#f1af7b] transition-colors"
                >
                  Order on Foodpanda
                </a>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Kurtos+I-8+Markaz+Islamabad" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-amber-700 hover:text-[#f1af7b] transition-colors"
                >
                  Visit Our Store
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-amber-200 pt-8 text-center">
            <p className="text-amber-600 text-sm">
              © 2024 Kurtos. All rights reserved. Authentic Hungarian chimney cakes in Islamabad.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
