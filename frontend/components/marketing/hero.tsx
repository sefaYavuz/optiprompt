import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
            Save on Every AI Prompt
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Smart caching and analytics for OpenAI, Claude, DeepSeek and more
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/login">
              <Button size="lg" className="rounded-full px-8">
                Start Saving Now
              </Button>
            </Link>
            <Link href="/docs">
              <Button variant="outline" size="lg" className="rounded-full px-8">
                View Documentation
              </Button>
            </Link>
          </div>
        </div>
        <div className="mt-16">
          <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden shadow-xl border border-gray-200">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-2xl font-semibold text-gray-700">Dashboard Preview</div>
                <p className="text-gray-500">Beautiful analytics and insights coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
