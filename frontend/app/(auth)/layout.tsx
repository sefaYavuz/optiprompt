import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import ClientLayout from "./client-layout"

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { userId } = await auth()
  
  if (!userId) {
    redirect("/auth/sign-in?redirect_url=/dashboard")
  }

  return <ClientLayout>{children}</ClientLayout>
}
