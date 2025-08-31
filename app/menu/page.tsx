"use client"

import { useState, useEffect, useMemo } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import AboutSection from "@/components/AboutSection"
import { 
  MapPin, 
  Clock, 
  Phone, 
  Coffee, 
  IceCream, 
  Star, 
  Cake, 
  Utensils, 
  Search,
  X,
  ChefHat,
  Sandwich,
  Soup
} from "lucide-react"

// Menu item type
interface MenuItem {
  category: string
  subcategory: string
  item: string
  size: string
  price: number | null
  notes: string
  image: string
}

// Category icons mapping
const categoryIcons: { [key: string]: any } = {
  "Build Your Own Kurtos": ChefHat,
  "Signature Sandwiches": Sandwich,
  "Cold Sandwiches": Sandwich,
  "Breakfast": Soup,
  "Sweet Mornings": Cake,
  "Hot Beverages": Coffee,
  "Cold Beverages": Coffee,
  "Frozen Frappes": IceCream,
  "Rich Mojitos": IceCream,
  "Flavoured Shakes": IceCream,
  "Kurtos' Specials": Star,
}

// Parse CSV data
const parseCSV = (csvText: string): MenuItem[] => {
  const lines = csvText.trim().split('\n')
  const headers = lines[0].split(',')
  
  return lines.slice(1).map(line => {
    const values = line.split(',')
    return {
      category: values[0] || '',
      subcategory: values[1] || '',
      item: values[2] || '',
      size: values[3] || '',
      price: values[4] && values[4] !== '' ? parseFloat(values[4]) : null,
      notes: values[5] || '',
      image: values[6] || 'generic.jpg'
    }
  })
}

// Function to get the appropriate image based on category
const getCategoryImage = (category: string, originalImage: string): string => {
  // Categories that should show the shake image (cold/iced/frozen)
  const shakeCategories = new Set([
    "Cold Beverages",
    "Frozen Frappes",
    "Rich Mojitos",
    "Flavoured Shakes",
    "Flavoured Shakes ",
    "Flavoured Shakes",
    "Ice Creams",
    "Ice Cream",
  ])

  if (shakeCategories.has(category)) {
    return "shake.png"
  }

  // Sandwich categories should show sandwich image
  const sandwichCategories = new Set(["Signature Sandwiches", "Cold Sandwiches", "Sandwiches"])
  if (sandwichCategories.has(category)) {
    return "sandwich.jpeg"
  }

  // Leave Hot Beverages and everything else as-is
  return originalImage
}

