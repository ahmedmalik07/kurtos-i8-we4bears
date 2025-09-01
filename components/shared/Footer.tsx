"use client"

import { MapPin, Clock, Phone, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer id="footer" className="bg-gradient-to-br from-amber-50 to-orange-50 py-16 relative overflow-hidden">
      {/* Floating decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-element absolute top-10 left-10 w-3 h-3 bg-[#f1af7b] rounded-full opacity-30 animate-pulse"></div>
        <div className="floating-element absolute top-20 right-20 w-4 h-4 bg-[#f1af7b] rounded-full opacity-20 animate-bounce"></div>
        <div className="floating-element absolute bottom-20 left-1/3 w-2 h-2 bg-[#f1af7b] rounded-full opacity-40 animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <a href="/" className="hover:opacity-80 transition-opacity duration-200">
              <img src="/logo.png" alt="Kurtos Logo" width={48} height={48} loading="lazy" decoding="async" className="w-12 h-12 object-contain" />
            </a>
            <a href="/" className="hover:opacity-80 transition-opacity duration-200">
              <img src="/kurtos signboard.png" alt="Kurtos Signboard" width={180} height={48} loading="lazy" decoding="async" className="h-12 w-auto object-contain" />
            </a>
          </div>
          <h3 className="font-serif text-2xl font-bold text-amber-900 mb-2"></h3>
          <p className="text-amber-700">Authentic Hungarian chimney cakes in Islamabad</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center">
            <h4 className="font-semibold text-amber-900 mb-3 flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" />
              Location
            </h4>
            <div className="space-y-2 text-amber-700">
              <p>I-8 Markaz, Islamabad</p>
              <p className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4" />
                Daily: 10:00 AM - 11:00 PM
              </p>
              <p className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                +92 317 581 8580
              </p>
            </div>
          </div>
          <div className="text-center">
            <h4 className="font-semibold text-amber-900 mb-3">Quick Links</h4>
            <div className="space-y-2">
              <a href="/" className="block text-amber-700 hover:text-[#f1af7b] transition-colors">Home</a>
              <a href="/menu" className="block text-amber-700 hover:text-[#f1af7b] transition-colors">Menu</a>
              <a href="/#about" className="block text-amber-700 hover:text-[#f1af7b] transition-colors">About</a>
              <a href="/#testimonials" className="block text-amber-700 hover:text-[#f1af7b] transition-colors">Reviews</a>
            </div>
          </div>
          <div className="text-center">
            <h4 className="font-semibold text-amber-900 mb-3">Follow Us</h4>
            <div className="flex justify-center gap-4 mb-4">
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
            </div>
            <div className="space-y-2 text-sm">
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
  )
}
