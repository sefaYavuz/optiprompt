"use client"

import { Button } from "@/components/ui/button"
import { CheckIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { motion } from "framer-motion"
import { FADE_UP_ANIMATION_VARIANTS, STAGGER_ANIMATION_PROPS } from "@/lib/animations"
import { HoverBorderGradient } from "../ui/hover-border-gradient"

const plans = [
	{
		name: "Free",
		price: "$0",
		description: "Try OptiPrompt with basic features",
		features: [
			"1,000 requests/month",
			"Basic prompt caching",
			"Limited analytics",
			"Community support",
			"3-day data retention",
			"Monthly usage reset",
		],
	},
	{
		name: "Pro",
		price: "$29",
		description: "For developers and AI enthusiasts",
		features: [
			"Unlimited requests",
			"Advanced semantic caching",
			"Detailed analytics & insights",
			"Email support",
			"API access",
			"30-day data retention",
			"Custom model selection",
		],
		popular: true,
	},
]

export function Pricing() {
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
					<h2 className="text-3xl font-bold tracking-tight text-white mb-4">
						Simple, transparent pricing
					</h2>
					<p className="text-lg text-[#8CCDEB] max-w-2xl mx-auto">
						Start free and scale as you grow. No hidden fees or commitments.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
					{plans.map((plan) => (
						<motion.div
							key={plan.name}
							className={`flex flex-col justify-between relative rounded-xl border ${
								plan.popular
									? "border-primary bg-indigo-900"
									: "border-secondary bg-background"
							} p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-[#8CCDEB]/50`}
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ delay: 0.2 }}
						>
							{plan.popular && (
								<div className="absolute -top-4 left-1/2 -translate-x-1/2">
									<HoverBorderGradient 
										containerClassName="rounded-full"
										as={"span"}
										className="bg-indigo-900/50 px-4 py-1.5 rounded-full text-xs font-medium text-white">
										Most Popular
									</HoverBorderGradient>
								</div>
							)}
							<div className="mb-6">
								<h3 className="text-xl font-bold text-[#8CCDEB] mb-2">{plan.name}</h3>
								<div className="mb-2 flex items-baseline">
									<span className="text-4xl font-bold text-white">{plan.price}</span>
									<span className="text-secondary ml-2">/month</span>
								</div>
								<p className="text-[#8CCDEB]/80">{plan.description}</p>
							</div>
							<ul className="space-y-3 mb-6">
								{plan.features.map((feature) => (
									<li key={feature} className="flex items-center gap-2">
										<CheckIcon className="h-5 w-5 flex-shrink-0" />
										<span className="text--500">{feature}</span>
									</li>
								))}
							</ul>
							<Link href="/auth/sign-up" className="block">
								<Button
									className="w-full"
									variant={plan.popular ? "gradient" : "outline"}
								>
									Get Started
								</Button>
							</Link>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
