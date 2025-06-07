import Link from "next/link"

export function MarketingFooter() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-primary-gradient bg-clip-text text-transparent">
              OptiPrompt
            </h3>
            <p className="text-sm text-muted-foreground">
              Smart caching and analytics for AI models
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="text-sm text-muted-foreground hover:text-muted hover:text-muted-foreground transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-muted-foreground hover:text-muted-foreground transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-muted-foreground transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-muted-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-muted-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-muted-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Social</h4>
            <ul className="space-y-2">
              <li>
                <Link href="https://twitter.com/optiprompt" className="text-sm text-muted-foreground hover:text-muted-foreground transition-colors">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="https://github.com/optiprompt" className="text-sm text-muted-foreground hover:text-muted-foreground transition-colors">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="https://discord.gg/optiprompt" className="text-sm text-muted-foreground hover:text-muted-foreground transition-colors">
                  Discord
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
