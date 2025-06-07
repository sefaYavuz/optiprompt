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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-lg border-[#8CCDEB]/10" 
          : "bg-background/50 backdrop-blur-sm border-transparent"
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
            <Link href="/" className="text-xl font-bold">
              <span className="inline-block bg-[linear-gradient(45deg,#8CCDEB,#725CAD)] bg-clip-text text-transparent hover:opacity-90 transition-opacity">
                OptiPrompt
              </span>
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
              className="text-[#8CCDEB] hover:text-[#8CCDEB]/80 transition-colors"
            >
              Documentation
            </Link>
            <Link 
              href="/about" 
              className="text-[#8CCDEB] hover:text-[#8CCDEB]/80 transition-colors"
            >
              About
            </Link>
            <Link href="/auth/sign-in">
              <Button variant="outline" className="border-[#8CCDEB]/20 text-[#8CCDEB] hover:bg-[#8CCDEB]/10">
                Sign in
              </Button>
            </Link>
            <Link href="/auth/sign-up">
              <Button className="bg-[linear-gradient(45deg,#725CAD,#8CCDEB)] hover:opacity-90 transition-opacity border-0">
                Get Started
              </Button>
            </Link>
          </motion.nav>
        </div>
      </div>
    </motion.header>
  )
}
