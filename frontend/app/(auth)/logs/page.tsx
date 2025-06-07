import { Suspense } from 'react'
import { LogsTable } from '@/components/logs/LogsTable'
import { Skeleton } from '@/components/ui/skeleton'

export default function LogsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Request Logs</h1>
      
      <Suspense fallback={<Skeleton className="h-[400px]" />}>
        <LogsTable />
      </Suspense>
    </div>
  )
}