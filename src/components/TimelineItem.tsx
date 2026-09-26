import { useState } from 'react'
import type { CatalogEntry } from '../types'
import { KIND_LABEL, releaseYear } from '../types'

type TimelineItemProps = {
  entry: CatalogEntry
  checked: boolean
  pending: boolean
  onToggle: (id: string) => void
}

export function TimelineItem({
  entry,
  checked,
  pending,
  onToggle,
}: TimelineItemProps) {
  const locked = entry.upcoming || pending
  const [posterFailed, setPosterFailed] = useState(false)
  const showPoster = Boolean(entry.poster) && !posterFailed
  const action = checked
    ? `Mark ${entry.title} unwatched`
    : `Mark ${entry.title} watched`

  return (
    <li className={pending ? 'entry is-leaving' : 'entry'}>
      <div className="entry-clip">
        <article
          className={checked && !pending ? 'card is-watched' : 'card'}
          data-phase={entry.phase}
          data-id={entry.id}
          data-upcoming={entry.upcoming ? 'true' : 'false'}
        >
          <span className="node" data-phase={entry.phase} aria-hidden="true" />
          <button
            type="button"
            className={checked ? 'poster-button is-checked' : 'poster-button'}
            disabled={locked}
            aria-pressed={checked}
            aria-label={action}
            onClick={() => onToggle(entry.id)}
          >
            {showPoster ? (
              <img
                className="poster"
                src={entry.poster}
                alt=""
                width={76}
                height={114}
                loading="lazy"
                decoding="async"
                onError={() => setPosterFailed(true)}
              />
            ) : (
              <span className="poster poster-fallback" aria-hidden="true">
                {KIND_LABEL[entry.kind]}
              </span>
            )}
            <span className="poster-check" aria-hidden="true">
              <svg viewBox="0 0 16 16" width="12" height="12">
                <path
                  d="M3.2 8.4 6.3 11.6 12.8 4.4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="poster-clear" aria-hidden="true">
              <svg viewBox="0 0 16 16" width="12" height="12">
                <path
                  d="M4.2 4.2 11.8 11.8M11.8 4.2 4.2 11.8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </button>
          <div className="card-main">
            <div className="card-body">
              <div className="card-heading">
                <h3>{entry.title}</h3>
                <div className="badges">
                  {entry.multiverse && <span className="badge">Multiverse</span>}
                  {entry.upcoming && <span className="badge badge-upcoming">Upcoming</span>}
                </div>
              </div>
              <p className="meta">
                <span>{KIND_LABEL[entry.kind]}</span>
                <span>Phase {entry.phase}</span>
                <span>{releaseYear(entry.releaseDate)}</span>
                <span>{entry.era}</span>
              </p>
            </div>
          </div>
        </article>
      </div>
    </li>
  )
}
