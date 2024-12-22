'use client'

import { motion } from "framer-motion"
import { Layers, Users, Home, Compass, MessageSquare, Video } from 'lucide-react'

const features = [
  {
    icon: <Layers className="h-8 w-8" />,
    title: "Explore 2D Spaces",
    description: "Dive into pre-created spaces designed."
  },
  {
    icon: <Compass className="h-8 w-8" />,
    title: "Real-time Interactions",
    description: "Chat and video call with users nearby."
  },
  {
    icon: <Home className="h-8 w-8" />,
    title: "Create Your Virtual Home",
    description: " Build a custom house space, invite family, and enjoy."
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Milestone migration",
    description: "Seamless migration of key project milestones between repositories."
  },
  {
    icon: <Video className="h-8 w-8" />,
    title: "Track progress",
    description: "Keep track of GitHub contributions and changes within your workspace."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Advanced filtering",
    description: "Precise project data search with advanced filtering capabilities."
  }
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Key Features</h2>
          <p className="mt-4 text-muted-foreground">Discover what makes our platform unique</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-lg  p-8"
            >
              <div className="flex flex-col gap-3">
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

