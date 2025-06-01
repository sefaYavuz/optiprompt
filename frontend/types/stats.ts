export interface DashboardStats {
  totalRequests: number
  totalCost: number
  cacheHitRate: {
    exact: number
    semantic: number
  }
  costPerModel: {
    modelName: string
    cost: number
    requests: number
  }[]
  estimatedSavings: number
}