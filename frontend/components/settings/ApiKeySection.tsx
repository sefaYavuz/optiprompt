'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RefreshCw } from "lucide-react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

interface ApiKeySectionProps {
  apiKey?: string
}

export function ApiKeySection({ apiKey }: ApiKeySectionProps) {
  const [isRevealed, setIsRevealed] = useState(false)
  const queryClient = useQueryClient()

  const { mutate: regenerateKey, isPending } = useMutation({
    mutationFn: async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/settings/regenerate-key`, {
        method: 'POST'
      })
      if (!res.ok) throw new Error('Failed to regenerate API key')
      return res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['settings'] })
      toast.success('API key regenerated successfully')
    },
    onError: () => {
      toast.error('Failed to regenerate API key')
    }
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>API Key</CardTitle>
        <CardDescription>
          Your API key for accessing the OptiPrompt API
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex space-x-2">
          <Input
            type={isRevealed ? "text" : "password"}
            value={apiKey}
            readOnly
            className="font-mono"
          />
          <Button
            variant="outline"
            onClick={() => setIsRevealed(!isRevealed)}
          >
            {isRevealed ? 'Hide' : 'Show'}
          </Button>
        </div>
        <Button
          variant="outline"
          onClick={() => regenerateKey()}
          disabled={isPending}
        >
          <RefreshCw className="mr-2 h-4 w-4" />
          Regenerate Key
        </Button>
      </CardContent>
    </Card>
  )
}