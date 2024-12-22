'use client'

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "I built a virtual home for my family—we play and hang out every day!",
    author: "John Doe",
    role: "Family User",
    avatar: "/placeholder-avatar-1.png"
  },
  {
    quote: "Our virtual space has brought us closer despite living in different cities.",
    author: "Jane Smith",
    role: "Community Member",
    avatar: "/placeholder-avatar-2.png"
  }
]

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Family and Friends</h2>
          <p className="mt-4 text-muted-foreground">See what our community has to say</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-px rounded-lg opacity-75 group-hover:opacity-100 transition-opacity blur-lg" />
              <div className="relative bg-accent/50 p-8 rounded-lg">
                <Quote className="h-8 w-8 text-blue-500 mb-4" />
                <p className="text-lg mb-4">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

