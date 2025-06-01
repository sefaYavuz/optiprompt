import { useQuery } from '@tanstack/react-query'
import type { DashboardStats } from '@/types/stats'

export function useStats() {
  return useQuery<DashboardStats>({
    queryKey: ['dashboard-stats'],
    queryFn: async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/stats`)
      if (!res.ok) throw new Error('Failed to fetch stats')
      return res.json()
    }
  })
}