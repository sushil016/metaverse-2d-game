"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Gamepad, Menu, X, ChevronDown, BookOpen, FileText, History, Github, Twitter, Youtube, Linkedin, MessageSquare } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed w-full z-50 pt-4 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-full px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="group flex items-center space-x-2">
              <div className="relative p-2.5 rounded-xl bg-gradient-to-r from-blue-500/10 to-violet-500/10 group-hover:from-blue-500/20 group-hover:to-violet-500/20 transition-all duration-300">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  className="transform-gpu"
                >
                  <Gamepad className="h-6 w-6 sm:h-7 sm:w-7 stroke-[1.5]" />
                </motion.div>
              </div>
              <span className="font-bold text-lg sm:text-xl bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                MetaVerse2D
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[300px] gap-3 p-4">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link href="/blog" className="flex items-center gap-2 p-2 hover:bg-muted rounded-md">
                              <FileText className="h-3 w-3" />
                              <div>
                                <div className="font-medium">Blog</div>
                                <p className="text-xs text-muted-foreground">Read our latest insights</p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link href="/docs" className="flex items-center gap-2 p-2 hover:bg-muted rounded-md">
                              <BookOpen className="h-4 w-4" />
                              <div>
                                <div className="font-medium">Documentation</div>
                                <p className="text-xs text-muted-foreground">Explore our docs and tutorials</p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link href="/changelog" className="flex items-center gap-2 p-2 hover:bg-muted rounded-md">
                              <History className="h-4 w-4" />
                              <div>
                                <div className="font-medium">Changelog</div>
                                <p className="text-xs text-muted-foreground">See whats new</p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Community</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[300px] gap-3 p-4">
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="https://github.com" target="_blank" className="flex items-center gap-2 p-2 hover:bg-muted rounded-md">
                              <Github className="h-4 w-4" />
                              <div>
                                <div className="font-medium">GitHub</div>
                                <p className="text-xs text-muted-foreground">Star us on GitHub</p>
                              </div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="https://twitter.com" target="_blank" className="flex items-center gap-2 p-2 hover:bg-muted rounded-md">
                              <Twitter className="h-4 w-4" />
                              <div>
                                <div className="font-medium">Twitter</div>
                                <p className="text-xs text-muted-foreground">Follow our latest news</p>
                              </div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="https://discord.com" target="_blank" className="flex items-center gap-2 p-2 hover:bg-muted rounded-md">
                              <MessageSquare className="h-4 w-4" />
                              <div>
                                <div className="font-medium">Discord</div>
                                <p className="text-xs text-muted-foreground">Join the conversation</p>
                              </div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="https://youtube.com" target="_blank" className="flex items-center gap-2 p-2 hover:bg-muted rounded-md">
                              <Youtube className="h-4 w-4" />
                              <div>
                                <div className="font-medium">YouTube</div>
                                <p className="text-xs text-muted-foreground">Watch our videos</p>
                              </div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                      <NavigationMenuLink className="text-sm hover:underline">
                        About Us
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden sm:flex items-center space-x-4">
            <Link href="/auth">
              <Button variant="ghost" className="rounded-full">Login</Button>
            </Link>
            <Link href="/auth">
              <Button className="rounded-full bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-background z-50">
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-border/10">
              <Link href="/" className="flex items-center space-x-2">
                <Gamepad className="h-6 w-6" />
                <span className="font-bold">MetaVerse2D</span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="flex-1 overflow-y-auto px-4 py-6">
              <div className="flex flex-col space-y-6">
                {/* Main Navigation */}
                <Link href="/about" className="py-2 text-foreground hover:text-muted-foreground transition-colors">
                  About us
                </Link>
                
                {/* Resources Dropdown */}
                <div className="space-y-3">
                  <p className="text-muted-foreground">Resources</p>
                  <div className="flex flex-col space-y-4 pl-2">
                    <Link href="/blog" className="flex items-center gap-2 text-sm">
                      <FileText className="h-4 w-4" />
                      <span>Blog</span>
                    </Link>
                    <Link href="/docs" className="flex items-center gap-2 text-sm">
                      <BookOpen className="h-4 w-4" />
                      <span>Documentation</span>
                    </Link>
                    <Link href="/changelog" className="flex items-center gap-2 text-sm">
                      <History className="h-4 w-4" />
                      <span>Changelog</span>
                    </Link>
                  </div>
                </div>

                {/* Community Dropdown */}
                <div className="space-y-3">
                  <p className="text-muted-foreground">Community</p>
                  <div className="flex flex-col space-y-4 pl-2">
                    <a href="https://github.com" target="_blank" className="flex items-center gap-2 text-sm">
                      <Github className="h-4 w-4" />
                      <span>GitHub</span>
                    </a>
                    <a href="https://twitter.com" target="_blank" className="flex items-center gap-2 text-sm">
                      <Twitter className="h-4 w-4" />
                      <span>Twitter</span>
                    </a>
                    <a href="https://discord.com" target="_blank" className="flex items-center gap-2 text-sm">
                      <MessageSquare className="h-4 w-4" />
                      <span>Discord</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu Footer */}
            <div className="p-4 border-t border-border/10">
              <div className="flex flex-col gap-3">
                <Link href="/auth">
                  <Button variant="outline" className="w-full rounded-full">
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth">
                  <Button className="w-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
}