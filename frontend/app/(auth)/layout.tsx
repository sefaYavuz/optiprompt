import Sidebar from "@/components/auth/Sidebar"
import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { userId } = auth()
  
  if (!userId) {
    redirect("/auth/sign-in?redirect_url=/dashboard")
  }


  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  )
}
