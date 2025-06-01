import { Button } from "@/components/ui/button"
import Link from "next/link"

export function MarketingHeader() {
  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              OptiPrompt
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/docs" className="text-gray-600 hover:text-gray-900">
              Documentation
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="/login">
              <Button variant="outline" className="mr-2">Log in</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign up</Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
