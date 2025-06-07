'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import { useStats } from '@/hooks/useStats'
import { ModelDistribution as ModelDistributionType } from '@/types/stats'
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

const COLORS = ['#725CAD', '#8CCDEB', '#FF8C42', '#A3A3A3']

export function ModelDistribution() {
  const { data: stats, isLoading, isError } = useStats()

  if (isError) {
    return (
      <Card>
        <CardContent className="pt-6">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Failed to load model distribution. Please try again later.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    )
  }

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-[180px]" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-[300px] w-full" />
        </CardContent>
      </Card>
    )
  }

  const chartData = stats?.modelDistribution?.map((model: ModelDistributionType) => ({
    name: model.name,
    value: model.requests,
    percentage: model.percentage
  })) || []

  return (
    <Card>
      <CardHeader>
        <CardTitle>Model Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                label={({ name, percentage }) => `${name} (${percentage.toFixed(1)}%)`}
              >
                {chartData.map((_entry: unknown, index: number) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value: number) => [
                  `${value.toLocaleString()} requests`,
                  'Volume'
                ]}
                contentStyle={{
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  border: "1px solid #e2e8f0",
                  borderRadius: "6px"
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}