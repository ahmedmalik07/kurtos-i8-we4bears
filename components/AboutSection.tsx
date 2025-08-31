"use client"

const AboutSection = () => {
  return (
    <section id="about" className="py-16 lg:py-24 relative overflow-hidden">
      {/* Sophisticated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-amber-50/30"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-amber-100/20 to-orange-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-yellow-100/20 to-amber-100/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side - Left */}
          <div className="relative group order-2 lg:order-1">
            {/* Main image container with sophisticated hover effects */}
            <div className="relative">
              {/* Background glow effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-amber-200/20 via-orange-200/20 to-yellow-200/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
              
              {/* Image container */}
              <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-700">
                <img
                  src="/assets/all_items.jpg"
                  alt="Kurtos Story"
                  className="w-full h-64 md:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                
                {/* Sophisticated overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent group-hover:from-black/25 transition-all duration-700"></div>
                
                {/* Floating geometric elements */}
                <div className="absolute top-6 right-6 w-12 h-12 border-2 border-white/40 rounded-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500 delay-200"></div>
                <div className="absolute bottom-6 left-6 w-8 h-8 bg-gradient-to-br from-amber-400/60 to-orange-400/60 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 delay-400"></div>
                
                {/* Subtle corner accents */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-amber-300/10 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
              </div>
              
              {/* Minimalist decorative elements */}
              <div className="absolute -top-4 -left-4 w-6 h-6 bg-gradient-to-r from-amber-300 to-orange-300 rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
              <div className="absolute -bottom-4 -right-4 w-4 h-4 bg-gradient-to-r from-yellow-300 to-amber-300 rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 delay-300"></div>
            </div>
          </div>
          
          {/* Content Side - Right */}
          <div className="space-y-8 order-1 lg:order-2">
            {/* Refined typography */}
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full text-sm font-medium text-amber-800 border border-amber-200/50">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                <span>Our Story</span>
              </div>
              
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                From European{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                  Journeys
                </span>
                {" "}to Pakistani Hearts
              </h2>
              
              <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
            </div>
            
            {/* Elegant story content */}
            <div className="space-y-6 text-slate-700 leading-relaxed">
              <p className="text-lg md:text-xl font-light">
                Born from the wanderlust of an aeronautical engineer, Kurtos brings the authentic taste of European chimney cakes to Pakistan. During travels across Europe's charming cafés, our founder discovered the mesmerizing art of kürtős kalács.
              </p>
              
              <p className="text-base md:text-lg opacity-90">
                What began as admiration for a centuries-old Hungarian tradition has evolved into Pakistan's premier destination for artisanal chimney cakes, where each swirl tells a story of cultural bridge-building through exceptional taste.
              </p>
            </div>
            
            {/* Sophisticated stats or highlights */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="group space-y-2">
                <div className="text-2xl md:text-3xl font-bold text-amber-600 group-hover:text-orange-600 transition-colors duration-300">500+</div>
                <div className="text-sm text-slate-600 font-medium">European Cafés Explored</div>
              </div>
              <div className="group space-y-2">
                <div className="text-2xl md:text-3xl font-bold text-amber-600 group-hover:text-orange-600 transition-colors duration-300">100%</div>
                <div className="text-sm text-slate-600 font-medium">Authentic Recipes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
