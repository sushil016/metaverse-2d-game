'use client'

import { motion } from "framer-motion"
import { Layers, Users, Home, Compass, MessageSquare, Video } from 'lucide-react'

const features = [
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Two-way synchronization",
    description: "Integrate your task tracker with GitHub to sync changes instantly."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Private tasks",
    description: "Integration and management of multiple data repositories effectively."
  },
  {
    icon: <Home className="h-6 w-6" />,
    title: "Multiple repositories",
    description: "Organize multiple projects for more effective planning and collaboration."
  },
  {
    icon: <Compass className="h-6 w-6" />,
    title: "Milestone migration",
    description: "Seamless migration of key project milestones between repositories."
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Track progress",
    description: "Keep track of GitHub contributions and changes within your workspace."
  },
  {
    icon: <Video className="h-6 w-6" />,
    title: "Advanced filtering",
    description: "Precise project data search with advanced filtering capabilities."
  }
]

export function Features() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Key Features</h2>
          <p className="mt-4 text-xl text-muted-foreground">Discover what makes our platform unique</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 p-2 bg-primary/10 rounded-full">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

