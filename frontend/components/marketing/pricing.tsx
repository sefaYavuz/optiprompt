"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

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
	},
]

export function Pricing() {
	return (
		<section className="py-20 px-4 md:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900">
						Simple, transparent pricing
					</h2>
					<p className="mt-4 text-lg text-gray-600">
						Start saving on your AI costs today
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
					{plans.map((plan) => (
						<Card
							key={plan.name}
							className={`border-2 ${
								plan.name === "Pro"
									? "border-blue-200"
									: "border-gray-200"
							}`}
						>
							<CardHeader>
								<CardTitle className="text-2xl">{plan.name}</CardTitle>
								<div className="mt-2">
									<span className="text-4xl font-bold">{plan.price}</span>
									<span className="text-gray-600">/month</span>
								</div>
								<p className="text-gray-600 mt-2">{plan.description}</p>
							</CardHeader>
							<CardContent>
								<ul className="space-y-4">
									{plan.features.map((feature) => (
										<li
											key={feature}
											className="flex items-center gap-3"
										>
											<CheckIcon className="h-5 w-5 text-green-500" />
											<span>{feature}</span>
										</li>
									))}
								</ul>
								<div className="mt-8">
									<Link href="/login">
										<Button
											className="w-full"
											variant={
												plan.name === "Pro" ? "default" : "outline"
											}
										>
											Get started with {plan.name}
										</Button>
									</Link>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}
