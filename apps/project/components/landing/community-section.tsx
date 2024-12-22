"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Users } from "lucide-react";

const testimonials = [
  {
    name: "Alex Chen",
    role: "Community Member",
    content: "The most engaging social platform I've ever experienced. The 2D world feels alive!",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100"
  },
  {
    name: "Sarah Johnson",
    role: "Space Creator",
    content: "Creating custom spaces for events has never been more fun and intuitive.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
  }
];

export default function CommunitySection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-7xl items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-accent/50 rounded-full px-4 py-2 mb-4">
            <Users className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Join 10,000+ members</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Growing Community
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover what our community members are saying about their experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center flex justify-center"
        >
          <Link href="/auth">
            <div className="relative group w-[230px] h-[60px] bg-blur-500 border border-border/50 rounded-full flex items-center justify-center backdrop-blur-md">
              <Button size="lg" className="rounded-full bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 duration-200">
                Join Our Community
              </Button>
              <div className="absolute bottom-0 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 blur-md ml-6 w-3/4 flex justify-center"></div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}