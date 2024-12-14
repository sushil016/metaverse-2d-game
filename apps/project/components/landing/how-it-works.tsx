'use client'

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function HowItWorks() {
  return (
    <section className="py-24 bg-accent/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works</h2>
          <p className="mt-4 text-muted-foreground">Get started in three simple steps</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="overflow-hidden border-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
                {[
                  {
                    step: "01",
                    title: "Select your space",
                    description: "Choose from pre-designed spaces or create your own custom environment."
                  },
                  {
                    step: "02",
                    title: "Invite others",
                    description: "Share your space with family and friends to connect virtually."
                  },
                  {
                    step: "03",
                    title: "Start exploring",
                    description: "Interact, play, and enjoy your personalized virtual environment."
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-8 relative overflow-hidden group"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative z-10"
                    >
                      <span className="text-5xl font-bold text-blue-500/20">{item.step}</span>
                      <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
                      <p className="mt-2 text-muted-foreground">{item.description}</p>
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 opacity-0 group-hover:opacity-10 transition-opacity" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

