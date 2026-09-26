import type { Kind, Order } from '../types'
import { KIND_LABEL, KINDS } from '../types'

type ToolbarProps = {
  order: Order
  onOrder: (order: Order) => void
  kinds: ReadonlySet<Kind>
  onToggleKind: (kind: Kind) => void
  query: string
  onQuery: (value: string) => void
  showWatched: boolean
  onShowWatched: (value: boolean) => void
  watchedCount: number
  releasedCount: number
  onReset: () => void
}

export function Toolbar({
  order,
  onOrder,
  kinds,
  onToggleKind,
  query,
  onQuery,
  showWatched,
  onShowWatched,
  watchedCount,
  releasedCount,
  onReset,
}: ToolbarProps) {
  const remaining = releasedCount - watchedCount
  const progress = releasedCount === 0 ? 0 : (watchedCount / releasedCount) * 100

  return (
    <div className="toolbar">
      <div className="toolbar-top">
        <div
          className="segment"
          role="group"
          aria-label="Timeline order"
        >
          <button
            type="button"
            aria-pressed={order === 'chrono'}
            onClick={() => onOrder('chrono')}
          >
            Chronological
          </button>
          <button
            type="button"
            aria-pressed={order === 'release'}
            onClick={() => onOrder('release')}
          >
            Release
          </button>
        </div>

        <label className="search">
          <span>Search</span>
          <input
            type="search"
            value={query}
            placeholder="Find a title"
            onChange={(event) => onQuery(event.target.value)}
          />
        </label>
      </div>

      <div className="toolbar-filters">
        <div className="chips" role="group" aria-label="Filter by kind">
          {KINDS.map((kind) => (
            <button
              key={kind}
              type="button"
              className="chip"
              aria-pressed={kinds.has(kind)}
              onClick={() => onToggleKind(kind)}
            >
              {KIND_LABEL[kind]}
            </button>
          ))}
        </div>

        <label className="show-watched">
          <input
            type="checkbox"
            checked={showWatched}
            onChange={(event) => onShowWatched(event.target.checked)}
          />
          Show watched
        </label>
      </div>

      <div className="progress-block">
        <div className="progress-copy">
          <p aria-live="polite">
            <strong>{remaining}</strong> left on your watchlist
            <span>
              {watchedCount} of {releasedCount} watched
            </span>
          </p>
          <button
            type="button"
            className="reset"
            onClick={onReset}
            disabled={watchedCount === 0}
          >
            Reset progress
          </button>
        </div>
        <div
          className="progress-track"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={releasedCount}
          aria-valuenow={watchedCount}
          aria-label="Watched titles"
        >
          <span style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  )
}
