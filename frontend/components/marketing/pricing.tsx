"use client"

import { Button } from "@/components/ui/button"
import { CheckIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { motion } from "framer-motion"
import { FADE_UP_ANIMATION_VARIANTS, STAGGER_ANIMATION_PROPS } from "@/lib/animations"

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
		<section className="py-20 px-4 md:px-6 lg:px-8 bg-[#0d1117] border-t border-[#4E71FF]/20">
			<div className="max-w-7xl mx-auto">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ delay: 0.2 }}
				>
					<h2 className="text-3xl font-bold tracking-tight text-white mb-4">
						Simple pricing, powerful features
					</h2>
					<p className="text-lg text-[#8DD8FF]">
						Start for free, upgrade for unlimited AI optimization
					</p>
					<p className="mt-2 text-[#8DD8FF]/70 text-sm">
						Most teams exceed the free tier within their first week of using OptiPrompt
					</p>
				</motion.div>

				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto"
					{...STAGGER_ANIMATION_PROPS}
				>
					{plans.map((plan) => (
						<motion.div
							key={plan.name}
							variants={FADE_UP_ANIMATION_VARIANTS}
							className={`relative rounded-2xl border ${
								plan.popular
									? "border-[#5409DA] bg-gradient-to-b from-[#5409DA]/10 to-transparent"
									: "border-[#4E71FF]/20 hover:border-[#4E71FF]/40"
							} p-8 transition-colors duration-200 flex flex-col justify-between`}
						>
							{plan.popular && (
								<div className="absolute -top-5 left-0 right-0 flex justify-center">
									<div className="bg-[#5409DA] text-white px-4 py-1 rounded-full text-sm font-medium">
										Most Popular
									</div>
								</div>
							)}
							<div className="mb-8">
								<h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
								<div className="flex items-baseline gap-2">
									<span className="text-4xl font-bold text-white">{plan.price}</span>
									<span className="text-[#8DD8FF]">{plan.price === "$0" ? "forever" : "/month"}</span>
								</div>
								<p className="mt-2 text-[#8DD8FF]">{plan.description}</p>
							</div>
							<ul className="space-y-4 mb-8">
								{plan.features.map((feature) => (
									<li key={feature} className="flex items-center gap-3">
										<CheckIcon className="h-5 w-5 text-[#4E71FF]" />
										<span className="text-[#8DD8FF]">{feature}</span>
									</li>
								))}
							</ul>
							<Link href={plan.price === "$0" ? "/signup" : "/signup?plan=pro"} className="block">
								<Button
									variant={plan.popular ? "default" : "outline"}
									className="w-full"
								>
									{plan.price === "$0" ? "Get Started" : "Upgrade Now"}
								</Button>
							</Link>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	)
}
