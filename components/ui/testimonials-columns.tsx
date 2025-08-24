"use client"
import React from "react"
import { motion } from "motion/react"

export const TestimonialsColumn = (props: {
  className?: string
  testimonials: typeof testimonials
  duration?: number
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-6 rounded-3xl border border-orange-100 shadow-lg bg-white max-w-xs w-full" key={i}>
                  <div className="text-amber-800 leading-relaxed">{text}</div>
                  <div className="flex items-center gap-3 mt-4">
                    <img
                      width={40}
                      height={40}
                      src={image || "/placeholder.svg"}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5 text-amber-900">{name}</div>
                      <div className="leading-5 opacity-60 tracking-tight text-amber-700 text-sm">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  )
}

const testimonials = [
  {
    text: "Would I try the desserts again? DEFINITELY YES!!! Ambience: 8/10. Taste: 9.5/10. Service: 9.5/10.",
    image: "/smiling-woman-avatar.png",
    name: "Ayesha Khan",
    role: "Food Blogger",
  },
  {
    text: "Tried this unique dessert at Kurtos in I-8 Markaz, Islamabad… absolutely loved it!",
    image: "/smiling-man-avatar.png",
    name: "Ahmed Ali",
    role: "Regular Customer",
  },
  {
    text: "It's one of the best ice-creams in town! Location: Tehzeeb, I-8 Markaz, Islamabad.",
    image: "/smiling-woman-avatar.png",
    name: "Sara Malik",
    role: "Sweet Tooth",
  },
  {
    text: "Discover the unique chimney cone filled with your choice of delights! Perfect for sharing. Visit us in I-8 Markaz.",
    image: "/smiling-man-avatar.png",
    name: "Hassan Sheikh",
    role: "Coffee Lover",
  },
  {
    text: "The next hot trend in Islamabad is Chimneys @kurtos_pakistan I-8 Islamabad…",
    image: "/smiling-woman-avatar.png",
    name: "Fatima Raza",
    role: "Mother of Three",
  },
  {
    text: "Indulge in the delectable Hungarian chimney cake at Kurtos in I-8 Markaz, Islamabad.",
    image: "/smiling-man-avatar.png",
    name: "Omar Siddiqui",
    role: "Dessert Enthusiast",
  },
  {
    text: "Kurtos is a lovely café located in I-8 Markaz, Islamabad. The ambiance is excellent, but so are their chimney cake and coffee.",
    image: "/smiling-woman-avatar.png",
    name: "Zara Ahmed",
    role: "University Student",
  },
  {
    text: "Authentic Hungarian chimney cakes in Pakistan - the taste and quality is unmatched!",
    image: "/smiling-man-avatar.png",
    name: "Bilal Hussain",
    role: "Travel Enthusiast",
  },
  {
    text: "FoodPanda Rating: 4.9/5 - This place is amazing! The chimney cakes are perfect and the service is outstanding.",
    image: "/smiling-woman-avatar.png",
    name: "Nadia Tariq",
    role: "Office Manager",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

const TestimonialsSection = () => {
  return (
    <section className="relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border border-[#f1af7b] py-2 px-4 rounded-full bg-orange-50 text-[#f1af7b] font-medium">
              Customer Reviews
            </div>
          </div>

          <h2 className="font-serif text-4xl font-bold tracking-tight mt-6 text-amber-900 text-center">
            What Our Customers Say
          </h2>
          <p className="text-center mt-4 opacity-75 text-amber-700 leading-relaxed">
            Discover why people love our authentic Hungarian chimney cakes
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-12 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
