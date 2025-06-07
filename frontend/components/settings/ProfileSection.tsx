"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar } from "@/components/ui/avatar"
import { useState } from "react"

export function ProfileSection() {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john@example.com",
    company: "Acme Inc",
    role: "Developer"
  })

  const handleSave = () => {
    // TODO: Implement save functionality
    setIsEditing(false)
  }

  return (
    <Card className="p-6">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="h-20 w-20" />
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-1">Profile</h2>
            <p className="text-muted-foreground">
              Manage your account settings and preferences
            </p>
          </div>
        </div>
        <Button
          variant={isEditing ? "outline" : "default"}
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? "Cancel" : "Edit Profile"}
        </Button>
      </div>

      <div className="mt-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              disabled={!isEditing}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              disabled={!isEditing}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              disabled={!isEditing}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role">Role</Label>
            <Input
              id="role"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              disabled={!isEditing}
            />
          </div>
        </div>

        {isEditing && (
          <div className="flex justify-end">
            <Button onClick={handleSave} className="bg-accent text-white hover:bg-accent/90">
              Save Changes
            </Button>
          </div>
        )}
      </div>
    </Card>
  )
}
