"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Sophisticated Grid Background */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(255 255 255 / 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(255 255 255 / 0.05) 1px, transparent 1px),
              linear-gradient(to right, rgb(255 255 255 / 0.1) 2px, transparent 2px),
              linear-gradient(to bottom, rgb(255 255 255 / 0.1) 2px, transparent 2px)
            `,
            backgroundSize: '40px 40px, 40px 40px, 200px 200px, 200px 200px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent" />
      </div>

      {/* Gradient Blurs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Left blur */}
        <div className="absolute -top-40 -left-20 h-[40rem] w-[40rem] rounded-full bg-blue-500/20 blur-[128px]" />
        {/* Center deep blue blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[50rem] w-[50rem] rounded-full bg-blue-900/30 blur-[160px]" />
        {/* Right blur */}
        <div className="absolute -top-40 -right-20 h-[40rem] w-[40rem] rounded-full bg-violet-500/20 blur-[128px]" />
      </div>
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