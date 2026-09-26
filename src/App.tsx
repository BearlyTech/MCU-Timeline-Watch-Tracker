import { useMemo, useState } from 'react'
import { catalog } from './data/catalog'
import { useWatchlist } from './hooks/useWatchlist'
import { Toolbar } from './components/Toolbar'
import { Timeline } from './components/Timeline'
import type { Kind, Order } from './types'
import { KINDS } from './types'

function sortEntries(
  entries: typeof catalog,
  order: Order,
) {
  return [...entries].sort((a, b) => {
    if (order === 'chrono') return a.chronoOrder - b.chronoOrder
    return a.releaseDate.localeCompare(b.releaseDate) || a.chronoOrder - b.chronoOrder
  })
}

export default function App() {
  const { watchedIds, toggle, reset } = useWatchlist()
  const [order, setOrder] = useState<Order>('chrono')
  const [kinds, setKinds] = useState<Set<Kind>>(() => new Set(KINDS))
  const [query, setQuery] = useState('')
  const [showWatched, setShowWatched] = useState(false)

  const released = useMemo(
    () => catalog.filter((entry) => !entry.upcoming),
    [],
  )
  const watchedCount = released.filter((entry) => watchedIds.has(entry.id)).length

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase()
    const matched = catalog.filter((entry) => {
      if (!kinds.has(entry.kind)) return false
      if (needle && !entry.title.toLowerCase().includes(needle)) return false
      return true
    })
    const shown = matched.filter(
      (entry) => entry.upcoming || showWatched || !watchedIds.has(entry.id),
    )
    return { matchedCount: matched.length, entries: sortEntries(shown, order) }
  }, [kinds, order, query, showWatched, watchedIds])

  const empty =
    visible.entries.length > 0
      ? null
      : visible.matchedCount === 0
        ? 'filters'
        : 'caught-up'

  function toggleKind(kind: Kind) {
    setKinds((current) => {
      const next = new Set(current)
      if (next.has(kind)) next.delete(kind)
      else next.add(kind)
      return next
    })
  }

  function handleReset() {
    if (watchedCount === 0) return
    if (
      window.confirm(
        'Clear watched titles and put everything back on your watchlist?',
      )
    ) {
      reset()
    }
  }

  return (
    <>
      <header className="masthead">
        <p className="kicker">Marvel Studios · Phases 1–6</p>
        <h1>MCU Timeline</h1>
        <p className="lede">
          Work through the saga in story order or release order. Check a title
          to take it off your watchlist. Progress stays in this browser.
        </p>
      </header>

      <Toolbar
        order={order}
        onOrder={setOrder}
        kinds={kinds}
        onToggleKind={toggleKind}
        query={query}
        onQuery={setQuery}
        showWatched={showWatched}
        onShowWatched={setShowWatched}
        watchedCount={watchedCount}
        releasedCount={released.length}
        onReset={handleReset}
      />

      <main>
        <Timeline
          entries={visible.entries}
          order={order}
          watchedIds={watchedIds}
          showWatched={showWatched}
          onToggle={toggle}
          empty={empty}
        />
      </main>

      <footer className="colophon">
        Chronological order follows Marvel’s public timeline. Unreleased titles
        stay on the spine and can’t be checked off.
      </footer>
    </>
  )
}
