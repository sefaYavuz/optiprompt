'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import { useQuery } from '@tanstack/react-query'

const mockData = [
  { name: 'GPT-4', value: 400 },
  { name: 'GPT-3.5', value: 300 },
  { name: 'Claude', value: 200 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28']

export function ModelDistribution() {
  const { data = mockData } = useQuery({
    queryKey: ['model-distribution'],
    queryFn: async () => {
      const res = await fetch('http://localhost:4000/model-distribution')
      return res.json()
    },
    enabled: false // Disable for now, using mock data
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>Model Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}