"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import {
  Coffee,
  IceCream,
  Sandwich,
  Utensils,
  Cake,
  Star,
  ShoppingCart,
  Plus,
  Minus,
  X,
  CheckCircle,
  ArrowLeft,
  MapPin,
  Clock,
  Phone,
} from "lucide-react"

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  size?: string
  category: string
}

interface CustomerInfo {
  name: string
  phone: string
  email: string
  orderType: "pickup" | "delivery"
  address?: string
  notes?: string
}

interface ConeBuilder {
  step1?: { name: string; price: number }
  step2?: { name: string; price: number }
  step3?: { name: string; price: number }
}

enum CheckoutStep {
  CART = "cart",
  CHECKOUT = "checkout",
  CONFIRMATION = "confirmation",
}

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
      "Caramel Frappe": { Regular: 850, Large: 950 },
      "Mocca Frappe": { Regular: 850, Large: 950 },
      "Lotus Frappe": { Regular: 850, Large: 950 },
    },
  },
  "Rich Mojitos": {
    icon: Coffee,
    items: {
      "Passion Mojito": { Regular: 595, Large: 695 },
      "Kiwi Mojito": { Regular: 595, Large: 695 },
      "Strawberry Mojito": { Regular: 595, Large: 695 },
    },
  },
  "Hot Beverages": {
    icon: Coffee,
    items: {
      Espresso: { Regular: 475, Large: 575 },
      "Espresso Macchiato": { Regular: 475, Large: 575 },
      "Classic Americano": { Regular: 500, Large: 600 },
      Cortado: { Regular: 500, Large: 600 },
      "Cafe Latte": { Regular: 720, Large: 820 },
      "Flat White": { Regular: 720, Large: 820 },
      "Creamy Cappuccino": { Regular: 720, Large: 820 },
      "Vanilla Whisper Latte": { Regular: 750, Large: 850 },
      "Hazelnut Latte": { Regular: 750, Large: 850 },
      "Irish Latte": { Regular: 750, Large: 850 },
      "Caramel Kiss Latte": { Regular: 750, Large: 850 },
      "Spanish Bliss Latte": { Regular: 750, Large: 850 },
      Mochaccino: { Regular: 750, Large: 850 },
      Caramelito: { Regular: 750, Large: 850 },
      "Matcha Latte": { Regular: 650, Large: 750 },
      "Mocca Magic Latte": { Regular: 475, Large: 575 },
      "Kurtos Special Coffee": { Regular: 750, Large: 850 },
      "Hot Chocolate": { Regular: 650, Large: 750 },
      "Mix Tea": { Price: 395 },
    },
  },
  "Sweet Mornings": {
    icon: Cake,
    items: {
      "Smoothie Bowl": { Price: 750 },
      "Fluffy Loaded Waffle": { Price: 795 },
      "Fluffy Pancakes with Banana": { Price: 650 },
    },
  },
  "Signature Sandwiches": {
    icon: Sandwich,
    items: {
      "Club Sandwich": { Price: 1125 },
      "Beef, Onion & Green Chilli": { Price: 1275 },
      "Spicy Tandoori Chicken Sandwich": { Price: 1195 },
      "Grilled Tarragon Lime Chicken Sandwich": { Price: 1195 },
    },
  },
  "Cold Sandwiches": {
    icon: Sandwich,
    items: {
      "Curry Egg Sandwich": { Price: 450 },
      "Chicken Mexican Sandwich": { Price: 550 },
      "Beef Pickle Sandwich": { Price: 625 },
    },
  },
  "Kurtos Breakfast": {
    icon: Utensils,
    items: {
      "Kurtos Special English Breakfast": { Price: 1650 },
      "Scrambled Eggs": { Price: 1050 },
      "Spanish Omelette": { Price: 950 },
      "Chicken and Mushroom Omelette": { Price: 950 },
      "Chicken and Cheese Omelette": { Price: 1050 },
      Shakshuka: { Price: 750 },
    },
  },
}

