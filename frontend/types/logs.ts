export interface Log {
  id: string
  timestamp: string
  model: string
  tokens: number
  cost: number
  cache: 'hit' | 'miss' | 'semantic-hit'
  prompt?: string
  response?: string
}

export interface LogsResponse {
  logs: Log[]
  total: number
  page: number
  pageSize: number
}