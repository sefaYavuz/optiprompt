'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ApiKeySection } from "@/components/settings/ApiKeySection"
import { CacheSettings } from "@/components/settings/CacheSettings"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import { useQuery } from "@tanstack/react-query"

interface Settings {
  semanticCacheEnabled: boolean
  cacheTTL: number
  apiKey: string
}

export default function SettingsPage() {
  const { data: settings, isLoading, isError } = useQuery<Settings>({
    queryKey: ['settings'],
    queryFn: async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/settings`)
      if (!res.ok) throw new Error('Failed to fetch settings')
      return res.json()
    }
  })

  if (isError) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          Failed to load settings. Please try again later.
        </AlertDescription>
      </Alert>
    )
  }

  if (isLoading) {
    return <SettingsSkeleton />
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>
      
      <div className="grid gap-6">
        <ApiKeySection apiKey={settings?.apiKey} />
        <CacheSettings
          semanticCacheEnabled={settings?.semanticCacheEnabled}
          cacheTTL={settings?.cacheTTL}
        />
      </div>
    </div>
  )
}

function SettingsSkeleton() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-8 w-32" />
      <div className="grid gap-6">
        {Array(2).fill(null).map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <Skeleton className="h-5 w-40" />
              <Skeleton className="h-4 w-64" />
            </CardHeader>
            <CardContent className="space-y-4">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}