"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

interface NavbarProps {
  currentPage?: string
}

export default function Navbar({ currentPage = "" }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/#about", label: "About" },
    { href: "/#testimonials", label: "Reviews" },
    { href: "/#visit", label: "Visit" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-orange-100/50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2 md:py-3 flex items-center">
        {/* Left side - Mobile menu + Logo */}
        <div className="flex items-center gap-2">
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="p-1.5 text-amber-800 hover:bg-amber-50 touch-friendly"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-4 h-4" />
            </Button>
          </div>
          
          {/* Logo and Signboard */}
          <a href="/" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity duration-200">
            <img src="/logo.png" alt="Kurtos Logo" loading="eager" decoding="sync" width="24" height="24" className="w-6 h-6 md:w-7 md:h-7 object-contain" />
            <img src="/kurtos signboard.png" alt="Kurtos Signboard" loading="eager" decoding="sync" width="96" height="20" className="h-5 md:h-6 w-auto object-contain" />
          </a>
        </div>

        {/* Center - Desktop Navigation */}
        <div className="hidden md:flex items-center gap-3 lg:gap-6 text-xs lg:text-sm text-amber-800 absolute left-1/2 transform -translate-x-1/2">
          {navItems.map((item) => {
            const isActive = 
              (currentPage === "home" && item.href === "/") ||
              (currentPage === "menu" && item.href === "/menu") ||
              (currentPage === "about" && item.href === "/#about") ||
              (currentPage !== "home" && currentPage !== "menu" && currentPage !== "about" && item.href.includes("#"))
            
            return (
              <a
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  isActive
                    ? "text-[#f1af7b] font-semibold"
                    : "hover:text-[#f1af7b]"
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </div>

        {/* Right side - Action Buttons */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4 ml-auto">
          <a
            href="https://www.foodpanda.pk/restaurant/y3wu/kurtos-i8"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#f1af7b] hover:bg-[#e89b66] text-white px-3 py-2 lg:px-4 lg:py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg text-xs lg:text-sm"
          >
            Order Now
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Kurtos+I-8+Markaz+Islamabad"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#f1af7b] border-2 border-[#f1af7b] px-3 py-2 lg:px-4 lg:py-2 rounded-full font-semibold hover:bg-[#f1af7b] hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg text-xs lg:text-sm"
          >
            Visit Store
          </a>
        </div>
      </div>

      {/* Mobile Menu - Enhanced */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-amber-100/50 shadow-xl">
          <div className="px-4 sm:px-6 py-6 space-y-1">
            {navItems.map((item) => {
              const isActive = 
                (currentPage === "home" && item.href === "/") ||
                (currentPage === "menu" && item.href === "/menu") ||
                (currentPage === "about" && item.href === "/#about")
              
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`block transition-all duration-300 text-base font-medium py-3 px-4 rounded-lg touch-friendly ${
                    isActive
                      ? "text-[#f1af7b] font-semibold bg-amber-50"
                      : "text-amber-800 hover:text-[#f1af7b] hover:bg-amber-50"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              )
            })}
            
            {/* Mobile Action Buttons */}
            <div className="pt-6 border-t border-amber-100/50 space-y-3">
              <a
                href="https://www.foodpanda.pk/restaurant/y3wu/kurtos-i8"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#f1af7b] hover:bg-[#e89b66] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg text-center text-base touch-friendly"
                onClick={() => setMobileMenuOpen(false)}
              >
                Order Now
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Kurtos+I-8+Markaz+Islamabad"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white text-[#f1af7b] border-2 border-[#f1af7b] px-6 py-3 rounded-full font-semibold hover:bg-[#f1af7b] hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg text-center text-base touch-friendly"
                onClick={() => setMobileMenuOpen(false)}
              >
                Visit Our Store
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
