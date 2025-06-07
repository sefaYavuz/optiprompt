export interface UsageData {
  timestamp: string
  requests: number
  cost: number
  savings: number
}

export interface ModelDistribution {
  name: string
  requests: number
  percentage: number
}

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
  usageData: UsageData[]
  modelDistribution: ModelDistribution[]
}