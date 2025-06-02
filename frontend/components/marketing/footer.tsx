import Link from "next/link"

export function MarketingFooter() {
  return (
    <footer className="bg-[#0d1117] border-t border-[#4E71FF]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-[#5409DA] via-[#4E71FF] to-[#8DD8FF] bg-clip-text text-transparent">
              OptiPrompt
            </h3>
            <p className="text-sm text-[#8DD8FF]/80">
              Smart caching and analytics for AI models
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="text-sm text-[#8DD8FF]/80 hover:text-[#BBFBFF] transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-[#8DD8FF]/80 hover:text-[#BBFBFF] transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-[#8DD8FF]/80 hover:text-[#BBFBFF] transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-[#8DD8FF]/80 hover:text-[#BBFBFF] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-[#8DD8FF]/80 hover:text-[#BBFBFF] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-[#8DD8FF]/80 hover:text-[#BBFBFF] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://twitter.com/optiprompt" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-[#8DD8FF]/80 hover:text-[#BBFBFF] transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/optiprompt" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-[#8DD8FF]/80 hover:text-[#BBFBFF] transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#4E71FF]/20">
          <p className="text-sm text-[#8DD8FF]/60 text-center">
            © {new Date().getFullYear()} OptiPrompt. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
