"use client"

import { Button } from "@/components/ui/button"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { FADE_DOWN_ANIMATION_VARIANTS, STAGGER_ANIMATION_PROPS } from "@/lib/animations"
import { ContainerTextFlip } from "../ui/container-text-flip"
import { FlipWords } from "../ui/flip-words"

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
		<section className="relative py-20 px-4 md:px-6 lg:px-8 bg-background min-h-[90vh] flex items-center">
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
							<span className="relative inline-block">
								<FlipWords className="bg-[linear-gradient(45deg,#8CCDEB,#725CAD)] bg-clip-text text-transparent" words={['Smarter', 'Cheaper']} />
							</span>
						</motion.h1>
						<motion.p
							className="text-xl text-accent max-w-xl"
							variants={FADE_DOWN_ANIMATION_VARIANTS}
						>
							OptiPrompt helps you cut AI costs by up to 70% through smart caching
							and optimization, without changing your code.
						</motion.p>
						<motion.div
							className="flex items-center gap-4"
							variants={FADE_DOWN_ANIMATION_VARIANTS}
						>
							<Link href="/auth/sign-up">
								<Button size="lg" variant="gradient">
									Start Saving Now
								</Button>
							</Link>
							<Link href="/docs">
								<Button variant="outline" size="lg" className="border-[#8CCDEB]/20 text-[#8CCDEB] hover:bg-[#8CCDEB]/10">
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
						
						<div className="relative z-10 rounded-xl overflow-hidden border border-border bg-background">
							<div className="flex items-center gap-2 p-4 bg-background border-b border-border">
								{codeExamples.map((example, index) => (
									<Button
										key={example.title}
										onClick={() => setActiveExample(index)}
										size="lg" 
										variant={activeExample === index ? "gradient" : "outline"}
										className="px-3 py-1 rounded-md text-sm transition-colors"
									>
										{example.title}
									</Button>
								))}
							</div>
							<div className="p-4 space-y-6">
								<div className="space-y-4">
									<motion.div
										key={activeExample}
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ type: "spring" }}
										className="font-mono text-sm text-muted-foreground/70 bg-background/50 p-4 rounded-lg border border-border/50"
									>
										<pre className="whitespace-pre-wrap">
											{codeExamples[activeExample].code}
										</pre>
									</motion.div>
									<div className="relative">
										<div className="absolute inset-0 flex items-center">
											<div className="w-full border-t border-border" />
										</div>
										<div className="relative flex justify-center">
											<span className="bg-background px-2 text-sm text-accent/50">
												With OptiPrompt
											</span>
										</div>
									</div>
									<motion.div
										key={`optimized-${activeExample}`}
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ type: "spring", delay: 0.1 }}
										className="font-mono text-sm text-accent bg-secondary/10 p-4 rounded-lg border border-border"
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
			<motion.div 
				className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
				initial={{ opacity: 0, y: -10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1, duration: 0.5 }}
			>
				<motion.span 
					className="text-primary text-sm"
					animate={{ y: [0, 5, 0] }}
					transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
				>
					Scroll to explore
				</motion.span>
				<motion.svg
					width="16"
					height="24"
					viewBox="0 0 16 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					animate={{ y: [0, 5, 0] }}
					transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
				>
					<path
						d="M7.29289 23.7071C7.68342 24.0976 8.31658 24.0976 8.70711 23.7071L15.0711 17.3431C15.4616 16.9526 15.4616 16.3195 15.0711 15.9289C14.6805 15.5384 14.0474 15.5384 13.6569 15.9289L8 21.5858L2.34315 15.9289C1.95262 15.5384 1.31946 15.5384 0.928932 15.9289C0.538408 16.3195 0.538408 16.9526 0.928932 17.3431L7.29289 23.7071ZM7 0L7 23H9L9 0L7 0Z"
						fill="currentColor"
						className="text-primary opacity-50"
					/>
				</motion.svg>
			</motion.div>
		</section>
	)
}
