"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  CubeIcon, 
  ChartBarIcon, 
  BanknotesIcon, 
  CodeBracketIcon 
} from "@heroicons/react/24/outline"

const features = [
  {
    title: "Prompt Caching",
    description: "Cache similar prompts and reduce redundant API calls. Save up to 70% on your AI costs.",
    icon: CubeIcon,
  },
  {
    title: "Usage Insights",
    description: "Get detailed analytics on your AI model usage patterns and optimize accordingly.",
    icon: ChartBarIcon,
  },
  {
    title: "Cost Optimization",
    description: "Automatically route requests to the most cost-effective model based on your needs.",
    icon: BanknotesIcon,
  },
  {
    title: "Simple API Integration",
    description: "Drop-in replacement for existing AI model APIs. Start saving in minutes, not days.",
    icon: CodeBracketIcon,
  },
]

export function Features() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Everything you need to optimize your AI costs
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Simple, powerful tools to reduce your AI spending without compromising quality
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="border-2 border-gray-100">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-blue-500" />
                <CardTitle className="mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
