'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { useStats } from "@/hooks/useStats"
import { AlertCircle, Database, Zap, DollarSign, ArrowUpRight } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { cn } from "@/lib/utils"

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
      color: "text-[#725CAD]",
      bgColor: "bg-[#725CAD]/10"
    },
    {
      title: "Cache Hit Rate",
      value: `${data?.cacheHitRate.exact.toFixed(1)}% / ${data?.cacheHitRate.semantic.toFixed(1)}%`,
      subtitle: "Exact / Semantic",
      icon: Database,
      color: "text-[#8CCDEB]",
      bgColor: "bg-[#8CCDEB]/10"
    },
    {
      title: "Total Cost",
      value: `$${data?.totalCost.toFixed(2)}`,
      icon: DollarSign,
      color: "text-[#FF8C42]",
      bgColor: "bg-[#FF8C42]/10"
    },
    {
      title: "Estimated Savings",
      value: `$${data?.estimatedSavings.toFixed(2)}`,
      icon: ArrowUpRight,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      positive: true,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="relative overflow-hidden">
          <div className={cn("absolute inset-0 opacity-20", stat.bgColor)} />
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative">
            <CardTitle className={cn("text-sm font-medium", stat.color)}>
              {stat.title}
            </CardTitle>
            <div className={cn("p-2 rounded-full", stat.bgColor)}>
              <stat.icon className={cn("h-4 w-4", stat.color)} />
            </div>
          </CardHeader>
          <CardContent className="relative">
            <div className={cn("text-2xl font-bold", stat.color)}>{stat.value}</div>
            {stat.subtitle && (
              <p className={cn("text-xs", stat.color, "opacity-80")}>
                {stat.subtitle}
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}