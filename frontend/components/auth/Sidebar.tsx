"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useUser } from "@clerk/nextjs"
import { 
  LayoutDashboard, 
  ScrollText, 
  Settings,
  BarChart,
  ChevronLeft,
  ChevronRight,
  LineChart,
  AlertCircle,
  Database,
  Code2,
  KeyRound,
  Wallet,
  Users,
  CircuitBoard,
  BookOpen
} from 'lucide-react'
import { UserAvatar } from './UserAvatar'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useSidebarStore } from '@/store/sidebar'

interface NavItem {
  href: string
  label: string
  icon: any
}

interface NavItems {
  [key: string]: NavItem[]
}

const navItems: NavItems = {
  overview: [
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/analytics', label: 'Analytics', icon: LineChart },
    { href: '/logs', label: 'Logs', icon: ScrollText },
  ],
  management: [
    { href: '/models', label: 'Models', icon: CircuitBoard },
    { href: '/keys', label: 'API Keys', icon: KeyRound },
    { href: '/billing', label: 'Billing', icon: Wallet },
  ],
  optimization: [
    { href: '/cache', label: 'Cache Settings', icon: Database },
    { href: '/prompts', label: 'Prompt Library', icon: Code2 },
  ],
  resources: [
    { href: '/docs', label: 'Documentation', icon: BookOpen },
    { href: '/team', label: 'Team', icon: Users },
  ],
}

export default function Sidebar() {
  const pathname = usePathname()
  const { user } = useUser()
  const { isCollapsed, toggle } = useSidebarStore()

  return (
    <div className={cn(
      "bg-background/80 backdrop-blur-xl border-r border-secondary/10 h-full shadow-xl shadow-secondary/5 fixed top-0 left-0 z-40 flex flex-col transition-all duration-300",
      isCollapsed ? "w-[70px]" : "w-64"
    )}>
      {/* Logo */}
      <div className="flex items-center justify-center p-6 relative">
        <Link href="/" className="text-xl font-bold">
          {isCollapsed ? (
            <span className="text-2xl font-bold text-[#725CAD]">O</span>
          ) : (
            <span className="inline-block bg-[linear-gradient(45deg,#8CCDEB,#725CAD)] bg-clip-text text-transparent hover:opacity-90 transition-opacity">
              OptiPrompt
            </span>
          )}
        </Link>
        <Button
          variant="outline"
          size="sm"
          className="absolute -right-4 top-6 h-8 w-8 rounded-full border shadow-md p-0"
          onClick={toggle}
        >
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-6 px-3">
        {Object.entries(navItems).map(([category, items]) => (
          <div key={category} className="space-y-3">
            {!isCollapsed && (
              <h4 className="px-4 text-[11px] font-semibold text-foreground/50 uppercase tracking-wider mb-1 mt-2">
                {category}
              </h4>
            )}
            {items.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-2 px-3 py-1.5 rounded-md transition-all duration-200 text-[13px]",
                    isActive 
                      ? "bg-gradient-to-r from-[#725CAD]/10 to-[#8CCDEB]/20 text-[#725CAD] border border-[#725CAD]/20" 
                      : "text-foreground/70 hover:text-foreground hover:bg-gradient-to-r hover:from-[#725CAD]/5 hover:to-[#8CCDEB]/10",
                    isCollapsed && "justify-center px-2"
                  )}
                  title={isCollapsed ? item.label : undefined}
                >
                  <Icon className={cn(
                    "size-4",
                    isActive ? "text-[#725CAD]" : "text-foreground/70"
                  )} />
                  {!isCollapsed && <span>{item.label}</span>}
                </Link>
              )
            })}
          </div>
        ))}
      </nav>

      {/* Profile Section */}
      <div className={cn(
        "p-4 mt-auto border-t border-secondary/10",
        isCollapsed ? "flex justify-center" : "space-y-1"
      )}>
        <Link
          href="/settings"
          className={cn(
            "flex items-center rounded-lg transition-all duration-200",
            isCollapsed ? "justify-center p-2" : "space-x-3 p-2",
            pathname === '/settings'
              ? "bg-[linear-gradient(45deg,#725CAD,#8CCDEB)] text-white"
              : "hover:bg-accent/10"
          )}
        >
          <UserAvatar />
          {!isCollapsed && (
            <div className="flex flex-col">
              <span className="text-xs font-medium">{user?.fullName || "Loading..."}</span>
              <span className="text-[11px] text-foreground/60">View Profile</span>
            </div>
          )}
        </Link>
      </div>
    </div>
  )
}