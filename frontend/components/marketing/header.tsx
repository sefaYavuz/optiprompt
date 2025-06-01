"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/animations"
import { useEffect, useState } from "react"

export function MarketingHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        isScrolled 
          ? "bg-[#0d1117]/95 backdrop-blur-md shadow-lg" 
          : "bg-[#0d1117]/80 backdrop-blur-sm"
      } border-b border-gray-800`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.div 
            className="flex items-center"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            initial="hidden"
            animate="show"
          >
            <Link href="/" className="text-xl font-bold text-white hover:text-gray-200 transition-colors">
              OptiPrompt
            </Link>
          </motion.div>
          <motion.nav 
            className="hidden md:flex items-center gap-6"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            initial="hidden"
            animate="show"
          >
            <Link 
              href="/docs" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              Documentation
            </Link>
            <Link 
              href="/about" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link href="/login">
              <Button 
                variant="outline"
              >
                Sign in
              </Button>
            </Link>
          </motion.nav>
        </div>
      </div>
    </motion.header>
  )
}
