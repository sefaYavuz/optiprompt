"use client"

import { SignIn } from "@clerk/nextjs"
import { useSearchParams } from "next/navigation"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/animations"

export default function SignInPage() {
  const searchParams = useSearchParams()
  const redirectUrl = searchParams.get("redirect_url") || "/dashboard"

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0d1117]">
      <Link href="/" className="absolute left-8 top-8 z-10">
        <Button variant="ghost" className="text-white">
          ← Back to home
        </Button>
      </Link>
      
      <motion.div
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
          <BackgroundGradient className="rounded-[20px]" containerClassName="mb-10">
            <SignIn
              appearance={{
                elements: {
                  rootBox: "mx-auto",
                  card: "bg-[#0d1117]/80 backdrop-blur-xl border border-[#4E71FF]/20 p-8 shadow-2xl",
                  headerTitle: "text-white text-2xl font-bold mb-2",
                  headerSubtitle: "text-gray-400 text-sm mb-6",
                  socialButtonsBlockButton: "bg-[#1a1f2a] border border-[#4E71FF]/20 text-white hover:bg-[#1a1f2a]/80 transition-colors duration-200",
                  formButtonPrimary: "bg-gradient-to-r from-[#4E71FF] to-[#5409DA] hover:opacity-90 transition-opacity duration-200",
                  footerAction: "text-gray-400 hover:text-white transition-colors duration-200",
                  formFieldLabel: "text-gray-300 font-medium",
                  formFieldInput: "bg-[#1a1f2a] border-[#4E71FF]/20 text-white rounded-lg focus:ring-2 focus:ring-[#4E71FF]/50 focus:border-transparent transition-all duration-200",
                  dividerLine: "bg-gray-800",
                  dividerText: "text-gray-500 bg-[#0d1117]/80 px-2",
                  formFieldInputShowPasswordButton: "text-gray-400 hover:text-white transition-colors duration-200",
                  otherErrorText: "text-red-400",
                  identityPreviewText: "text-gray-300",
                  identityPreviewEditButton: "text-[#4E71FF] hover:text-[#4E71FF]/80 transition-colors duration-200",
                  formFieldWarningText: "text-yellow-400",
                  socialButtonsProviderIcon: "w-5 h-5 mr-2",
                  socialButtons: "space-y-2",
                  socialButtonsBlockButtonArrow: "text-gray-400",
                },
                layout: {
                  socialButtonsPlacement: "bottom",
                  showOptionalFields: true,
                },
              }}
              path="/auth/sign-in"
              routing="path"
              signUpUrl="/auth/sign-up"
              afterSignInUrl={redirectUrl}
            />
          </BackgroundGradient>
        </motion.div>
      </motion.div>
    </div>
  )
}
