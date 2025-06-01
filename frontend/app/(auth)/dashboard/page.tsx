import { StatsGrid } from '@/components/StatsGrid'
import { UsageChart } from '@/components/charts/UsageChart'
import { ModelDistribution } from '@/components/charts/ModelDistribution'
import { Skeleton } from '@/components/ui/skeleton'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertCircle } from 'lucide-react'

export default function Dashboard() {
  const isError = false // Replace with actual error state
  const isLoading = false // Replace with actual loading state

  if (isError) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Failed to load dashboard data. Please try again later.
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array(4).fill(null).map((_, i) => (
            <div key={i} className="p-4 space-y-4">
              <Skeleton className="h-4 w-[150px]" />
              <Skeleton className="h-8 w-[100px]" />
            </div>
          ))}
        </div>
      ) : (
        <StatsGrid />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {isLoading ? (
          <>
            <Skeleton className="col-span-2 h-[400px]" />
            <Skeleton className="h-[400px]" />
          </>
        ) : (
          <>
            <UsageChart />
            <ModelDistribution />
          </>
        )}
      </div>
    </div>
  )
}