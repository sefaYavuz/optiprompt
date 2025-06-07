import { useQuery } from '@tanstack/react-query'
import type { DashboardStats } from '@/types/stats'

// Dummy data for development
const DUMMY_STATS: DashboardStats = {
  totalRequests: 124892,
  cacheHitRate: {
    exact: 45.8,
    semantic: 27.4
  },
  totalCost: 1243.50,
  estimatedSavings: 892.65,
  usageData: Array.from({ length: 14 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (13 - i));
    return {
      timestamp: date.toISOString().split('T')[0],
      requests: 10000 + Math.floor(Math.random() * 5000),
      cost: 100 + Math.random() * 50,
      savings: 70 + Math.random() * 30
    };
  }),
  modelDistribution: [
    { name: "GPT-4", requests: 45892, percentage: 36.7 },
    { name: "GPT-3.5", requests: 52340, percentage: 41.9 },
    { name: "Claude-3", requests: 18735, percentage: 15.0 },
    { name: "Other", requests: 7925, percentage: 6.4 }
  ],
  costPerModel: [
    { modelName: "GPT-4", cost: 823.50, requests: 45892 },
    { modelName: "GPT-3.5", cost: 261.70, requests: 52340 },
    { modelName: "Claude-3", cost: 131.15, requests: 18735 },
    { modelName: "Other", cost: 27.15, requests: 7925 }
  ]
}

export function useStats() {
  return useQuery<DashboardStats>({
    queryKey: ['dashboard-stats'],
    queryFn: async () => {
      // In development, return dummy data
      if (process.env.NODE_ENV === 'development') {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500));
        return DUMMY_STATS;
      }
      
      // In production, fetch from API
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/stats`)
      if (!res.ok) throw new Error('Failed to fetch stats')
      return res.json()
    }
  })
}