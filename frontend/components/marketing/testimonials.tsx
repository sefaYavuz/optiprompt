"use client"

import { motion } from "framer-motion"
import { FADE_UP_ANIMATION_VARIANTS, STAGGER_ANIMATION_PROPS } from "@/lib/animations"

const testimonials = [
	{
		quote: "OptiPrompt helped us cut our AI costs by 65% while maintaining the same quality of responses. The caching system is incredibly smart.",
		author: "Sarah Chen",
		role: "CTO at TechScale AI",
		image: "https://api.dicebear.com/7.x/personas/svg?seed=sarah",
	},
	{
		quote: "The analytics dashboard gives us insights we never had before. We can now optimize our prompts based on real data.",
		author: "Michael Roberts",
		role: "Lead Engineer at DataFlow",
		image: "https://api.dicebear.com/7.x/personas/svg?seed=michael",
	},
	{
		quote: "Integration was seamless. We replaced our direct OpenAI calls with OptiPrompt and started saving immediately.",
		author: "Emily Watson",
		role: "AI Product Manager at InnovateCorp",
		image: "https://api.dicebear.com/7.x/personas/svg?seed=emily",
	},
]

export function Testimonials() {
	return (
		<section className="py-20 px-4 md:px-6 lg:px-8 bg-background">
			<div className="max-w-7xl mx-auto">
				<motion.div 
					className="text-center mb-16"
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ delay: 0.2 }}
				>
					<h2 className="text-3xl font-bold tracking-tight text-foreground">
						Trusted by AI-first companies
					</h2>
					<p className="mt-4 text-lg text-accent">
						See what our customers have to say about OptiPrompt
					</p>
				</motion.div>
				<motion.div 
					className="grid grid-cols-1 md:grid-cols-3 gap-8"
					{...STAGGER_ANIMATION_PROPS}
				>
					{testimonials.map((testimonial) => (
						<motion.div
							key={testimonial.author}
							variants={FADE_UP_ANIMATION_VARIANTS}
							className="relative p-6 rounded-xl border border-border bg-muted/5"
						>
							<div className="relative z-20 space-y-6">
								<div className="space-y-4">
									<p className="text-accent">
										{testimonial.quote}
									</p>
									<div className="flex items-center gap-4">
										<img
											src={testimonial.image}
											alt={testimonial.author}
											className="h-12 w-12 rounded-full border border-border"
										/>
										<div>
											<div className="font-medium text-foreground">
												{testimonial.author}
											</div>
											<div className="text-sm text-accent">
												{testimonial.role}
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-background opacity-20 rounded-xl" />
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	)
}
