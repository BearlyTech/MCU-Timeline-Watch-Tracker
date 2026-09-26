import { useEffect, useState } from 'react'

const STORAGE_KEY = 'mcu-watchlist'

function readWatched(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return new Set()
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) return new Set()
    return new Set(parsed.filter((id): id is string => typeof id === 'string'))
  } catch {
    return new Set()
  }
}

export function useWatchlist() {
  const [watchedIds, setWatchedIds] = useState<Set<string>>(readWatched)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...watchedIds]))
  }, [watchedIds])

  function toggle(id: string) {
    setWatchedIds((current) => {
      const next = new Set(current)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  function reset() {
    setWatchedIds(new Set())
  }

  return { watchedIds, toggle, reset }
}
