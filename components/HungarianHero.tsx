'use client'

import { useState, useEffect } from 'react'

const HungarianHero = () => {
  const [rotation, setRotation] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [animatedNumbers, setAnimatedNumbers] = useState({
    served: 0,
    fresh: 0,
    year: 0
  })

  // Hungarian treats and beverages data with background-free images only
  const foodItems = [
    { 
      name: 'Kurtos Trio', 
      image: '/kurtos-trio.png', 
      color: '#f1af7b' 
    },
    { 
      name: 'Plain Kurtos', 
      image: '/plain-kurtos.png', 
      color: '#805334' 
    },
    { 
      name: 'Hero Cone', 
      image: '/kurtos-hero-cone.png', 
      color: '#f1af7b' 
    },
    { 
      name: 'Ice Shake', 
      image: '/assets/shake.png', 
      color: '#805334' 
    }
  ]

  useEffect(() => {
    setIsLoaded(true)
    
    // Carousel rotation (faster speed)
    const interval = setInterval(() => {
      setRotation(prev => prev + 0.12)
    }, 70)
    
    // Number animations
    const animateNumbers = () => {
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps
      
      let step = 0
      const numberInterval = setInterval(() => {
        step++
        const progress = step / steps
        
        setAnimatedNumbers({
          served: Math.floor(500 * progress),
          fresh: Math.floor(100 * progress),
          year: Math.floor(1784 * progress)
        })
        
        if (step >= steps) {
          clearInterval(numberInterval)
          setAnimatedNumbers({
            served: 500,
            fresh: 100,
            year: 1784
          })
        }
      }, stepDuration)
    }
    
    // Start number animation after a delay
    setTimeout(animateNumbers, 1000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-white">
      {/* Background Pattern with website theme */}
      <div className="absolute inset-0">
        {/* Floating decorative elements */}
        <div className="floating-element absolute top-20 left-10 w-3 h-3 bg-[#f1af7b] rounded-full opacity-30 animate-pulse"></div>
        <div className="floating-element absolute top-40 right-20 w-4 h-4 bg-[#f1af7b] rounded-full opacity-20 animate-bounce"></div>
        <div className="floating-element absolute bottom-40 left-20 w-2 h-2 bg-[#f1af7b] rounded-full opacity-40 animate-ping"></div>
        <div className="floating-element absolute bottom-20 right-10 w-3 h-3 bg-[#805334] rounded-full opacity-25 animate-pulse"></div>
      </div>

      {/* Main Content - Split Layout */}
      <div className="relative z-10 flex items-center min-h-screen px-4 pt-20 md:pt-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Side - Text Content */}
            <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#805334] mb-6 leading-tight">
                A Hungarian Classic,
                <br />
                <span className="bg-gradient-to-r from-[#f1af7b] to-[#805334] bg-clip-text text-transparent">
                  Freshly Baked for You
                </span>
              </h1>
              <p className="text-lg md:text-xl text-[#805334]/80 mb-8 leading-relaxed">
                From Hungary's heart to your hands, a tale of tradition, a taste you'll never forget.
                <br />
                <span className="text-[#f1af7b] font-medium">Crisp outside, soft within</span> — rolled in sweetness and baked to perfection.
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={() => window.open('https://www.foodpanda.pk/restaurant/s7uw/kurtos-kalash', '_blank')}
                  className="px-8 py-4 bg-gradient-to-r from-[#f1af7b] to-[#805334] text-white font-bold text-lg rounded-full hover:shadow-lg hover:shadow-[#f1af7b]/25 transform hover:scale-105 transition-all duration-300"
                >
                  Order Hungarian Treats 🥨
                </button>
                <button 
                  onClick={() => window.location.href = '/menu'}
                  className="px-8 py-4 bg-white border-2 border-[#f1af7b] text-[#805334] font-bold text-lg rounded-full hover:bg-[#f1af7b] hover:text-white transition-all duration-300"
                >
                  Explore Menu 📜
                </button>
              </div>
            </div>

            {/* Right Side - Carousel */}
            <div className="relative h-96 lg:h-[500px] w-full">
              {/* Curved background platform - utilizing more space */}
              <div className="absolute bottom-0 left-1/3 right-0 h-32 md:h-40 bg-gradient-to-t from-white/60 via-gray-50/40 to-transparent rounded-t-[50%] transform scale-x-130"></div>
              
              {/* Food Items Carousel - Maximum space utilization */}
              <div className="absolute inset-0 flex items-center justify-end pr-0">
                <div className="relative w-full h-full max-w-5xl max-h-5xl">
                  {foodItems.map((item, index) => {
                    const angle = (rotation + (index * 90)) * (Math.PI / 180) // 90 degrees apart for 4 items
                    const radius = 240 // Increased radius for maximum space utilization
                    const x = Math.cos(angle) * radius
                    const y = Math.sin(angle) * radius * 0.8 // More vertical movement to fully use top space
                    const scale = 0.5 + 0.7 * Math.sin(angle + Math.PI/2) // Better scale variation
                    const zIndex = Math.floor(50 + 50 * Math.sin(angle + Math.PI/2))
                    
                    return (
                      <div
                        key={index}
                        className="absolute transform-gpu transition-all duration-2000 ease-out"
                        style={{
                          transform: `translate(${x}px, ${y}px) scale(${scale})`,
                          zIndex: zIndex,
                          left: '75%', // Maximum right positioning
                          top: '35%', // Higher to maximize top space usage
                          marginLeft: '-120px',
                          marginTop: '-120px',
                        }}
                      >
                        <div 
                          className="relative group cursor-pointer"
                          style={{
                            filter: `brightness(${0.65 + 0.5 * scale}) saturate(${0.75 + 0.5 * scale})`,
                          }}
                        >
                          {/* Minimal glow effect */}
                          <div 
                            className="absolute -inset-5 rounded-3xl blur-3xl opacity-10 group-hover:opacity-18 transition-opacity duration-1000"
                            style={{ backgroundColor: item.color }}
                          ></div>
                          
                          {/* Food item image - Clean background-free images */}
                          <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 transform group-hover:scale-105 transition-transform duration-1000">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-full h-full object-contain"
                              style={{
                                background: 'transparent',
                                filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.06)) contrast(1.05) saturate(1.1)',
                                mixBlendMode: 'normal',
                                maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)', // Soft edge removal
                                WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)'
                              }}
                            />
                          </div>
                          
                          {/* Item name label - Better aligned */}
                          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap opacity-55 group-hover:opacity-100 transition-opacity duration-700">
                            <span className="text-xs md:text-sm font-medium text-[#805334] bg-white/85 px-4 py-2 rounded-full backdrop-blur-sm shadow-sm border border-[#f1af7b]/15">
                              {item.name}
                            </span>
                          </div>
                          
                          {/* Extremely subtle shadow on platform */}
                          <div 
                            className="absolute top-48 md:top-56 lg:top-64 left-1/2 transform -translate-x-1/2 w-32 h-12 md:w-40 md:h-14 bg-gray-400/4 rounded-full blur-2xl"
                            style={{ opacity: scale * 0.25 }}
                          ></div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Central highlight effect - positioned in the upper right area */}
              <div className="absolute top-1/4 right-1/6 transform -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-r from-[#f1af7b]/3 to-[#805334]/3 rounded-full blur-4xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats - Original Implementation with Distinguishable Background */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        {/* Original whitish background but distinguishable */}
        <div className="bg-gradient-to-t from-white/95 via-gray-50/90 to-gray-100/80 backdrop-blur-sm border-t border-[#f1af7b]/30 shadow-lg">
          <div className={`max-w-6xl mx-auto px-4 py-6 transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="text-2xl md:text-3xl font-bold text-[#805334] mb-1">
                  {animatedNumbers.served}+
                </div>
                <div className="text-xs md:text-sm text-[#805334]/70 uppercase tracking-wider font-medium">
                  Kurtos Served
                </div>
              </div>
              
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="text-2xl md:text-3xl font-bold text-[#805334] mb-1">
                  {animatedNumbers.fresh}%
                </div>
                <div className="text-xs md:text-sm text-[#805334]/70 uppercase tracking-wider font-medium">
                  Fresh Daily
                </div>
              </div>
              
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="text-2xl md:text-3xl font-bold text-[#805334] mb-1">
                  Since {animatedNumbers.year}
                </div>
                <div className="text-xs md:text-sm text-[#805334]/70 uppercase tracking-wider font-medium">
                  Traditional Recipe
                </div>
              </div>
            </div>
            
            {/* Branding text */}
            <div className="text-center mt-4">
              <p className="text-sm text-[#805334]/60 italic">
                "Every Kurtos tells a story of Hungarian tradition"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles for animation delay */}
      <style jsx>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  )
}

export default HungarianHero
