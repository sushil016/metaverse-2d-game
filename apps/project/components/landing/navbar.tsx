"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Gamepad, ChevronDown, BookOpen, FileText, History, Github, Twitter, Youtube, Linkedin, MessageSquare } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed w-full z-50 pt-4 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-full px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="group flex items-center space-x-2">
              <div className="relative p-2.5 rounded-xl bg-gradient-to-r from-blue-500/10 to-violet-500/10 group-hover:from-blue-500/20 group-hover:to-violet-500/20 transition-all duration-300">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  className="transform-gpu"
                >
                  <Gamepad className="h-7 w-7 stroke-[1.5]" />
                </motion.div>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                MetaVerse2D
              </span>
            </Link>

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

          <div className="flex items-center space-x-4">
            <Link href="/auth">
              <Button variant="ghost" className="rounded-full">Login</Button>
            </Link>
            <Link href="/auth">
              <Button className="rounded-full bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}