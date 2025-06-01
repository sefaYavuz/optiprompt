"use client"

import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
	{
		quote: "OptiPrompt helped us cut our AI costs by 65% while maintaining the same quality of responses. The caching system is incredibly smart.",
		author: "Sarah Chen",
		role: "CTO at TechScale AI",
	},
	{
		quote: "The analytics dashboard gives us insights we never had before. We can now optimize our prompts based on real data.",
		author: "Michael Roberts",
		role: "Lead Engineer at DataFlow",
	},
	{
		quote: "Integration was seamless. We replaced our direct OpenAI calls with OptiPrompt and started saving immediately.",
		author: "Emily Watson",
		role: "AI Product Manager at InnovateCorp",
	},
]

export function Testimonials() {
	return (
		<section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900">
						Trusted by AI-first companies
					</h2>
					<p className="mt-4 text-lg text-gray-600">
						See what our customers have to say about OptiPrompt
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{testimonials.map((testimonial) => (
						<Card key={testimonial.author} className="bg-white">
							<CardContent className="pt-6">
								<div className="space-y-4">
									<p className="text-gray-600 italic">
										"{testimonial.quote}"
									</p>
									<div>
										<div className="font-semibold text-gray-900">
											{testimonial.author}
										</div>
										<div className="text-sm text-gray-500">
											{testimonial.role}
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}
