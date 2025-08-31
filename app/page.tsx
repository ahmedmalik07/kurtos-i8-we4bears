"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import HungarianHero from "@/components/HungarianHero"
import { SplashCursor } from "@/components/SplashCursor"
import { GlowCard } from "@/components/spotlight-card"
import AboutSection from "@/components/AboutSection"
import { MapPin, Clock, Phone, Heart, Coffee, Cake, Sparkles, Facebook, Instagram } from "lucide-react"
import TestimonialsSection from "@/components/ui/testimonials-columns"

export default function KurtosLandingPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navbar currentPage="home" />

      {/* Hungarian Hero Section */}
      <HungarianHero />

      {/* Hero Section */}
      <section className="relative min-h-screen pastry-bg flex items-center justify-center overflow-hidden">
        {/* Splash Cursor Effect - Limited to Hero Section */}
        <div className="absolute inset-0 z-10">
          <SplashCursor 
            DENSITY_DISSIPATION={2.8}
            VELOCITY_DISSIPATION={1.5}
            SPLAT_RADIUS={0.15}
            SPLAT_FORCE={4000}
            COLOR_UPDATE_SPEED={8}
            TRANSPARENT={true}
          />
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute inset-0 pointer-events-none z-20">
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

        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-30">
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
      <section id="menu" className="py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
        {/* Top-left roll illustration */}
        <div className="absolute top-4 left-4 opacity-10 pointer-events-none z-0">
          <img 
            src="/roll-illustration.png" 
            alt="Roll illustration top-left" 
            className="w-32 md:w-48 h-32 md:h-48 object-contain"
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 mb-4 md:mb-6 animate-rise-up animate-delay-100 hover:scale-105 transition-transform duration-300 leading-tight tracking-tight">
              Kurtos Signature Delights
            </h2>
            <p className="font-sans text-amber-700 text-base sm:text-lg md:text-xl max-w-3xl mx-auto animate-rise-up animate-delay-150 hover:text-amber-600 transition-colors duration-300 px-4 leading-relaxed font-medium">
              Curated with love, perfected with tradition, and made to be remembered—every creation is a piece of our story.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {[
              {
                name: "Classic Cinnamon Sugar",
                description: "Traditional kürtős with warm cinnamon and caramelized sugar coating",
                image: "/golden-chimney-cake-with-cinnamon-sugar-coating.png",
                badge: "Best Seller",
                badgeColor: "from-amber-800 to-amber-950",
                accent: "from-amber-600 to-orange-700"
              },
              {
                name: "Signature Cones",
                description: "Experience our artisanal chimney cakes, each freshly baked and hand-rolled for the perfect swirl.",
                image: "/kurtos-hero-cone.png",
                badge: "Fan Favorite",
                badgeColor: "from-amber-900 to-yellow-900",
                accent: "from-orange-600 to-red-700"
              },
              {
                name: "Pistachio Delight",
                description: "Premium pistachio coating with vanilla ice cream and pistachio crumbles",
                image: "/chimney-cake-with-pistachio-coating-and-ice-cream.png",
                badge: "Premium",
                badgeColor: "from-yellow-800 to-amber-900",
                accent: "from-green-600 to-emerald-700"
              },
            ].map((item, index) => (
              <GlowCard
                key={index}
                glowColor="darkBrown"
                size="lg"
                customSize={true}
                className={`group relative overflow-hidden rounded-2xl lg:rounded-3xl animate-rise-up animate-delay-${(index + 1) * 100} cursor-pointer transform hover:scale-[1.02] transition-all duration-700 ease-out bg-gradient-to-br from-white via-amber-50/30 to-orange-50/20 hover:from-amber-50/50 hover:via-orange-50/40 hover:to-yellow-50/30 shadow-2xl hover:shadow-3xl border border-amber-100/50 backdrop-blur-sm w-full h-auto`}
              >
                {/* Elegant background with subtle texture */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/3 via-orange-800/5 to-yellow-800/3 group-hover:from-amber-900/5 group-hover:via-orange-800/7 group-hover:to-yellow-800/5 transition-all duration-700 rounded-2xl lg:rounded-3xl"></div>
                
                {/* Refined content container */}
                <div className="relative z-10 p-6 sm:p-7 lg:p-8">
                  {/* Enhanced image container with sophisticated hover effects */}
                  <div className="relative mb-5 md:mb-6 group-hover:transform group-hover:-translate-y-1 transition-all duration-500">
                    <div className="relative overflow-hidden rounded-xl lg:rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 border border-amber-200/30">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      
                      {/* Refined image overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/15 via-transparent to-transparent group-hover:from-amber-900/25 transition-all duration-700"></div>
                      
                      {/* Elegant shimmer effect */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1200 bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
                    </div>
                    
                    {/* Refined badge with elegant typography */}
                    <div className={`absolute -top-2 -right-2 bg-gradient-to-r ${item.badgeColor} text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-sans font-bold shadow-lg backdrop-blur-sm group-hover:scale-105 group-hover:rotate-3 transition-all duration-300 border border-amber-700/20`}>
                      {item.badge}
                    </div>
                  </div>
                  
                  {/* Enhanced typography with Avenir Next consistency */}
                  <div className="space-y-3 md:space-y-4">
                    <h3 className="font-sans text-lg sm:text-xl lg:text-2xl font-bold text-amber-900 group-hover:text-amber-800 transition-colors duration-300 group-hover:transform group-hover:scale-[1.02] leading-tight tracking-tight">
                      {item.name}
                    </h3>
                    <p className="font-sans text-amber-700 leading-relaxed group-hover:text-amber-600 transition-colors duration-300 text-sm md:text-base font-medium">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Refined bottom accent bar */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.accent} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left rounded-b-2xl lg:rounded-b-3xl`}></div>
                  
                  {/* Subtle hover overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/0 via-orange-400/0 to-yellow-400/0 group-hover:from-amber-400/3 group-hover:via-orange-400/3 group-hover:to-yellow-400/3 transition-all duration-700 rounded-2xl lg:rounded-3xl pointer-events-none"></div>
                </div>
              </GlowCard>
            ))}
          </div>
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
      <section className="py-20 sage-bg relative overflow-hidden">
        {/* Interactive background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-[#f1af7b]/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-amber-200/10 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-amber-300/10 rounded-full animate-ping"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="group">
              <h2 className="font-serif text-4xl font-bold text-amber-900 mb-6 hover:scale-105 transition-transform duration-300 cursor-default">
                <span className="hover:text-[#f1af7b] transition-colors duration-300">Slow Brews</span>
                <span className="block text-amber-800 hover:text-amber-900 transition-colors duration-300">Sweet Swirls</span>
              </h2>
              <p className="text-amber-700 text-lg leading-relaxed mb-8 hover:text-amber-600 transition-colors duration-300">
                Begin your day with the aroma of freshly brewed coffee and the comforting swirl of warm Kürtős. Our cafe is a haven for those who cherish quiet indulgence and meaningful moments.
              </p>
              
              <div className="space-y-6">
                <div className="group/item flex items-center gap-4 p-4 rounded-2xl hover:bg-white/50 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#f1af7b] to-amber-600 rounded-full flex items-center justify-center group-hover/item:scale-110 group-hover/item:rotate-12 transition-all duration-300">
                    <Coffee className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-amber-800 font-medium group-hover/item:text-amber-900 group-hover/item:translate-x-2 transition-all duration-300">
                    Brewed from the finest origins
                  </span>
                </div>
                
                <div className="group/item flex items-center gap-4 p-4 rounded-2xl hover:bg-white/50 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-amber-600 to-amber-800 rounded-full flex items-center justify-center group-hover/item:scale-110 group-hover/item:rotate-12 transition-all duration-300">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-amber-800 font-medium group-hover/item:text-amber-900 group-hover/item:translate-x-2 transition-all duration-300">
                    Kürtős baked fresh every 30 minutes
                  </span>
                </div>
                
                <div className="group/item flex items-center gap-4 p-4 rounded-2xl hover:bg-white/50 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-amber-700 to-[#f1af7b] rounded-full flex items-center justify-center group-hover/item:scale-110 group-hover/item:rotate-12 transition-all duration-300">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-amber-800 font-medium group-hover/item:text-amber-900 group-hover/item:translate-x-2 transition-all duration-300">
                    Perfect pairings of coffee and artisanal delights
                  </span>
                </div>
              </div>

              {/* Interactive CTA Button */}
              <div className="mt-8">
                <button 
                  onClick={() => window.open('https://www.foodpanda.pk/restaurant/s7uw/kurtos-kalash', '_blank')}
                  className="group/btn bg-gradient-to-r from-[#f1af7b] to-amber-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300">
                    Order Your Perfect Pairing ☕
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-800 translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500"></div>
                </button>
              </div>
            </div>
            
            <div className="relative group cursor-pointer">
              {/* Background glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-300/20 to-orange-300/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              
              {/* Main image container */}
              <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                <img
                  src="/morning-section.png"
                  alt="Coffee and kurtos morning experience"
                  className="w-full h-64 md:h-80 lg:h-96 xl:h-[28rem] object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/30 transition-all duration-500"></div>
                
                {/* Floating elements */}
                <div className="absolute top-6 right-6 w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-bounce">
                  <div className="w-6 h-6 bg-[#f1af7b] rounded-full"></div>
                </div>
                
                {/* Corner decorations */}
                <div className="absolute bottom-6 left-6 space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  <div className="w-12 h-1 bg-white/60 rounded-full transform -rotate-12"></div>
                  <div className="w-8 h-1 bg-amber-300/80 rounded-full transform rotate-12"></div>
                  <div className="w-6 h-1 bg-orange-300/80 rounded-full transform -rotate-6"></div>
                </div>
                
                {/* Hover info card */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-white space-y-2">
                    <h4 className="font-serif text-lg font-bold">Perfect Pairings</h4>
                    <p className="text-sm opacity-90">Discover our curated selection of beverages designed to complement every kürtős creation</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative orbiting elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-70 group-hover:animate-ping transition-all duration-500"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full opacity-0 group-hover:opacity-70 group-hover:animate-pulse transition-all duration-500 delay-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="testimonials" className="py-20 bg-white">
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
            <GlowCard
              glowColor="orange"
              size="lg"
              customSize={true}
              className="bg-white rounded-3xl shadow-xl border-0 overflow-hidden w-full h-auto group hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 cursor-pointer"
            >
              <div className="h-64 flex items-center justify-center overflow-hidden rounded-t-3xl">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Kurtos+I-8+Markaz+Islamabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full hover:opacity-90 transition-opacity duration-200"
                >
                  <img
                    src="/kurtos-map.png"
                    alt="Kurtos Location Map - I-8 Markaz, Islamabad"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </a>
              </div>
              <div className="p-8 group-hover:bg-orange-50/50 transition-colors duration-300">
                <h3 className="font-serif text-2xl font-bold text-amber-900 mb-4 group-hover:text-[#f1af7b] transition-colors duration-300">Visit Our Café</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300">
                    <MapPin className="w-5 h-5 text-[#f1af7b] group-hover:scale-110 transition-transform duration-300" />
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Kurtos+I-8+Markaz+Islamabad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-800 hover:text-[#f1af7b] transition-colors underline"
                    >
                      I-8 Markaz, Islamabad
                    </a>
                  </div>
                  <div className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300 delay-75">
                    <Clock className="w-5 h-5 text-[#f1af7b] group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-amber-800 group-hover:text-amber-900 transition-colors duration-300">Daily 10:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300 delay-150">
                    <Phone className="w-5 h-5 text-[#f1af7b] group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-amber-800 group-hover:text-amber-900 transition-colors duration-300">+92 317 581 8580</span>
                  </div>
                </div>
              </div>
            </GlowCard>

            {/* Order Online Card */}
            <GlowCard
              glowColor="red"
              size="lg"
              customSize={true}
              className="bg-gradient-to-br from-[#f1af7b] to-[#e89b66] hover:from-[#e89b66] hover:to-[#f1af7b] rounded-3xl shadow-xl border-0 text-white w-full h-auto group hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 cursor-pointer"
            >
              <div className="p-8 h-full flex flex-col justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 group-hover:bg-white/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <Cake className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-4 group-hover:scale-105 transition-transform duration-300">Order Now</h3>
                  <p className="text-orange-100 group-hover:text-white mb-8 leading-relaxed transition-colors duration-300">
                    Craving kurtos? Browse our menu and place your order. Enjoy our fresh chimney cakes delivered to your doorstep.
                  </p>
                  <Button
                    size="lg"
                    className="bg-white text-[#f1af7b] hover:bg-orange-50 hover:scale-110 rounded-full px-8 py-3 font-semibold group-hover:shadow-lg transition-all duration-300"
                  >
                    <a 
                      href="https://www.foodpanda.pk/restaurant/y3wu/kurtos-i8" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#f1af7b] hover:text-[#f1af7b]"
                    >
                      Order Now
                    </a>
                  </Button>
                </div>
              </div>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
