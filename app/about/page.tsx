"use client"

import { useState } from "react"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import { GlowCard } from "@/components/spotlight-card"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navbar currentPage="about" />

      {/* Hero About Section */}
      <section className="py-20 pt-32 bg-gradient-to-br from-amber-50 via-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl lg:text-6xl font-bold text-amber-900 mb-6 hover:scale-105 transition-transform duration-300">
              Our Story
            </h1>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed">
              A journey from Europe's café-lined streets to the heart of Pakistan
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image on Left */}
            <div className="relative group">
              <GlowCard
                glowColor="orange"
                size="lg"
                customSize={true}
                className="w-full h-auto overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500"
              >
                <div className="relative overflow-hidden">
                  <img
                    src="/assets/all_items.jpg"
                    alt="Kurtos Journey - All our delicious creations"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Hover overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/0 via-transparent to-amber-900/0 group-hover:from-amber-900/10 group-hover:to-amber-900/5 transition-all duration-500"></div>
                  
                  {/* Interactive floating elements */}
                  <div className="absolute top-6 right-6 w-3 h-3 bg-[#f1af7b] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300"></div>
                  <div className="absolute bottom-8 left-8 w-4 h-4 bg-amber-600 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300 delay-100"></div>
                  <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-amber-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300 delay-200"></div>
                </div>
              </GlowCard>
              
              {/* Decorative corner accents */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-[#f1af7b] to-amber-600 rounded-full opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-500"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-500 delay-100"></div>
            </div>

            {/* Text on Right */}
            <div className="space-y-6">
              <div className="group">
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-amber-900 mb-6 group-hover:text-[#f1af7b] transition-colors duration-300">
                  Born from European Dreams
                </h2>
                
                <div className="space-y-4 text-lg text-amber-700 leading-relaxed">
                  <p className="hover:text-amber-600 transition-colors duration-300">
                    Born from countless journeys through Europe's café-lined streets, Kurtos brings the artistry of chimney cakes to Pakistan. Each bake carries the essence of tradition, reimagined with care and creativity.
                  </p>
                  
                  <p className="hover:text-amber-600 transition-colors duration-300">
                    What began with the curious eye of an aeronautical engineer, inspired by travels across Europe's bakeries, has now taken flight here. Kurtos was born to bring the timeless charm of chimney cakes closer to home.
                  </p>
                  
                  <p className="hover:text-amber-600 transition-colors duration-300">
                    Each creation blends tradition with craftsmanship, offering not just dessert, but an experience of warmth, heritage, and indulgence.
                  </p>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => window.location.href = '/menu'}
                    className="group/btn bg-gradient-to-r from-[#f1af7b] to-amber-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
                  >
                    <span className="relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300">
                      Explore Our Creations
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-800 translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500"></div>
                  </button>
                  
                  <button 
                    onClick={() => window.open('https://www.foodpanda.pk/restaurant/s7uw/kurtos-kalash', '_blank')}
                    className="px-8 py-4 bg-white border-2 border-[#f1af7b] text-[#805334] font-bold text-lg rounded-full hover:bg-[#f1af7b] hover:text-white hover:scale-105 transition-all duration-300"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-amber-900 mb-4">Our Values</h2>
            <p className="text-amber-700 text-lg max-w-2xl mx-auto">
              The principles that guide every creation at Kurtos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Tradition",
                description: "Honoring authentic European recipes passed down through generations",
                icon: "🏛️"
              },
              {
                title: "Craftsmanship", 
                description: "Each chimney cake is handcrafted with precision and passion",
                icon: "👨‍🍳"
              },
              {
                title: "Innovation",
                description: "Reimagining classic flavors with creative, contemporary touches",
                icon: "✨"
              }
            ].map((value, index) => (
              <GlowCard
                key={index}
                glowColor="orange"
                size="md"
                customSize={true}
                className="group text-center p-8 bg-gradient-to-br from-orange-50 to-yellow-50 hover:from-orange-100 hover:to-yellow-100 transition-all duration-300 hover:-translate-y-2 w-full h-auto"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-amber-900 mb-3 group-hover:text-[#f1af7b] transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-amber-700 group-hover:text-amber-600 transition-colors duration-300">
                  {value.description}
                </p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
