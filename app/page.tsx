"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Phone, Heart, Coffee, Cake, Sparkles, Facebook, Instagram, Menu } from "lucide-react"
import TestimonialsSection from "@/components/ui/testimonials-columns"

export default function KurtosLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-orange-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center">
          {/* Left side - Mobile menu + Logo */}
          <div className="flex items-center gap-2">
            {/* Mobile Navigation Toggle - Temporarily Hidden */}
            {/* <div className="md:hidden mr-2">
              <Button
                variant="ghost"
                size="sm"
                className="p-2 text-amber-800 hover:bg-amber-50"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div> */}
            
            {/* Logo and Signboard */}
            <a href="/" className="hover:opacity-80 transition-opacity duration-200">
              <img src="/logo.png" alt="Kurtos Logo" className="w-8 h-8 object-contain" />
            </a>
            <a href="/" className="hover:opacity-80 transition-opacity duration-200">
              <img src="/kurtos signboard.png" alt="Kurtos Signboard" className="h-8 w-auto object-contain" />
            </a>
          </div>

          {/* Center - Desktop Navigation - Temporarily Hidden */}
          {/* <div className="hidden md:flex items-center gap-6 text-sm text-amber-800 mx-auto">
            <a href="/menu" className="hover:text-[#f1af7b] transition-colors">
              Menu
            </a>
            <a href="#about" className="hover:text-[#f1af7b] transition-colors">
              About
            </a>
            <a href="#visit" className="hover:text-[#f1af7b] transition-colors">
              Visit
            </a>
          </div> */}

          {/* Right side - Order Now Button */}
          <div className="ml-auto">
            <Button className="bg-[#f1af7b] hover:bg-[#e89b66] text-white rounded-full px-6">
              <a href="https://www.foodpanda.pk/restaurant/y3wu/kurtos-i8" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white">Order Now</a>
            </Button>
          </div>
        </div>

        {/* Mobile Menu - Temporarily Hidden */}
        {/* {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-amber-100 shadow-lg">
            <div className="px-4 py-4 space-y-4">
              <a 
                href="/menu" 
                className="block text-amber-800 hover:text-[#f1af7b] transition-colors text-lg font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Menu
              </a>
              <a 
                href="#about" 
                className="block text-amber-800 hover:text-[#f1af7b] transition-colors text-lg font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#visit" 
                className="block text-amber-800 hover:text-[#f1af7b] transition-colors text-lg font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Visit
              </a>
            </div>
          </div>
        )} */}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen pastry-bg flex items-center justify-center overflow-hidden">
        {/* Floating decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-element absolute top-20 left-10 text-[#f1af7b] opacity-60 animate-rise-up animate-delay-200">
            <Sparkles className="w-6 h-6" />
          </div>
          <div className="floating-element absolute top-32 right-20 text-[#f1af7b] opacity-60 animate-rise-up animate-delay-400">
            <Heart className="w-8 h-8" />
          </div>
          <div className="floating-element absolute bottom-40 left-20 text-[#f1af7b] opacity-60 animate-rise-up animate-delay-600">
            <Coffee className="w-7 h-7" />
          </div>
          <div className="floating-element absolute bottom-60 right-10 text-[#f1af7b] opacity-60 animate-rise-up animate-delay-800">
            <Cake className="w-6 h-6" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="animate-rise-up-slow animate-delay-300">
            <h1 className="font-serif text-5xl lg:text-6xl font-bold text-amber-900 mb-6 leading-tight">
              Freshly Baked
              <span className="block text-[#f1af7b] relative">
                Chimney Cakes
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" fill="none">
                  <path
                    d="M2 10C20 2 40 2 60 6C80 10 100 2 120 6C140 10 160 2 180 6C190 8 195 9 198 10"
                    stroke="#f1af7b"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
            </h1>
            <p className="text-lg text-amber-700 mb-2 leading-relaxed italic font-medium">
              Where every swirl tells a tale
            </p>
            <p className="text-lg text-amber-700 mb-8 leading-relaxed">
              Authentic Hungarian kürtőskalács baked fresh daily in the heart of Islamabad. Build your perfect chimney
              cake with premium coatings, creamy fillings, and delicious toppings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-[#f1af7b] hover:bg-[#e89b66] text-white rounded-full px-8 py-3">
                  <a href="https://www.foodpanda.pk/restaurant/y3wu/kurtos-i8" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white">Order Now</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-amber-800 text-amber-800 hover:bg-amber-50 rounded-full px-8 py-3 bg-transparent"
              >
                <a href="https://www.google.com/maps/search/?api=1&query=Kurtos+I-8+Markaz+Islamabad" target="_blank" rel="noopener noreferrer" className="text-amber-800 hover:text-amber-800">Visit Our Café</a>
              </Button>
            </div>
          </div>
          </div>
          <div className="relative animate-rise-up-slow animate-delay-400">
            <div className="relative z-10">
              <div className="relative mx-auto max-w-lg">
                <div className="flex items-center justify-center gap-8">
                  {/* Main filled kurtos - left side */}
                  <div className="cutout-sticker relative z-20 animate-breathing">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Aug%2024%2C%202025%2C%2003_39_28%20AM-p76u8RRB8NZNHdsl8XGc5VIhVoe3tp.png"
                      alt="Three delicious kurtos chimney cakes with chocolate, caramel, and berry toppings"
                      className="w-full h-auto max-w-lg"
                    />
                  </div>

                  {/* Plain kurtos - right side, slightly lower */}
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#f1af7b] opacity-30 rounded-full floating-element animate-rise-up animate-delay-800"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-[#f1af7b] opacity-20 rounded-full floating-element animate-rise-up animate-delay-1000"></div>
          </div>
        </div>
      </section>

      {/* Wavy Divider */}
      <div className="wavy-divider h-20 bg-white"></div>

      {/* Top Creamy Cloud Divider */}
      <div className="relative h-16 bg-white overflow-hidden">
        <svg className="absolute bottom-0 w-full h-20" viewBox="0 0 1200 80" fill="none" preserveAspectRatio="none">
          <path
            d="M0,80 C150,60 300,40 450,50 C600,60 750,30 900,45 C1050,60 1150,40 1200,50 L1200,80 Z"
            fill="#fff7f2"
            opacity="0.8"
          />
          <path d="M0,80 C200,50 400,35 600,45 C800,55 1000,25 1200,40 L1200,80 Z" fill="#fef3ec" opacity="0.6" />
        </svg>
      </div>

      {/* Signature Items */}
      <section id="menu" className="py-20 bg-white relative overflow-hidden">
        {/* Top-left roll illustration */}
        <div className="absolute top-4 left-4 opacity-10 pointer-events-none z-0">
          <img 
            src="/roll-illustration.png" 
            alt="Roll illustration top-left" 
            className="w-48 h-48 object-contain"
          />
        </div>



        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-amber-900 mb-4 animate-rise-up animate-delay-100">Our Signature Creations</h2>
            <p className="text-amber-700 text-lg max-w-2xl mx-auto animate-rise-up animate-delay-150">
              Each chimney cake is handcrafted with love, using traditional techniques and the finest ingredients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Classic Cinnamon Sugar",
                description: "Traditional kürtős with warm cinnamon and caramelized sugar coating",
                image: "/best-seller.png",
                badge: "Best Seller",
                badgeColor: "bg-[#f1af7b]",
              },
              {
                name: "Signature Cones",
                description: "Experience our artisanal chimney cakes, each freshly baked and hand-rolled for the perfect swirl.",
                image: "/fan-favorite.png",
                badge: "Fan Favorite",
                badgeColor: "bg-amber-800",
              },
              {
                name: "Pistachio Delight",
                description: "Premium pistachio coating with vanilla ice cream and pistachio crumbles",
                image: "/chimney-cake-with-pistachio-coating-and-ice-cream.png",
                badge: "Premium",
                badgeColor: "bg-amber-700",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl overflow-hidden animate-rise-up animate-delay-${(index + 1) * 100}`}
              >
                <div className="relative">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className={`absolute top-4 left-4 ${item.badgeColor} text-white rounded-full px-3 py-1`}>
                    {item.badge}
                  </Badge>
                </div>
                <CardContent className="p-6 group-hover:scale-105 transition-transform duration-300">
                  <h3 className="font-serif text-xl font-bold text-amber-900 mb-2 group-hover:text-amber-800 transition-colors duration-300">{item.name}</h3>
                  <p className="text-amber-700 leading-relaxed group-hover:text-amber-600 transition-colors duration-300">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Top-right roll illustration (reflected) */}
        <div className="absolute top-4 right-4 opacity-20 pointer-events-none z-0">
          <img 
            src="/roll-illustration.png" 
            alt="Roll illustration top-right" 
            className="w-48 h-48 object-contain transform scale-x-[-1]"
          />
        </div>
      </section>

      {/* Bottom Creamy Cloud Divider */}
      <div className="relative h-16 bg-white overflow-hidden">
        <svg className="absolute top-0 w-full h-20" viewBox="0 0 1200 80" fill="none" preserveAspectRatio="none">
          <path
            d="M0,0 C150,20 300,40 450,30 C600,20 750,50 900,35 C1050,20 1150,40 1200,30 L1200,0 Z"
            fill="#fff7f2"
            opacity="0.8"
          />
          <path d="M0,0 C200,30 400,45 600,35 C800,25 1000,55 1200,40 L1200,0 Z" fill="#fef3ec" opacity="0.6" />
        </svg>
      </div>

      {/* Build Your Own Section */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: "#fff7f2" }}>
        {/* Floating decorative sprinkles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-element absolute top-10 left-10 w-2 h-2 bg-[#f1af7b] rounded-full opacity-60"></div>
          <div className="floating-element absolute top-20 right-20 w-3 h-3 bg-amber-400 rounded-full opacity-50"></div>
          <div className="floating-element absolute top-32 left-1/4 w-1 h-1 bg-orange-300 rounded-full opacity-70"></div>
          <div className="floating-element absolute bottom-20 right-1/4 w-2 h-2 bg-[#f1af7b] rounded-full opacity-40"></div>
          <div className="floating-element absolute bottom-32 left-20 w-3 h-3 bg-amber-300 rounded-full opacity-60"></div>
          <div className="floating-element absolute top-40 right-10 w-1 h-1 bg-orange-400 rounded-full opacity-50"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-amber-900 mb-4">Build Your Perfect Kurtos</h2>
            <p className="text-amber-700 text-lg">Three simple steps to create your dream chimney cake</p>
          </div>

          {/* Desktop Layout - Triangle arrangement around center cone */}
          <div className="hidden md:block relative">
            <div className="relative w-full max-w-4xl mx-auto" style={{ height: "500px" }}>
              {/* Center Cone Image with Sticker Cutout Effect */}
              <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative animate-bounce-slow">
                  <div className="drop-shadow-2xl">
                    <img src="/kurtos-hero-cone.png" alt="Kurtos cone" className="w-60 h-60 object-contain" />
                  </div>
                </div>
              </div>

              {/* Step 1 - Top Left */}
              <div className="absolute top-0 left-0 text-center group">
                <div className="relative">
                  {/* Curved arrow pointing to center */}
                  <svg
                    className="absolute -bottom-8 -right-24 w-24 h-24 text-amber-400 opacity-60"
                    viewBox="0 0 100 100"
                    fill="none"
                  >
                    <path
                      d="M40 20 Q70 10 100 40"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="4,4"
                      markerEnd="url(#arrowhead)"
                    />
                    <defs>
                      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                      </marker>
                    </defs>
                  </svg>

                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300 border-2 border-amber-100">
                    <span className="text-3xl">🍯</span>
                  </div>
                  <div className="bg-[#f1af7b] text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    1
                  </div>
                  <h3 className="font-serif text-xl font-bold text-amber-900 mb-3">Choose a Coating</h3>
                  <p className="text-amber-700 leading-relaxed max-w-48">
                    Cinnamon sugar, coconut flakes, or crushed nuts
                  </p>
                </div>
              </div>

              {/* Step 2 - Top Right */}
              <div className="absolute top-0 right-0 text-center group">
                <div className="relative">
                  {/* Curved arrow pointing to center */}
                  <svg
                    className="absolute -bottom-8 -left-24 w-24 h-24 text-amber-400 opacity-60"
                    viewBox="0 0 100 100"
                    fill="none"
                  >
                    <path
                      d="M80 20 Q50 10 20 40"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="4,4"
                      markerEnd="url(#arrowhead2)"
                    />
                    <defs>
                      <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                      </marker>
                    </defs>
                  </svg>

                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300 border-2 border-amber-100">
                    <span className="text-3xl">🍦</span>
                  </div>
                  <div className="bg-[#f1af7b] text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    2
                  </div>
                  <h3 className="font-serif text-xl font-bold text-amber-900 mb-3">Pick a Filling</h3>
                  <p className="text-amber-700 leading-relaxed max-w-48">
                    Nutella, vanilla ice cream, or whipped cream
                  </p>
                </div>
              </div>

              {/* Step 3 - Bottom Center */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center group">
                <div className="relative">

                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300 border-2 border-amber-100">
                    <span className="text-3xl">🍓</span>
                  </div>
                  <div className="bg-[#f1af7b] text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    3
                  </div>
                  <h3 className="font-serif text-xl font-bold text-amber-900 mb-3">Top it Off</h3>
                  <p className="text-amber-700 leading-relaxed max-w-48">
                    Chocolate chips, fresh berries, or caramel drizzle
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout - Cone on top, steps stacked below */}
          <div className="md:hidden">
            {/* Center Cone Image */}
            <div className="flex justify-center mb-12">
              <div className="relative animate-bounce-slow">
                <div className="drop-shadow-2xl">
                  <img src="/kurtos-hero-cone.png" alt="Kurtos cone" className="w-32 h-32 object-contain" />
                </div>
              </div>
            </div>

            {/* Steps stacked vertically */}
            <div className="space-y-8">

              {[
                {
                  step: "1",
                  title: "Choose a Coating",
                  description: "Cinnamon sugar, coconut flakes, or crushed nuts",
                  icon: "🍯",
                },
                {
                  step: "2",
                  title: "Pick a Filling",
                  description: "Nutella, vanilla ice cream, or whipped cream",
                  icon: "🍦",
                },
                {
                  step: "3",
                  title: "Top it Off",
                  description: "Chocolate chips, fresh berries, or caramel drizzle",
                  icon: "🍓",
                },
              ].map((step, index) => (
                <div key={index} className="text-center group relative z-10">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300 border-2 border-amber-100">
                    <span className="text-3xl">{step.icon}</span>
                  </div>
                  <div className="bg-[#f1af7b] text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {step.step}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-amber-900 mb-3">{step.title}</h3>
                  <p className="text-amber-700 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Breakfast & Coffee Section */}
      <section className="py-20 sage-bg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-amber-900 mb-6">
                Slow Mornings,
                <span className="block text-amber-800">Cozy Coffee</span>
              </h2>
              <p className="text-amber-700 text-lg leading-relaxed mb-6">
                Start your day with our freshly brewed coffee and warm chimney cakes. Our cozy café atmosphere is
                perfect for morning meetings, study sessions, or simply enjoying a peaceful moment.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Coffee className="w-5 h-5 text-[#f1af7b]" />
                  <span className="text-amber-800">Premium arabica coffee beans</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#f1af7b]" />
                  <span className="text-amber-800">Fresh kurtos baked every 30 minutes</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-[#f1af7b]" />
                  <span className="text-amber-800">Cozy seating for 25 guests</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/morning-section.png"
                alt="Coffee and kurtos morning experience"
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <TestimonialsSection />
        </div>
      </section>

      {/* Visit & Order Section */}
      <section id="visit" className="py-20 peach-bg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-amber-900 mb-4">Visit Us or Order Online</h2>
            <p className="text-amber-700 text-lg">Experience the warmth of our café or enjoy kurtos at home</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Location Card */}
            <Card className="bg-white rounded-3xl shadow-xl border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="h-64 flex items-center justify-center">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Kurtos+I-8+Markaz+Islamabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full hover:opacity-90 transition-opacity duration-200"
                  >
                    <img
                      src="/kurtos-map.png"
                      alt="Kurtos Location Map - I-8 Markaz, Islamabad"
                      className="w-full h-full object-cover rounded-t-3xl"
                    />
                  </a>
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-amber-900 mb-4">Visit Our Café</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-[#f1af7b]" />
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Kurtos+I-8+Markaz+Islamabad"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-800 hover:text-[#f1af7b] transition-colors underline"
                      >
                        I-8 Markaz, Islamabad
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-[#f1af7b]" />
                      <span className="text-amber-800">Daily 10:00 AM - 11:00 PM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-[#f1af7b]" />
                      <span className="text-amber-800">+92 317 581 8580</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Online Card */}
            <Card className="bg-gradient-to-br from-[#f1af7b] to-[#e89b66] rounded-3xl shadow-xl border-0 text-white">
              <CardContent className="p-8 h-full flex flex-col justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Cake className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-4">Order Now</h3>
                  <p className="text-orange-100 mb-8 leading-relaxed">
                    Craving kurtos? Browse our menu and place your order. Enjoy our fresh chimney cakes delivered to your doorstep.
                  </p>
                  <Button
                    size="lg"
                    className="bg-white text-[#f1af7b] hover:bg-orange-50 rounded-full px-8 py-3 font-semibold"
                  >
                    <a href="https://www.foodpanda.pk/restaurant/y3wu/kurtos-i8" target="_blank" rel="noopener noreferrer" className="text-[#f1af7b] hover:text-[#f1af7b]">Order Now</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-amber-50 to-orange-50 py-16 relative overflow-hidden">
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
                <img src="/kurtos signboard.png" alt="Kurtos Signboard" className="h-16 w-auto object-contain" />
              </a>
            </div>
            <p className="text-amber-700 text-lg font-medium italic">Where every swirl tells a tale</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="font-semibold text-amber-900 mb-3">Quick Links</h4>
              <div className="space-y-2 text-amber-700">
                <p>
                  <a href="/menu" className="hover:text-[#f1af7b] transition-colors">
                    Menu
                  </a>
                </p>
                <p>
                  <a href="#about" className="hover:text-[#f1af7b] transition-colors">
                    About Us
                  </a>
                </p>
                <p>
                  <a href="#visit" className="hover:text-[#f1af7b] transition-colors">
                    Visit
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-amber-900 mb-3">Contact</h4>
              <div className="space-y-2 text-amber-700">
                <p>I-8 Markaz, Islamabad</p>
                  <p>+92 317 581 8580</p>
                <p>hello@kurtos.pk</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-amber-900 mb-3">Follow Us</h4>
              <div className="flex justify-center gap-4">
                <a
                  href="https://www.facebook.com/kurtospakistan/?ref=_xav_ig_profile_page_web#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#f1af7b] bg-opacity-30 rounded-full flex items-center justify-center hover:bg-opacity-50 transition-colors cursor-pointer group"
                >
                  <Facebook className="w-5 h-5 text-white group-hover:text-[#f1af7b]" />
                </a>
                <a
                  href="https://www.instagram.com/kurtos_pakistan?igsh=aXd0ejVhZWs2dHZq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#f1af7b] bg-opacity-30 rounded-full flex items-center justify-center hover:bg-opacity-50 transition-colors cursor-pointer group"
                >
                  <Instagram className="w-5 h-5 text-white group-hover:text-[#f1af7b]" />
                </a>
                <a
                  href="https://www.threads.com/@kurtos_pakistan?xmt=AQF0C60q7JfjWUuByEFVNvs589Dz41vV7clYsRxaDfwivyI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#f1af7b] bg-opacity-30 rounded-full flex items-center justify-center hover:bg-opacity-50 transition-colors cursor-pointer group"
                >
                  <svg
                    className="w-5 h-5 text-white group-hover:text-[#f1af7b]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.068v-.036c0-3.518.85-6.373 2.495-8.424C5.845 1.205 8.598.024 12.179 0h.007c3.581.024 6.334 1.205 8.184 3.509C21.65 5.56 22.5 8.414 22.5 11.932v.036c0 3.518-.85 6.373-2.495 8.424C18.155 22.795 15.402 23.976 11.821 24h-.007z" />
                    <path d="M12 16.5c-2.481 0-4.5-2.019-4.5-4.5s2.019-4.5 4.5-4.5 4.5 2.019 4.5 4.5-2.019 4.5-4.5 4.5zm0-7c-1.378 0-2.5 1.122-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5z" />
                    <circle cx="16.5" cy="7.5" r="1.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-orange-200 mt-12 pt-8 text-center text-amber-600">
            <p>&copy; 2024 Kurtos I-8 Islamabad. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
