'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import { useState } from "react"

interface CacheSettingsProps {
  semanticCacheEnabled?: boolean
  cacheTTL?: number
}

export function CacheSettings({ semanticCacheEnabled = false, cacheTTL = 3600 }: CacheSettingsProps) {
  const [ttl, setTtl] = useState(cacheTTL)
  const [enabled, setEnabled] = useState(semanticCacheEnabled)
  const queryClient = useQueryClient()

  const { mutate: updateSettings, isPending } = useMutation({
    mutationFn: async (data: { semanticCacheEnabled: boolean; cacheTTL: number }) => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/settings/cache`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Failed to update cache settings')
      return res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['settings'] })
      toast.success('Cache settings updated successfully')
    },
    onError: () => {
      toast.error('Failed to update cache settings')
    }
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    updateSettings({ semanticCacheEnabled: enabled, cacheTTL: ttl })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cache Settings</CardTitle>
        <CardDescription>
          Configure how OptiPrompt caches your requests
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center justify-between">
            <Label htmlFor="semantic-cache">Semantic Cache</Label>
            <Switch
              id="semantic-cache"
              checked={enabled}
              onCheckedChange={setEnabled}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="cache-ttl">Cache TTL (seconds)</Label>
            <Input
              id="cache-ttl"
              type="number"
              value={ttl}
              onChange={(e) => setTtl(Number(e.target.value))}
              min={0}
            />
          </div>

          <Button type="submit" disabled={isPending}>
            Save Changes
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}