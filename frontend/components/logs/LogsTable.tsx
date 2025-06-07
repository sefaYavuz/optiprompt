'use client'

import { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useLogs } from '@/hooks/useLogs'
import type { Log } from '@/types/logs'
import { Card } from "@/components/ui/card"
import { formatDistanceToNow } from "date-fns"

export function LogsTable() {
  const [page, setPage] = useState(1)
  const [pageSize] = useState(10)
  const [model, setModel] = useState<string>()
  const [cacheHit, setCacheHit] = useState<boolean | undefined>()

  const { data, isLoading, isError } = useLogs({
    page,
    pageSize,
    model,
    cacheHit,
  })

  if (isError) {
    return <div>Failed to load logs</div>
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <Select value={model ?? "all"} onValueChange={setModel}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by model" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Models</SelectItem>
            <SelectItem value="gpt-4">GPT-4</SelectItem>
            <SelectItem value="gpt-3.5-turbo">GPT-3.5</SelectItem>
            <SelectItem value="claude-2">Claude 2</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={cacheHit === undefined ? "all" : cacheHit ? "hit" : "miss"}
          onValueChange={(value) => {
            switch (value) {
              case "hit":
                setCacheHit(true)
                break
              case "miss":
                setCacheHit(false)
                break
              default:
                setCacheHit(undefined)
            }
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Cache status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="hit">Cache Hit</SelectItem>
            <SelectItem value="miss">Cache Miss</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-md border">
        <Card className="relative overflow-hidden">
          <div className="relative overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-secondary/20">
                  <TableHead className="text-accent">Timestamp</TableHead>
                  <TableHead className="text-accent">Model</TableHead>
                  <TableHead className="text-accent">Tokens</TableHead>
                  <TableHead className="text-accent">Cost</TableHead>
                  <TableHead className="text-accent">Cache</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  Array(pageSize).fill(null).map((_, i) => (
                    <TableRow key={i}>
                      <TableCell colSpan={6}>
                        <Skeleton className="h-6" />
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  data?.logs.map((log: Log) => (
                    <TableRow key={log.id} className="border-secondary/10 hover:bg-secondary/5">
                      <TableCell className="text-secondary">
                        {formatDistanceToNow(new Date(log.timestamp), { addSuffix: true })}
                      </TableCell>
                      <TableCell className="text-primary">{log.model}</TableCell>
                      <TableCell className="text-accent">{log.tokens.toLocaleString()}</TableCell>
                      <TableCell className="text-warning">${log.cost.toFixed(4)}</TableCell>
                      <TableCell>
                        {log.cacheHit ? (
                          <Badge variant="secondary" className="bg-accent/10 text-accent">
                            Cache Hit
                          </Badge>
                        ) : log.cache === 'semantic-hit' ? (
                          <Badge variant="secondary" className="bg-primary/10 text-primary">
                            Semantic Hit
                          </Badge>
                        ) : (
                          <Badge variant="secondary" className="bg-secondary/10 text-secondary">
                            Cache Miss
                          </Badge>
                        )}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </Card>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Showing {data?.logs.length ?? 0} of {data?.total ?? 0} results
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1 || isLoading}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage(p => p + 1)}
            disabled={!data || data.logs.length < pageSize || isLoading}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}