'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { useStats } from "@/hooks/useStats"
import { AlertCircle, Database, Zap, DollarSign, ArrowUpRight } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function StatsGrid() {
  const { data, isLoading, isError } = useStats()

  if (isError) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          Failed to load statistics. Please try again later.
        </AlertDescription>
      </Alert>
    )
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array(4).fill(null).map((_, i) => (
          <Card key={i}>
            <CardHeader className="space-y-0 pb-2">
              <Skeleton className="h-4 w-[100px]" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-8 w-[120px]" />
              <Skeleton className="h-4 w-[80px] mt-2" />
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  const stats = [
    {
      title: "Total Requests",
      value: data?.totalRequests.toLocaleString() || "0",
      icon: Zap,
    },
    {
      title: "Cache Hit Rate",
      value: `${data?.cacheHitRate.exact.toFixed(1)}% / ${data?.cacheHitRate.semantic.toFixed(1)}%`,
      subtitle: "Exact / Semantic",
      icon: Database,
    },
    {
      title: "Total Cost",
      value: `$${data?.totalCost.toFixed(2)}`,
      icon: DollarSign,
    },
    {
      title: "Estimated Savings",
      value: `$${data?.estimatedSavings.toFixed(2)}`,
      icon: ArrowUpRight,
      positive: true,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            {stat.subtitle && (
              <p className="text-xs text-muted-foreground">
                {stat.subtitle}
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}