"use client";

import { motion } from "framer-motion";
import { Users, Map, Gamepad2, MessageSquare } from "lucide-react";

const features = [
  {
    icon: <Users className="h-8 w-8" />,
    title: "Social Interaction",
    description: "Connect with friends and make new ones in our vibrant community spaces."
  },
  {
    icon: <Map className="h-8 w-8" />,
    title: "Custom Worlds",
    description: "Create and customize your own unique spaces in the metaverse."
  },
  {
    icon: <Gamepad2 className="h-8 w-8" />,
    title: "Mini Games",
    description: "Enjoy multiplayer mini-games and activities with other players."
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Real-time Chat",
    description: "Communicate seamlessly with voice, text, and emotes."
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-accent/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience the Future of Social Gaming
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover all the amazing features that make our 2D metaverse unique and engaging.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/80 transition-colors"
            >
              <div className="mb-4 text-primary">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}