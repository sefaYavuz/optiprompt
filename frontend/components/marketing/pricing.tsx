"use client"

import { Button } from "@/components/ui/button"
import { CheckIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { motion } from "framer-motion"
import { FADE_UP_ANIMATION_VARIANTS, STAGGER_ANIMATION_PROPS } from "@/lib/animations"

const plans = [
	{
		name: "Starter",
		price: "$49",
		description: "Perfect for small teams and startups",
		features: [
			"Up to 100,000 requests/month",
			"Basic prompt caching",
			"Usage analytics",
			"24-hour support response time",
			"API access",
		],
	},
	{
		name: "Pro",
		price: "$199",
		description: "For growing companies with serious AI usage",
		features: [
			"Unlimited requests",
			"Advanced semantic caching",
			"Custom routing rules",
			"Priority support (4-hour response)",
			"Advanced analytics",
			"Custom integrations",
			"Team management",
		],
		popular: true,
	},
]

export function Pricing() {
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
						Simple, transparent pricing
					</h2>
					<p className="mt-4 text-lg text-gray-400">
						Start saving on your AI costs today
					</p>
				</motion.div>
				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
					{...STAGGER_ANIMATION_PROPS}
				>
					{plans.map((plan) => (
						<motion.div
							key={plan.name}
							variants={FADE_UP_ANIMATION_VARIANTS}
							className={`relative p-8 bg-gray-900/50 rounded-xl border ${
								plan.popular
									? "border-blue-500/50 bg-blue-500/5"
									: "border-gray-800"
							}`}
							whileHover={{ y: -5 }}
							transition={{ duration: 0.2 }}
						>
							{plan.popular && (
								<div className="absolute -top-4 left-1/2 -translate-x-1/2">
									<div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
										Most Popular
									</div>
								</div>
							)}
							<div>
								<h3 className="text-2xl font-bold text-white">
									{plan.name}
								</h3>
								<div className="mt-2 flex items-baseline">
									<span className="text-4xl font-bold text-white">
										{plan.price}
									</span>
									<span className="text-gray-400 ml-1">/month</span>
								</div>
								<p className="text-gray-400 mt-2">{plan.description}</p>
							</div>
							<ul className="mt-8 space-y-4">
								{plan.features.map((feature) => (
									<li key={feature} className="flex items-center gap-3">
										<CheckIcon
											className={`h-5 w-5 ${
												plan.popular
													? "text-blue-400"
													: "text-green-400"
											}`}
										/>
										<span className="text-gray-300">{feature}</span>
									</li>
								))}
							</ul>
							<div className="mt-8">
								<Link href="/login" className="block">
									<Button
										className={`w-full ${
											plan.popular
												? "bg-blue-600 hover:bg-blue-700 text-white"
												: "bg-gray-800 hover:bg-gray-700 text-white"
										}`}
									>
										Get started with {plan.name}
									</Button>
								</Link>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	)
}
