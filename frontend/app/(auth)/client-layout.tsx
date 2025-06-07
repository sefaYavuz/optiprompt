"use client"

import Sidebar from "@/components/auth/Sidebar"
import { useSidebarStore } from "@/store/sidebar"
import { cn } from "@/lib/utils"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isCollapsed = useSidebarStore((state) => state.isCollapsed)
  
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main 
        className={cn(
          "flex-1 overflow-y-auto p-8 transition-all duration-300",
          isCollapsed ? "ml-[70px]" : "ml-64"
        )}
      >
        <div className="w-full">
          {children}
        </div>
      </main>
    </div>
  )
}
