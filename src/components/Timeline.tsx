import { useEffect, useRef, useState } from 'react'
import type { CatalogEntry, Order } from '../types'
import { SAGA_LABEL } from '../types'
import { TimelineItem } from './TimelineItem'

type TimelineProps = {
  entries: CatalogEntry[]
  order: Order
  watchedIds: ReadonlySet<string>
  showWatched: boolean
  onToggle: (id: string) => void
  empty: 'filters' | 'caught-up' | null
}

const COLLAPSE_MS = 280

export function Timeline({
  entries,
  order,
  watchedIds,
  showWatched,
  onToggle,
  empty,
}: TimelineProps) {
  const [leaving, setLeaving] = useState<Set<string>>(() => new Set())
  const leavingRef = useRef<Set<string>>(new Set())
  const timers = useRef<number[]>([])

  useEffect(() => {
    const pending = timers.current
    return () => {
      for (const timer of pending) window.clearTimeout(timer)
    }
  }, [])

  function handleToggle(id: string) {
    if (leavingRef.current.has(id)) return
    const entry = entries.find((item) => item.id === id)
    if (!entry || entry.upcoming) return

    const willLeave =
      !watchedIds.has(id) &&
      !showWatched &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!willLeave) {
      onToggle(id)
      return
    }

    leavingRef.current.add(id)
    setLeaving(new Set(leavingRef.current))
    const timer = window.setTimeout(() => {
      onToggle(id)
      leavingRef.current.delete(id)
      setLeaving(new Set(leavingRef.current))
    }, COLLAPSE_MS)
    timers.current.push(timer)
  }

  const sections = groupEntries(entries, order)

  return (
    <div className="timeline-wrap">
      {empty === 'filters' && (
        <p className="empty">Nothing matches these filters.</p>
      )}
      {empty === 'caught-up' && (
        <p className="empty">You’re caught up. Every released title is off your watchlist.</p>
      )}
      {sections.length > 0 && (
        <div className="timeline">
          {sections.map((section, index) => (
            <section key={`${section.label}-${index}`} className="era-block">
              <h2 className="era">
                {section.label}
                {section.detail && <span>{section.detail}</span>}
              </h2>
              <ol className="entries">
                {section.items.map((entry) => (
                  <TimelineItem
                    key={entry.id}
                    entry={entry}
                    checked={watchedIds.has(entry.id) || leaving.has(entry.id)}
                    pending={leaving.has(entry.id)}
                    onToggle={handleToggle}
                  />
                ))}
              </ol>
            </section>
          ))}
        </div>
      )}
    </div>
  )
}

function groupEntries(entries: CatalogEntry[], order: Order) {
  const sections: { label: string; detail?: string; items: CatalogEntry[] }[] = []

  for (const entry of entries) {
    const label = order === 'release' ? `Phase ${entry.phase}` : entry.era
    const detail = order === 'release' ? SAGA_LABEL[entry.saga] : undefined
    const last = sections.at(-1)
    if (last && last.label === label) last.items.push(entry)
    else sections.push({ label, detail, items: [entry] })
  }

  return sections
}
