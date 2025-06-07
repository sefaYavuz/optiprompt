"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useStats } from "@/hooks/useStats";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

export function UsageChart() {
  const { data: stats, isLoading, isError } = useStats();

  if (isError) {
    return (
      <Card className="col-span-2">
        <CardContent className="pt-6">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Failed to load usage data. Please try again later.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    );
  }

  if (isLoading) {
    return (
      <Card className="col-span-2">
        <CardHeader>
          <Skeleton className="h-6 w-[180px]" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-[350px] w-full" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Usage & Cost Over Time</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={stats?.usageData}
              margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorRequests" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="#725CAD"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="#725CAD"
                    stopOpacity={0}
                  />
                </linearGradient>
                <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="#8CCDEB"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="#8CCDEB"
                    stopOpacity={0}
                  />
                </linearGradient>
                <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="#FF8C42"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="#FF8C42"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(0,0,0,0.05)"
              />
              <XAxis
                dataKey="timestamp"
                stroke="#888888"
                tickFormatter={(value) =>
                  new Date(value).toLocaleDateString()
                }
              />
              <YAxis
                stroke="#888888"
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  border: "1px solid #e2e8f0",
                  borderRadius: "6px",
                }}
                labelFormatter={(value) =>
                  new Date(value).toLocaleDateString()
                }
                formatter={(value: number) => [`$${value.toFixed(2)}`, "Amount"]}
              />
              <Area
                type="monotone"
                dataKey="requests"
                stroke="#725CAD"
                fillOpacity={1}
                fill="url(#colorRequests)"
                name="Requests"
              />
              <Area
                type="monotone"
                dataKey="cost"
                stroke="#8CCDEB"
                fillOpacity={1}
                fill="url(#colorCost)"
                name="Cost"
              />
              <Area
                type="monotone"
                dataKey="savings"
                stroke="#FF8C42"
                fillOpacity={1}
                fill="url(#colorSavings)"
                name="Savings"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}