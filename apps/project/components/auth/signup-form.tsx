"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { signupUser } from "@/lib/api";
import { Mail, Lock, UserCircle, Loader2 } from "lucide-react";

interface SignupFormData {
  email: string;
  password: string;
}

export default function SignupForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm<SignupFormData>();

  const onSubmit = async (data: SignupFormData) => {
    if (!role) {
      return;
    }

    try {
      setIsLoading(true);
      const response = await signupUser(data.email, data.password, role);
      console.log("Signup successful:", response);
    } catch (error) {
      console.error("Signup failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <motion.div whileFocus="focus" variants={inputVariants}>
            <Input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              type="email"
              placeholder="Email"
              className="pl-10 bg-background/50 border-border/50 focus:bg-background"
            />
          </motion.div>
          {errors.email && (
            <span className="text-sm text-destructive">{errors.email.message}</span>
          )}
        </div>

        <div className="relative">
          <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <motion.div whileFocus="focus" variants={inputVariants}>
            <Input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters"
                }
              })}
              type="password"
              placeholder="Password"
              className="pl-10 bg-background/50 border-border/50 focus:bg-background"
            />
          </motion.div>
          {errors.password && (
            <span className="text-sm text-destructive">{errors.password.message}</span>
          )}
        </div>

        <div className="relative">
          <UserCircle className="absolute left-3 top-3 h-5 w-5 text-muted-foreground pointer-events-none" />
          <Select value={role} onValueChange={setRole}>
            <SelectTrigger className="w-full pl-10 bg-background/50 border-border/50">
              <SelectValue placeholder="Select your role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="user">User</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="manager">Manager</SelectItem>
            </SelectContent>
          </Select>
          {!role && <span className="text-sm text-destructive">Role is required</span>}
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Creating account...
          </>
        ) : (
          "Sign up"
        )}
      </Button>
    </form>
  );
}