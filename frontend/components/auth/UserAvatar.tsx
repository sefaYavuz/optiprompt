"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useUser } from "@clerk/nextjs"

export function UserAvatar() {
  const { user } = useUser()
  
  const initials = user?.firstName && user?.lastName
    ? `${user.firstName[0]}${user.lastName[0]}`.toUpperCase()
    : user?.firstName
      ? user.firstName[0].toUpperCase()
      : "?"

  return (
    <Avatar className="h-8 w-8">
      <AvatarImage src={user?.imageUrl} alt={user?.fullName || "User"} />
      <AvatarFallback className="bg-accent/10 text-accent text-xs">{initials}</AvatarFallback>
    </Avatar>
  )
}
