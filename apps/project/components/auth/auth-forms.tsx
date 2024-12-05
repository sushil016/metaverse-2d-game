"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import LoginForm from "./login-form";
import SignupForm from "./signup-form";
import { Card, CardContent } from "@/components/ui/card";

export default function AuthForms() {
  const [isLogin, setIsLogin] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4,
        ease: "easeIn"
      }
    }
  };

  return (
    <div className="w-full max-w-md relative z-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={isLogin ? "login" : "signup"}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Card className="backdrop-blur-sm bg-card/30">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-violet-400 dark:from-blue-300 dark:to-violet-300 bg-clip-text text-transparent">
                {isLogin ? "Welcome Back" : "Create Account"}
              </h2>
              {isLogin ? <LoginForm /> : <SignupForm />}
              <div className="mt-6 text-center">
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {isLogin
                    ? "Don't have an account? Sign up"
                    : "Already have an account? Log in"}
                </button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}