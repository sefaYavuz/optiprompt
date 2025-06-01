"use client"

import { motion } from "framer-motion"
import { 
  CubeIcon, 
  ChartBarIcon, 
  BanknotesIcon, 
  CodeBracketIcon 
} from "@heroicons/react/24/outline"
import { FADE_UP_ANIMATION_VARIANTS, STAGGER_ANIMATION_PROPS } from "@/lib/animations"

const features = [
  {
    title: "Smart Prompt Caching",
    description: "OptiPrompt intelligently caches similar prompts and their responses, reducing redundant API calls and cutting costs by up to 70%.",
    icon: CubeIcon,
  },
  {
    title: "Real-time Analytics",
    description: "Get deep insights into your AI usage patterns, costs, and optimization opportunities with our powerful analytics dashboard.",
    icon: ChartBarIcon,
  },
  {
    title: "Cost Optimization",
    description: "Automatically route requests to the most cost-effective model based on your performance and budget requirements.",
    icon: BanknotesIcon,
  },
  {
    title: "Drop-in Integration",
    description: "Replace your existing AI API calls with OptiPrompt in minutes. No complex setup, no changing how you work.",
    icon: CodeBracketIcon,
  },
]

export function Features() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* First Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-white">
              Give your knowledge a home
            </h2>
            <p className="text-lg text-gray-400">
              Put your code, docs, and notes where they belong: together. With OptiPrompt, your AI pair programmer uses that context to deliver better, more tailored answers for you and your team.
            </p>
            <a
              href="/spaces"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              Try OptiPrompt Spaces →
            </a>
          </motion.div>

          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.4 }}
          >
            <div className="relative rounded-lg overflow-hidden border border-gray-800 bg-gray-900/50 max-w-md mx-auto">
              <img
                src="/file.svg"
                alt="Feature visual"
                className="w-full h-auto max-h-[300px] object-contain p-4"
              />
            </div>
          </motion.div>
        </div>

        {/* Second Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
          <motion.div
            className="lg:order-2 space-y-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-white">
              Smart caching saves you money
            </h2>
            <p className="text-lg text-gray-400">
              OptiPrompt intelligently caches similar prompts and their responses, reducing redundant API calls and cutting costs by up to 70%.
            </p>
            <a
              href="/docs/caching"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              Learn about caching →
            </a>
          </motion.div>

          <motion.div
            className="lg:order-1 relative flex items-center justify-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.4 }}
          >
            <div className="relative rounded-lg overflow-hidden border border-gray-800 bg-gray-900/50 max-w-md mx-auto">
              <img
                src="/globe.svg"
                alt="Analytics visual"
                className="w-full h-auto max-h-[300px] object-contain p-4"
              />
            </div>
          </motion.div>
        </div>

        {/* Third Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-white">
              Real-time insights and analytics
            </h2>
            <p className="text-lg text-gray-400">
              Get deep insights into your AI usage patterns, costs, and optimization opportunities with our powerful analytics dashboard.
            </p>
            <a
              href="/docs/analytics"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              Explore analytics →
            </a>
          </motion.div>

          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.4 }}
          >
            <div className="relative rounded-lg overflow-hidden border border-gray-800 bg-gray-900/50 max-w-md mx-auto">
              <img
                src="/window.svg"
                alt="Analytics visual"
                className="w-full h-auto max-h-[300px] object-contain p-4"
              />
            </div>
          </motion.div>
        </div>

        {/* Fourth Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
          <motion.div
            className="lg:order-2 space-y-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-white">
              Drop-in integration
            </h2>
            <p className="text-lg text-gray-400">
              Replace your existing AI API calls with OptiPrompt in minutes. No complex setup, no changing how you work.
            </p>
            <a
              href="/docs/integration"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              View integration guide →
            </a>
          </motion.div>

          <motion.div
            className="lg:order-1 relative flex items-center justify-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.4 }}
          >
            <div className="relative rounded-lg overflow-hidden border border-gray-800 bg-gray-900/50 max-w-md mx-auto">
              <img
                src="/next.svg"
                alt="Integration visual"
                className="w-full h-auto max-h-[300px] object-contain p-4"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
