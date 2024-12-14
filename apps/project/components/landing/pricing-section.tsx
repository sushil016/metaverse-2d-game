"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function PricingSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your virtual space journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free Tier */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl border bg-card p-6 shadow-lg flex flex-col"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold">Free</h3>
              <p className="text-muted-foreground mt-2">Perfect to get started</p>
              <div className="mt-4 flex items-baseline">
                <span className="text-3xl font-bold">$0</span>
                <span className="text-muted-foreground ml-1">/month</span>
              </div>
            </div>
            <ul className="space-y-4 flex-grow">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>Basic virtual space</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>Up to 5 daily visitors</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>Standard customization</span>
              </li>
            </ul>
            <Button className="w-full rounded-full mt-8">Get Started</Button>
          </motion.div>

          {/* Family Plan - Highlighted */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative rounded-2xl border bg-card p-6 shadow-lg flex flex-col"
          >
            {/* Sophisticated Grid Background */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <div 
                className="absolute inset-0 opacity-10" 
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgb(59 130 246 / 0.2) 1px, transparent 1px),
                    linear-gradient(to bottom, rgb(59 130 246 / 0.2) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-violet-500/10 to-transparent" />
            </div>

            {/* Highlight Border Animation */}
            <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-blue-500 to-violet-500 animate-border-pulse [z-index:-1]" />
            
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full text-white text-sm font-medium">
              Most Popular
            </div>

            <div className="mb-8 relative">
              <h3 className="text-2xl font-bold">Family</h3>
              <p className="text-muted-foreground mt-2">Perfect for families</p>
              <div className="mt-4 flex items-baseline">
                <span className="text-3xl font-bold">$5</span>
                <span className="text-muted-foreground ml-1">/month</span>
              </div>
            </div>
            <ul className="space-y-4 flex-grow relative">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>Everything in Free</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>Up to 5 family members</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>Shared virtual spaces</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>Advanced customization</span>
              </li>
            </ul>
            <Button className="w-full bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 rounded-full mt-8 relative">
              Start Family Plan
            </Button>
          </motion.div>

          {/* Full Access */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative rounded-2xl border bg-card p-6 shadow-lg flex flex-col"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold">Full Access</h3>
              <p className="text-muted-foreground mt-2">For power users</p>
              <div className="mt-4 flex items-baseline">
                <span className="text-3xl font-bold">$19</span>
                <span className="text-muted-foreground ml-1">/month</span>
              </div>
            </div>
            <ul className="space-y-4 flex-grow">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>Everything in Family</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>Unlimited visitors</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>Priority support</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>Custom integrations</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>API access</span>
              </li>
            </ul>
            <Button className="w-full rounded-full mt-8">Get Full Access</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 