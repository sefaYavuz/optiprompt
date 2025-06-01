import { useQuery } from '@tanstack/react-query'
import type { LogsResponse } from '@/types/logs'

interface UseLogsParams {
  page: number
  pageSize: number
  model?: string
  cacheHit?: boolean
}

export function useLogs({ page, pageSize, model, cacheHit }: UseLogsParams) {
  return useQuery<LogsResponse>({
    queryKey: ['logs', { page, pageSize, model, cacheHit }],
    queryFn: async () => {
      const params = new URLSearchParams({
        page: String(page),
        pageSize: String(pageSize),
        ...(model && { model }),
        ...(cacheHit !== undefined && { cacheHit: String(cacheHit) })
      })

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/logs?${params}`)
      if (!res.ok) throw new Error('Failed to fetch logs')
      return res.json()
    }
  })
}