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
		<section className="py-20 px-4 md:px-6 lg:px-8 bg-[#0d1117] border-t border-gray-800">
			<div className="max-w-7xl mx-auto">
				<motion.div 
					className="text-center mb-16"
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ delay: 0.2 }}
				>
					<h2 className="text-3xl font-bold tracking-tight text-white">
						Trusted by AI-first companies
					</h2>
					<p className="mt-4 text-lg text-gray-400">
						See what our customers have to say about OptiPrompt
					</p>
				</motion.div>
				<motion.div 
					className="grid grid-cols-1 md:grid-cols-3 gap-8"
					{...STAGGER_ANIMATION_PROPS}
				>
					{testimonials.map((testimonial, index) => (
						<motion.div
							key={testimonial.author}
							variants={FADE_UP_ANIMATION_VARIANTS}
							whileHover={{ y: -5 }}
							transition={{ duration: 0.2 }}
							className="relative p-6 bg-gray-900/50 rounded-xl border border-gray-800"
						>
							<motion.div 
								className="flex items-start gap-4"
								variants={{
									hidden: { opacity: 0, scale: 0.95 },
									show: { 
										opacity: 1, 
										scale: 1,
										transition: { delay: index * 0.1 }
									}
								}}
							>
								<img
									src={testimonial.image}
									alt={testimonial.author}
									className="w-10 h-10 rounded-full bg-gray-800"
								/>
								<div className="flex-1 min-w-0">
									<div className="space-y-4">
										<p className="text-gray-300 italic">"{testimonial.quote}"</p>
										<div>
											<div className="font-semibold text-white">{testimonial.author}</div>
											<div className="text-sm text-gray-400">{testimonial.role}</div>
										</div>
									</div>
								</div>
							</motion.div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	)
}
