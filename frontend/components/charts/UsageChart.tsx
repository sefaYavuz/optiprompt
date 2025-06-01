'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { useQuery } from '@tanstack/react-query'

interface UsageData {
  timestamp: string
  requests: number
  cost: number
  savings: number
}

export function UsageChart() {
  const { data, isLoading, isError } = useQuery<UsageData[]>({
    queryKey: ['usage-stats'],
    queryFn: async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/stats/usage`)
      if (!res.ok) throw new Error('Failed to fetch usage stats')
      return res.json()
    }
  })

  if (isError) {
    return (
      <Card className="col-span-2">
        <CardContent className="pt-6">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Failed to load usage data. Please try again later.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    )
  }

  if (isLoading) {
    return (
      <Card className="col-span-2">
        <CardHeader>
          <Skeleton className="h-6 w-[200px]" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-[350px] w-full" />
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Usage & Savings Over Time</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="timestamp" 
                tickFormatter={(value) => new Date(value).toLocaleDateString()}
              />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip 
                labelFormatter={(value) => new Date(value).toLocaleDateString()}
                formatter={(value: number) => [`$${value.toFixed(2)}`, '']}
              />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="requests"
                stroke="#8884d8"
                name="Requests"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="cost"
                stroke="#82ca9d"
                name="Cost ($)"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="savings"
                stroke="#ffc658"
                name="Savings ($)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}