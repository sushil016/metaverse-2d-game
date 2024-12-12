"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Connect. Explore. Interact.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Step into a vibrant 2D social universe where creativity meets community. Build, explore, and connect with players from around the world in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/auth">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600">
                  Start Your Journey
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Watch Trailer
              </Button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <video
                src="https://ouch-cdn2.icons8.com/f4eYeEkh5alc4fbZ38tWX1GInUWVKlmY-CWBymCTiEQ/skp:webm/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy92aWRlb3Mv/OTEvYjFmOGYzZmQt/ZDhkNi00ZTYwLWFk/YjYtMGQxOGJjYjY1/YzhlLndlYm0.webm"
                autoPlay
                loop
                muted
                playsInline
                className="object-cover rounded-lg shadow-2xl w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}