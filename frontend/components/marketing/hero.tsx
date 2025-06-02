"use client"

import { Button } from "@/components/ui/button"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { FADE_DOWN_ANIMATION_VARIANTS, STAGGER_ANIMATION_PROPS } from "@/lib/animations"

const codeExamples = [
	{
		title: "OpenAI",
		code: `const response = await fetch('https://api.openai.com/v1/chat/completions', {
  method: 'POST',
  headers: { 'Authorization': 'Bearer ' + process.env.OPENAI_API_KEY },
  body: JSON.stringify({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }]
  })
})`,
		optimizedCode: `import { OptiPrompt } from 'optiprompt'

const client = new OptiPrompt()
const response = await client.complete({
  prompt,  // Automatically cached & optimized
  model: 'gpt-4'
})`,
	},
	{
		title: "Claude",
		code: `const response = await fetch('https://api.anthropic.com/v1/messages', {
  method: 'POST',
  headers: { 'x-api-key': process.env.ANTHROPIC_API_KEY },
  body: JSON.stringify({
    model: 'claude-3-opus',
    messages: [{ role: 'user', content: prompt }]
  })
})`,
		optimizedCode: `import { OptiPrompt } from 'optiprompt'

const client = new OptiPrompt()
const response = await client.complete({
  prompt,  // Automatically cached & optimized
  model: 'claude-3-opus'
})`,
	},
]

export function Hero() {
	const [activeExample, setActiveExample] = useState(0)

	return (
		<section className="relative py-20 px-4 md:px-6 lg:px-8 bg-[#0d1117] min-h-[90vh] flex items-center">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<motion.div
						className="space-y-8"
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
						<motion.h1
							className="text-4xl md:text-6xl font-bold tracking-tight text-white"
							variants={FADE_DOWN_ANIMATION_VARIANTS}
						>
							Your AI Just Got{" "}
							<span className="bg-gradient-to-r from-[#5409DA] via-[#4E71FF] to-[#8DD8FF] bg-clip-text text-transparent">
								Smarter
							</span>
						</motion.h1>
						<motion.p
							className="text-xl text-gray-400 max-w-xl"
							variants={FADE_DOWN_ANIMATION_VARIANTS}
						>
							OptiPrompt helps you cut AI costs by up to 70% through smart caching
							and optimization, without changing your code.
						</motion.p>
						<motion.div
							className="flex items-center gap-4"
							variants={FADE_DOWN_ANIMATION_VARIANTS}
						>
							<Link href="/auth/sign-in?redirect_url=/dashboard">
								<Button
									size="lg"
									className="px-8"
								>
									Start Saving Now
								</Button>
							</Link>
							<Link href="/docs">
								<Button
									variant="outline"
									size="lg"
								>
									View Documentation
								</Button>
							</Link>
						</motion.div>
					</motion.div>

					<motion.div 
						className="relative"
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ type: "spring", duration: 0.8 }}
					>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.2 }}
						>
							<BackgroundGradient
								containerClassName="absolute -inset-1 z-0"
								className="rounded-xl opacity-100"
								animate={false}
							/>
						</motion.div>
						
						<div
							className="relative z-10 rounded-xl overflow-hidden border border-[#4E71FF]/20 bg-[#0d1117]"
						>
							<div className="flex items-center gap-2 p-4 bg-[#0d1117]/50 border-b border-[#4E71FF]/20">
								{codeExamples.map((example, index) => (
									<button
										key={example.title}
										onClick={() => setActiveExample(index)}
										className={`px-3 py-1 rounded-md text-sm transition-colors ${
											activeExample === index
												? "bg-[#5409DA] text-white"
												: "text-[#8DD8FF]/70 hover:text-[#8DD8FF]"
										}`}
									>
										{example.title}
									</button>
								))}
							</div>
							<div className="p-4 space-y-6">
								<div className="space-y-4">
									<motion.div
										key={activeExample}
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ type: "spring" }}
										className="font-mono text-sm text-[#8DD8FF]/70 bg-[#0d1117]/50 p-4 rounded-lg border border-[#4E71FF]/10"
									>
										<pre className="whitespace-pre-wrap">
											{codeExamples[activeExample].code}
										</pre>
									</motion.div>
									<div className="relative">
										<div className="absolute inset-0 flex items-center">
											<div className="w-full border-t border-[#4E71FF]/20" />
										</div>
										<div className="relative flex justify-center">
											<span className="bg-[#0d1117] px-2 text-sm text-[#8DD8FF]/50">
												With OptiPrompt
											</span>
										</div>
									</div>
									<motion.div
										key={`optimized-${activeExample}`}
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ type: "spring", delay: 0.1 }}
										className="font-mono text-sm text-[#8DD8FF] bg-[#5409DA]/10 p-4 rounded-lg border border-[#4E71FF]/30"
									>
										<pre className="whitespace-pre-wrap">
											{codeExamples[activeExample].optimizedCode}
										</pre>
									</motion.div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
