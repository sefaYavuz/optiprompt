'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { useQuery } from '@tanstack/react-query'

export function UsageChart() {
  const { data, isLoading } = useQuery({
    queryKey: ['usage'],
    queryFn: async () => {
      const res = await fetch('http://localhost:4000/usage')
      return res.json()
    }
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="requests" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}