const buildYourCone = {
  "Step 1 - Choose Your Cone": {
    "Sugar/Glazed": 350,
    "Cinnamon & Sugar": 350,
    "Red Velvet": 350,
    Brownie: 350,
    Chimney: 550,
  },
  "Step 2 - Choose Your Spread": {
    Chocolate: { "With Cone": 60, "With Chimney": 100 },
    "Peanut Butter": { "With Cone": 70, "With Chimney": 110 },
    Lotus: { "With Cone": 90, "With Chimney": 140 },
    "Strawberry Jam": { "With Cone": 80, "With Chimney": 110 },
    "Blueberry Jam": { "With Cone": 80, "With Chimney": 110 },
  },
  "Step 3 - Choose Your Filling": {
    Custard: 150,
    "Vanilla Ice Cream": 200,
    "Sweet Cream": 100,
    "Ice Cream + Brownie": 250,
    "Seasonal Fruits + Chocolate": 250,
    "Seasonal Fruits + Ice Cream": 250,
  },
}

export default function MenuPage() {
  const { toast } = useToast()
  const [cart, setCart] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [checkoutStep, setCheckoutStep] = useState<CheckoutStep>(CheckoutStep.CART)
  const [coneBuilder, setConeBuilder] = useState<ConeBuilder>({})
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: "",
    phone: "",
    email: "",
    orderType: "pickup",
    address: "",
    notes: "",
  })
  const [orderNumber, setOrderNumber] = useState<string>("")
  const [showContactCard, setShowContactCard] = useState(false)

  const addToCart = (name: string, price: number, category: string, size?: string) => {
    const id = `${name}-${size || "default"}`
    const existingItem = cart.find((item) => item.id === id)

    if (existingItem) {
      setCart(cart.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)))
      toast({
        title: "Quantity Updated! 🛒",
        description: `${name} quantity increased to ${existingItem.quantity + 1}`,
        duration: 3000,
      })
    } else {
      setCart([...cart, { id, name, price, quantity: 1, size, category }])
      toast({
        title: "Added to Cart! 🎉",
        description: `${name}${size ? ` (${size})` : ""} has been added to your cart`,
        duration: 3000,
      })
    }
  }

  const removeFromCart = (id: string) => {
    const itemToRemove = cart.find(item => item.id === id)
    setCart(cart.filter((item) => item.id !== id))
    
    if (itemToRemove) {
      toast({
        title: "Removed from Cart! ❌",
        description: `${itemToRemove.name} has been removed from your cart`,
        duration: 3000,
      })
    }
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(id)
    } else {
      const itemToUpdate = cart.find(item => item.id === id)
      setCart(cart.map((item) => (item.id === id ? { ...item, quantity } : item)))
      
      if (itemToUpdate && quantity > itemToUpdate.quantity) {
        toast({
          title: "Quantity Increased! 📈",
          description: `${itemToUpdate.name} quantity updated to ${quantity}`,
          duration: 2000,
        })
      } else if (itemToUpdate && quantity < itemToUpdate.quantity) {
        toast({
          title: "Quantity Decreased! 📉",
          description: `${itemToUpdate.name} quantity updated to ${quantity}`,
          duration: 2000,
        })
      }
    }
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const proceedToCheckout = () => {
    setCheckoutStep(CheckoutStep.CHECKOUT)
  }

  const goBackToCart = () => {
    setCheckoutStep(CheckoutStep.CART)
  }

  const generateOrderNumber = () => {
    const timestamp = Date.now().toString().slice(-6)
    const random = Math.floor(Math.random() * 1000)
      .toString()
      .padStart(3, "0")
    return `KUR${timestamp}${random}`
  }

  const confirmOrder = () => {
    const newOrderNumber = generateOrderNumber()
    setOrderNumber(newOrderNumber)
    setCheckoutStep(CheckoutStep.CONFIRMATION)

    // Show success toast
    toast({
      title: "Order Confirmed! 🎉",
      description: `Your order #${newOrderNumber} has been placed successfully!`,
      duration: 5000,
    })

    // Here you would typically send the order to your backend
    console.log("Order confirmed:", {
      orderNumber: newOrderNumber,
      customer: customerInfo,
      items: cart,
      total: getTotalPrice(),
    })
  }

  const startNewOrder = () => {
    setCart([])
    setCustomerInfo({
      name: "",
      phone: "",
      email: "",
      orderType: "pickup",
      address: "",
      notes: "",
    })
    setCheckoutStep(CheckoutStep.CART)
    setIsCartOpen(false)
    
    toast({
      title: "New Order Started! 🆕",
      description: "Your cart has been cleared for a fresh order",
      duration: 3000,
    })
  }

  const updateConeBuilder = (step: keyof ConeBuilder, name: string, price: number) => {
    setConeBuilder((prev) => ({
      ...prev,
      [step]: { name, price },
    }))
  }

  const addConeToCart = () => {
    if (coneBuilder.step1 && coneBuilder.step2 && coneBuilder.step3) {
      const totalPrice = coneBuilder.step1.price + coneBuilder.step2.price + coneBuilder.step3.price
      const coneName = `Custom Kurtos: ${coneBuilder.step1.name} + ${coneBuilder.step2.name} + ${coneBuilder.step3.name}`

      addToCart(coneName, totalPrice, "Build Your Cone")
      setConeBuilder({}) // Reset builder
    }
  }

  const getConeBuilderTotal = () => {
    return (coneBuilder.step1?.price || 0) + (coneBuilder.step2?.price || 0) + (coneBuilder.step3?.price || 0)
  }

  const isConeComplete = () => {
    return coneBuilder.step1 && coneBuilder.step2 && coneBuilder.step3
  }

  const renderCartContent = () => {
    switch (checkoutStep) {
      case CheckoutStep.CART:
        return (
          <div className="flex flex-col h-full max-h-[80vh]">
            <div className="flex-1 overflow-y-auto space-y-4">
              {cart.length === 0 ? (
                <p className="text-amber-700 text-center py-8">Your cart is empty</p>
              ) : (
                <>
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 bg-[#fff7f2] rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold text-amber-900">{item.name}</h4>
                        {item.size && <p className="text-sm text-amber-700">Size: {item.size}</p>}
                        <p className="text-sm text-amber-600">₨{item.price} each</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 p-0"
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 p-0"
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                          className="w-8 h-8 p-0 text-red-500 hover:text-red-700"
                        >
                          <X className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
            {cart.length > 0 && (
              <div className="border-t pt-4 mt-4 bg-white">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-amber-900">Total: ₨{getTotalPrice()}</span>
                </div>
                <Button onClick={proceedToCheckout} className="w-full bg-[#f1af7b] hover:bg-[#e89b66] text-white">
                  Proceed to Checkout
                </Button>
              </div>
            )}
          </div>
        )

      case CheckoutStep.CHECKOUT:
        return (
          <div className="flex flex-col h-full max-h-[80vh]">
            <div className="flex items-center gap-2 mb-4">
              <Button variant="ghost" size="sm" onClick={goBackToCart} className="p-1">
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <h3 className="text-lg font-semibold text-amber-900">Checkout</h3>
            </div>

            <div className="flex-1 overflow-y-auto space-y-6">
              {/* Order Summary */}
              <div className="bg-[#fff7f2] p-4 rounded-lg">
                <h4 className="font-semibold text-amber-900 mb-2">Order Summary</h4>
                <div className="space-y-1 text-sm">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <span>
                        {item.name} {item.size && `(${item.size})`} x{item.quantity}
                      </span>
                      <span>₨{item.price * item.quantity}</span>
                    </div>
                  ))}
                  <div className="border-t pt-1 mt-2 font-semibold">
                    <div className="flex justify-between">
                      <span>Total</span>
                      <span>₨{getTotalPrice()}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer Information Form */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <Label>Order Type *</Label>
                  <RadioGroup
                    value={customerInfo.orderType}
                    onValueChange={(value: "pickup" | "delivery") =>
                      setCustomerInfo({ ...customerInfo, orderType: value })
                    }
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="pickup" id="pickup" />
                      <Label htmlFor="pickup">Pickup from Store</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="delivery" id="delivery" />
                      <Label htmlFor="delivery">Home Delivery</Label>
                    </div>
                  </RadioGroup>
                </div>

                {customerInfo.orderType === "delivery" && (
                  <div>
                    <Label htmlFor="address">Delivery Address *</Label>
                    <Textarea
                      id="address"
                      value={customerInfo.address}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                      placeholder="Enter your complete delivery address"
                      required
                    />
                  </div>
                )}

                <div>
                  <Label htmlFor="notes">Special Instructions</Label>
                  <Textarea
                    id="notes"
                    value={customerInfo.notes}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, notes: e.target.value })}
                    placeholder="Any special requests or notes for your order"
                  />
                </div>
              </div>
            </div>

            {/* Confirm Order Button */}
            <div className="border-t pt-4 mt-4 bg-white">
              <Button
                onClick={confirmOrder}
                disabled={
                  !customerInfo.name ||
                  !customerInfo.phone ||
                  (customerInfo.orderType === "delivery" && !customerInfo.address)
                }
                className="w-full bg-[#f1af7b] hover:bg-[#e89b66] text-white"
              >
                Confirm Order
              </Button>
            </div>
          </div>
        )

      case CheckoutStep.CONFIRMATION:
        return (
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <CheckCircle className="w-16 h-16 text-green-500" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-amber-900 mb-2">Order Confirmed!</h3>
              <p className="text-amber-700">Thank you for your order</p>
            </div>

            <div className="bg-[#fff7f2] p-6 rounded-lg">
              <h4 className="font-semibold text-amber-900 mb-4">Order Details</h4>

              <div className="space-y-2 text-sm text-left">
                <div className="flex justify-between">
                  <span className="font-semibold">Order Number:</span>
                  <span className="font-mono text-[#f1af7b]">{orderNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Customer:</span>
                  <span>{customerInfo.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Phone:</span>
                  <span>{customerInfo.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Order Type:</span>
                  <span className="capitalize">{customerInfo.orderType}</span>
                </div>
                {customerInfo.orderType === "delivery" && customerInfo.address && (
                  <div className="flex justify-between">
                    <span className="font-semibold">Address:</span>
                    <span className="text-right max-w-[200px]">{customerInfo.address}</span>
                  </div>
                )}
                <div className="border-t pt-2 mt-4">
                  <div className="flex justify-between font-semibold text-base">
                    <span>Total Amount:</span>
                    <span>₨{getTotalPrice()}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3 text-sm text-amber-700">
              <p>
                {customerInfo.orderType === "pickup"
                  ? "Your order will be ready for pickup in 15-20 minutes."
                  : "Your order will be delivered within 30-45 minutes."}
              </p>
              <p>We'll call you at {customerInfo.phone} when your order is ready.</p>
            </div>

            <Button onClick={startNewOrder} className="w-full bg-[#f1af7b] hover:bg-[#e89b66] text-white">
              Place Another Order
            </Button>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff7f2] to-white">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-orange-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a href="/" className="hover:opacity-80 transition-opacity duration-200">
              <img src="/logo.png" alt="Kurtos Logo" className="w-8 h-8 object-contain" />
            </a>
            <a href="/" className="hover:opacity-80 transition-opacity duration-200">
              <img src="/kurtos signboard.png" alt="Kurtos Signboard" className="h-8 w-auto object-contain" />
            </a>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="/" className="text-amber-800 hover:text-[#f1af7b] transition-colors">
              Home
            </a>
            <a href="/menu" className="text-[#f1af7b] font-semibold">
              Menu
            </a>
            <a href="/#about" className="text-amber-800 hover:text-[#f1af7b] transition-colors">
              About
            </a>
            <a href="/#visit" className="text-amber-800 hover:text-[#f1af7b] transition-colors">
              Visit
            </a>
          </div>

          <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className="relative border-[#f1af7b] text-[#f1af7b] hover:bg-[#f1af7b] hover:text-white bg-transparent"
              >
                <ShoppingCart className="w-4 h-4" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#f1af7b] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-lg">
              <SheetHeader>
                <SheetTitle className="text-amber-900">
                  {checkoutStep === CheckoutStep.CART && "Your Cart"}
                  {checkoutStep === CheckoutStep.CHECKOUT && "Checkout"}
                  {checkoutStep === CheckoutStep.CONFIRMATION && "Order Confirmed"}
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-4">{renderCartContent()}</div>
            </SheetContent>
          </Sheet>
        </div>
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
              {Object.entries(buildYourCone).map(([step, options], index) => {
                const stepKey = `step${index + 1}` as keyof ConeBuilder
                return (
                  <Card
                    key={step}
                    className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <CardHeader className="text-center">
                      <div className="w-12 h-12 bg-[#f1af7b] rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </div>
                      <CardTitle className="text-amber-900">{step}</CardTitle>
                      {coneBuilder[stepKey] && (
                        <div className="mt-2 p-2 bg-[#f1af7b]/20 rounded-lg">
                          <p className="text-sm font-semibold text-amber-900">Selected:</p>
                          <p className="text-sm text-amber-800">{coneBuilder[stepKey]!.name}</p>
                          <p className="text-sm text-amber-600">₨{coneBuilder[stepKey]!.price}</p>
                        </div>
                      )}
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
                                <>
                                  <div className="flex flex-col gap-1 min-w-[120px]">
                                    {Object.entries(price).map(([size, cost]) => (
                                      <span key={size} className="text-xs text-amber-600">
                                        {size}: ₨{cost}
                                      </span>
                                    ))}
                                  </div>
                                  <div className="flex flex-col gap-1 min-w-[70px]">
                                    {Object.entries(price).map(([size, cost]) => (
                                      <Button
                                        key={size}
                                        size="sm"
                                        onClick={() => updateConeBuilder(stepKey, `${item} (${size})`, cost)}
                                        className="bg-[#f1af7b] hover:bg-[#e89b66] text-white text-xs px-2 py-1 h-6 w-full"
                                      >
                                        Select
                                      </Button>
                                    ))}
                                  </div>
                                </>
                              ) : (
                                <>
                                  <div className="min-w-[120px]">
                                    <span className="text-amber-900 font-semibold">₨{price}</span>
                                  </div>
                                  <div className="min-w-[70px]">
                                    <Button
                                      size="sm"
                                      onClick={() => updateConeBuilder(stepKey, item, price)}
                                      className="bg-[#f1af7b] hover:bg-[#e89b66] text-white text-xs px-2 py-1 h-6 w-full"
                                    >
                                      Select
                                    </Button>
                                  </div>
                                </>
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

            {(coneBuilder.step1 || coneBuilder.step2 || coneBuilder.step3) && (
              <div className="max-w-2xl mx-auto">
                <Card className="bg-white border-2 border-[#f1af7b]">
                  <CardHeader className="text-center">
                    <CardTitle className="text-amber-900">Your Custom Kurtos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      {coneBuilder.step1 && (
                        <div className="flex justify-between">
                          <span>Cone: {coneBuilder.step1.name}</span>
                          <span>₨{coneBuilder.step1.price}</span>
                        </div>
                      )}
                      {coneBuilder.step2 && (
                        <div className="flex justify-between">
                          <span>Spread: {coneBuilder.step2.name}</span>
                          <span>₨{coneBuilder.step2.price}</span>
                        </div>
                      )}
                      {coneBuilder.step3 && (
                        <div className="flex justify-between">
                          <span>Filling: {coneBuilder.step3.name}</span>
                          <span>₨{coneBuilder.step3.price}</span>
                        </div>
                      )}
                      <div className="border-t pt-2 flex justify-between font-semibold text-lg">
                        <span>Total:</span>
                        <span>₨{getConeBuilderTotal()}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        onClick={addConeToCart}
                        disabled={!isConeComplete()}
                        className="flex-1 bg-[#f1af7b] hover:bg-[#e89b66] text-white"
                      >
                        Add to Cart
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setConeBuilder({})}
                        className="border-[#f1af7b] text-[#f1af7b] hover:bg-[#f1af7b] hover:text-white"
                      >
                        Reset
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </section>

        {/* Menu Categories */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-amber-900 mb-4">Full Menu</h2>
              <p className="text-amber-700 text-lg">Explore our complete selection of delicious offerings</p>
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
                            <div className="flex items-center gap-3 min-w-[240px] justify-end">
                              {typeof price === "object" ? (
                                <>
                                  <div className="flex flex-col gap-1 min-w-[140px]">
                                    {Object.entries(price).map(([size, cost]) => (
                                      <Badge
                                        key={size}
                                        variant="secondary"
                                        className="bg-[#f1af7b]/20 text-amber-900 hover:bg-[#f1af7b]/30 text-center text-xs py-1"
                                      >
                                        {size}: ₨{cost}
                                      </Badge>
                                    ))}
                                  </div>
                                  <div className="flex flex-col gap-1 min-w-[80px]">
                                    {Object.entries(price).map(([size, cost]) => (
                                      <Button
                                        key={size}
                                        size="sm"
                                        onClick={() => addToCart(item, cost, category, size)}
                                        className="bg-[#f1af7b] hover:bg-[#e89b66] text-white text-xs px-3 py-1 h-7 w-full"
                                      >
                                        Add {size}
                                      </Button>
                                    ))}
                                  </div>
                                </>
                              ) : (
                                <>
                                  <div className="min-w-[140px] flex justify-end">
                                    <Badge
                                      variant="secondary"
                                      className="bg-[#f1af7b]/20 text-amber-900 hover:bg-[#f1af7b]/30 text-center"
                                    >
                                      ₨{price}
                                    </Badge>
                                  </div>
                                  <div className="min-w-[80px]">
                                    <Button
                                      size="sm"
                                      onClick={() => addToCart(item, price, category)}
                                      className="bg-[#f1af7b] hover:bg-[#e89b66] text-white text-xs px-3 py-1 h-7 w-full"
                                    >
                                      Add
                                    </Button>
                                  </div>
                                </>
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
              <button
                onClick={() => setShowContactCard(true)}
                className="bg-white text-[#f1af7b] px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors cursor-pointer"
              >
                Call to Order
              </button>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Kurtos+I-8+Markaz+Islamabad"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#f1af7b] transition-colors inline-flex items-center justify-center"
              >
                Visit Our Store
              </a>
            </div>
          </div>
        </section>

        {/* Contact Details Card */}
        {showContactCard && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Card className="max-w-md w-full bg-white">
              <CardHeader className="text-center">
                <CardTitle className="text-amber-900">Contact Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#f1af7b]" />
                  <span className="text-amber-800">I-8 Markaz, Islamabad</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#f1af7b]" />
                  <span className="text-amber-800">Daily 10:00 AM - 11:00 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#f1af7b]" />
                  <a href="tel:+92-317-581-8580" className="text-amber-800 hover:text-[#f1af7b] transition-colors">
                    +92 317 581 8580
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 text-[#f1af7b]">📧</span>
                  <a href="mailto:hello@kurtos.pk" className="text-amber-800 hover:text-[#f1af7b] transition-colors">
                    hello@kurtos.pk
                  </a>
                </div>
                <div className="pt-4">
                  <Button
                    onClick={() => setShowContactCard(false)}
                    className="w-full bg-[#f1af7b] hover:bg-[#e89b66] text-white"
                  >
                    Close
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
