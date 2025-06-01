export interface Log {
  id: string
  timestamp: string
  prompt: string
  model: string
  tokens: number
  cost: number
  cacheHit: boolean
}

export interface LogsResponse {
  logs: Log[]
  total: number
  page: number
  pageSize: number
}