export default function MenuPage() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isLoading, setIsLoading] = useState(true)

  // Load menu data from CSV
  useEffect(() => {
    const loadMenuData = async () => {
      try {
        const response = await fetch('/data/menu.csv')
        const csvText = await response.text()
        const parsed = parseCSV(csvText)
        
        // Combine Build Your Own Kurtos categories
        const processedItems = parsed.map(item => {
          if (item.category.startsWith("Build Your Own Kurtos")) {
            return { ...item, category: "Build Your Own Kurtos" }
          }
          return item
        })
        
        setMenuItems(processedItems)
      } catch (error) {
        console.error('Error loading menu data:', error)
      } finally {
        setIsLoading(false)
      }
    }
    
    loadMenuData()
  }, [])

  // Get unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(menuItems.map(item => item.category)))
    return ["All", ...cats.sort()]
  }, [menuItems])

  // Filter menu items based on search and category
  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      const matchesSearch = item.item.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.subcategory.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [menuItems, searchTerm, selectedCategory])

  // Group filtered items by category
  const groupedItems = useMemo(() => {
    const grouped: { [key: string]: MenuItem[] } = {}
    filteredItems.forEach(item => {
      if (!grouped[item.category]) {
        grouped[item.category] = []
      }
      grouped[item.category].push(item)
    })
    return grouped
  }, [filteredItems])

  // Group items by item name and size for pricing display
  const groupItemsByName = (items: MenuItem[]) => {
    const grouped: { [key: string]: MenuItem[] } = {}
    items.forEach(item => {
      if (!grouped[item.item]) {
        grouped[item.item] = []
      }
      grouped[item.item].push(item)
    })
    return grouped
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff7f2] to-white">
      {/* Navigation */}
      <Navbar currentPage="menu" />

      <div className="pt-20">
        {/* Header Section - Responsive */}
        <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-[#f1af7b] to-[#e89b66] relative overflow-hidden">
          {/* Floating decorative elements */}
          <div className="floating-element absolute top-10 left-10 w-4 h-4 bg-white rounded-full opacity-30 animate-bounce"></div>
          <div className="floating-element absolute top-32 right-20 w-3 h-3 bg-white rounded-full opacity-40 animate-pulse"></div>
          <div className="floating-element absolute bottom-20 left-1/4 w-2 h-2 bg-white rounded-full opacity-50 animate-bounce"></div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 animate-fade-in">Our Menu</h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-6 md:mb-8 px-4">
              Discover our delicious selection of chimney cakes, beverages, and treats crafted with love
            </p>
            
            {/* Search Bar - Mobile Optimized */}
            <div className="max-w-md mx-auto relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search menu items..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-10 py-2 md:py-3 text-base md:text-lg bg-white/90 backdrop-blur-sm border-0 rounded-full focus:ring-2 focus:ring-white/50 w-full"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 touch-friendly"
                  >
                    <X className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter - Mobile Optimized */}
        <section className="py-6 md:py-8 bg-white/50 backdrop-blur-sm border-b border-orange-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-base md:text-lg font-semibold text-[#805334] mb-3 md:mb-4 text-center">Filter by Category</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`text-xs md:text-sm py-2 px-3 h-auto transition-all duration-300 touch-friendly ${
                    selectedCategory === category
                      ? "bg-[#f1af7b] hover:bg-[#e89b66] text-white shadow-lg"
                      : "bg-white text-[#805334] border-[#f1af7b] hover:bg-[#f1af7b]/10 hover:shadow-md"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Items Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            {isLoading ? (
              <div className="text-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#f1af7b] mx-auto mb-4"></div>
                <p className="text-[#805334]">Loading delicious menu items...</p>
              </div>
            ) : (
              <>
                {filteredItems.length === 0 ? (
                  <div className="text-center py-20">
                    <div className="w-24 h-24 bg-[#f1af7b]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="w-12 h-12 text-[#f1af7b]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#805334] mb-2">No items found</h3>
                    <p className="text-gray-600 mb-4">Try adjusting your search or category filter</p>
                    <Button
                      onClick={() => {
                        setSearchTerm("")
                        setSelectedCategory("All")
                      }}
                      className="bg-[#f1af7b] hover:bg-[#e89b66] text-white"
                    >
                      Clear Filters
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-16">
                    {Object.entries(groupedItems).map(([category, items]) => {
                      const IconComponent = categoryIcons[category] || Utensils
                      
                      return (
                        <div key={category} className="space-y-8">
                          {/* Category Header */}
                          <div className="text-center">
                            <div className="flex items-center justify-center gap-3 mb-4">
                              <div className="w-12 h-12 bg-[#f1af7b] rounded-full flex items-center justify-center">
                                <IconComponent className="w-6 h-6 text-white" />
                              </div>
                              <h2 className="text-3xl font-bold text-[#805334]">{category}</h2>
                            </div>
                          </div>

                          {/* Special handling for Build Your Own Kurtos */}
                          {category === "Build Your Own Kurtos" ? (
                            <div className="space-y-12">
                              {/* Group by subcategory */}
                              {["", "Build Your Own Kurtos - Spreads", "Build Your Own Kurtos - Fillings"].map(subcategory => {
                                const subcategoryItems = items.filter(item => 
                                  subcategory === "" ? !item.subcategory : item.subcategory === subcategory
                                )
                                
                                if (subcategoryItems.length === 0) return null
                                
                                const subcategoryTitle = subcategory === "" ? "Bases" : 
                                                       subcategory.includes("Spreads") ? "Spreads" : "Fillings"
                                
                                return (
                                  <div key={subcategory} className="space-y-6">
                                    <h3 className="text-xl font-semibold text-[#805334] text-center bg-[#f1af7b]/10 py-2 rounded-lg">
                                      {subcategoryTitle}
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                      {Object.entries(groupItemsByName(subcategoryItems)).map(([itemName, itemVariants]) => {
                                        const firstItem = itemVariants[0]
                                        
                                        return (
                                          <Card
                                            key={itemName}
                                            className="group bg-white border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                                          >
                                            <CardContent className="p-4">
                                              <h4 className="text-lg font-medium text-[#805334] mb-2 group-hover:text-[#f1af7b] transition-colors">
                                                {itemName}
                                              </h4>
                                              
                                              {/* Pricing */}
                                              <div className="space-y-2">
                                                {itemVariants.some(item => item.size && item.size.trim() !== '') ? (
                                                  // Multiple sizes
                                                  <div className="flex flex-wrap gap-2">
                                                    {itemVariants
                                                      .filter(item => item.price !== null)
                                                      .map((item, index) => (
                                                        <div key={index} className="flex items-center gap-2">
                                                          {item.size && item.size.trim() !== '' && (
                                                            <Badge
                                                              variant="outline"
                                                              className="text-xs border-[#f1af7b] text-[#805334]"
                                                            >
                                                              {item.size}
                                                            </Badge>
                                                          )}
                                                          <span className="font-semibold text-[#f1af7b]">
                                                            ₨{item.price}
                                                          </span>
                                                        </div>
                                                      ))}
                                                  </div>
                                                ) : (
                                                  // Single price
                                                  itemVariants[0].price !== null && (
                                                    <span className="font-semibold text-[#f1af7b] text-lg">
                                                      ₨{itemVariants[0].price}
                                                    </span>
                                                  )
                                                )}
                                                
                                                {/* Notes */}
                                                {firstItem.notes && firstItem.notes.trim() !== '' && (
                                                  <p className="text-sm text-gray-600 italic">
                                                    {firstItem.notes}
                                                  </p>
                                                )}
                                              </div>
                                            </CardContent>
                                          </Card>
                                        )
                                      })}
                                    </div>
                                  </div>
                                )
                              })}
                            </div>
                          ) : (
                            /* Regular category display */
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                              {Object.entries(groupItemsByName(items)).map(([itemName, itemVariants]) => {
                                const firstItem = itemVariants[0]
                                
                                return (
                                  <Card
                                    key={itemName}
                                    className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                                  >
                                    {/* Image */}
                                    <div className="relative h-48 overflow-hidden">
                                      <img
                                        src={`/assets/${getCategoryImage(category, firstItem.image)}`}
                                        alt={itemName}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        onError={(e) => {
                                          const target = e.target as HTMLImageElement
                                          target.src = '/placeholder.jpg'
                                        }}
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                      
                                      {/* Floating Badge */}
                                      {category.includes("Kurtos") && (
                                        <div className="absolute top-3 right-3">
                                          <Badge className="bg-[#f1af7b] text-white border-0">
                                            <Star className="w-3 h-3 mr-1" />
                                            Special
                                          </Badge>
                                        </div>
                                      )}
                                    </div>

                                    <CardContent className="p-6">
                                      <h3 className="text-xl font-bold text-[#805334] mb-3 group-hover:text-[#f1af7b] transition-colors">
                                        {itemName}
                                      </h3>
                                      
                                      {/* Pricing */}
                                      <div className="space-y-2">
                                        {itemVariants.some(item => item.size && item.size.trim() !== '') ? (
                                          // Multiple sizes
                                          <div className="flex flex-wrap gap-2">
                                            {itemVariants
                                              .filter(item => item.price !== null)
                                              .map((item, index) => (
                                                <div key={index} className="flex items-center gap-2">
                                                  {item.size && item.size.trim() !== '' && (
                                                    <Badge
                                                      variant="outline"
                                                      className="text-xs border-[#f1af7b] text-[#805334]"
                                                    >
                                                      {item.size}
                                                    </Badge>
                                                  )}
                                                  <span className="font-bold text-[#f1af7b] text-lg">
                                                    ₨{item.price}
                                                  </span>
                                                </div>
                                              ))}
                                          </div>
                                        ) : (
                                          // Single price
                                          itemVariants[0].price !== null && (
                                            <span className="font-bold text-[#f1af7b] text-xl">
                                              ₨{itemVariants[0].price}
                                            </span>
                                          )
                                        )}
                                        
                                        {/* Notes */}
                                        {firstItem.notes && firstItem.notes.trim() !== '' && (
                                          <p className="text-sm text-gray-600 italic">
                                            {firstItem.notes}
                                          </p>
                                        )}
                                      </div>

                                      {/* Order Button */}
                                      <Button
                                        className="w-full mt-4 bg-[#f1af7b] hover:bg-[#e89b66] text-white transform hover:scale-105 transition-all duration-300"
                                        onClick={() => window.open('https://www.foodpanda.pk/restaurant/y3wu/kurtos-i8', '_blank')}
                                      >
                                        Add to Order
                                      </Button>
                                    </CardContent>
                                  </Card>
                                )
                              })}
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-20 bg-gradient-to-r from-[#f1af7b] to-[#e89b66] relative overflow-hidden">
          {/* Floating decorations */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="floating-element absolute top-10 left-10 w-3 h-3 bg-white rounded-full opacity-30 animate-bounce"></div>
            <div className="floating-element absolute top-20 right-20 w-4 h-4 bg-white rounded-full opacity-20 animate-pulse"></div>
            <div className="floating-element absolute bottom-20 left-1/3 w-2 h-2 bg-white rounded-full opacity-40 animate-bounce"></div>
          </div>

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Order?</h2>
            <p className="text-white/90 text-lg mb-8">
              Visit us today and experience the magic of authentic chimney cakes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.open('https://www.foodpanda.pk/restaurant/y3wu/kurtos-i8', '_blank')}
                className="bg-white text-[#f1af7b] px-8 py-4 text-lg rounded-full font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Order Now
              </Button>
              <Button
                onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Kurtos+I-8+Markaz+Islamabad', '_blank')}
                variant="outline"
                className="bg-transparent border-2 border-white text-white px-8 py-4 text-lg rounded-full font-semibold hover:bg-white hover:text-[#f1af7b] transform hover:scale-105 transition-all duration-300"
              >
                Visit Our Store
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* About Section */}
      <AboutSection />

      {/* Footer */}
      <Footer />

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .floating-element {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: #f1af7b;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #e89b66;
        }
      `}</style>
    </div>
  )
}
