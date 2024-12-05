"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Gamepad } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border/50"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Gamepad className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">MetaVerse2D</span>
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/auth">
            <Button variant="ghost">Login</Button>
          </Link>
          <Link href="/auth">
            <Button className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}