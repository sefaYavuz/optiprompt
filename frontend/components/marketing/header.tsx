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
          ? "bg-[#0d1117]/95 backdrop-blur-md shadow-lg border-[#4E71FF]/20" 
          : "bg-[#0d1117]/80 backdrop-blur-sm border-transparent"
      } border-b`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.div 
            className="flex items-center"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            initial="hidden"
            animate="show"
          >
            <Link href="/" className="text-xl font-bold bg-gradient-to-r from-[#5409DA] via-[#4E71FF] to-[#8DD8FF] bg-clip-text text-transparent hover:opacity-90 transition-opacity">
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
              className="text-[#8DD8FF] hover:text-[#BBFBFF] transition-colors"
            >
              Documentation
            </Link>
            <Link 
              href="/about" 
              className="text-[#8DD8FF] hover:text-[#BBFBFF] transition-colors"
            >
              About
            </Link>
            <Link href="/login">
              <Button 
                variant="outline"
                className="border-[#4E71FF]/30 hover:border-[#4E71FF]/60"
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
