import { useState } from 'react'
import { catalog } from '../data/catalog'
import { details } from '../data/details'
import { runtimeMeta } from '../data/runtime'
import type { CatalogEntry } from '../types'
import { KIND_LABEL, releaseYear } from '../types'

const catalogById = new Map(catalog.map((item) => [item.id, item]))

function requiredEntries(entry: CatalogEntry): CatalogEntry[] {
  if (!entry.requires?.length) return []
  return entry.requires
    .flatMap((id) => {
      const required = catalogById.get(id)
      return required ? [required] : []
    })
    .sort((a, b) => a.releaseDate.localeCompare(b.releaseDate))
}

export type Spotlight = 'hit' | 'source' | 'dim' | null

type TimelineItemProps = {
  entry: CatalogEntry
  checked: boolean
  pending: boolean
  spotlight: Spotlight
  onToggle: (id: string) => void
  onOpen: (id: string) => void
  onFocusRequired: () => void
}

export function TimelineItem({
  entry,
  checked,
  pending,
  spotlight,
  onToggle,
  onOpen,
  onFocusRequired,
}: TimelineItemProps) {
  const locked = entry.upcoming || pending
  const required = requiredEntries(entry)
  const runtimes = runtimeMeta(details[entry.id])
  const spotlighting = spotlight === 'source'
  const [posterFailed, setPosterFailed] = useState(false)
  const showPoster = Boolean(entry.poster) && !posterFailed
  const action = checked
    ? `Mark ${entry.title} unwatched`
    : `Mark ${entry.title} watched`

  return (
    <li
      className={[
        'entry',
        pending ? 'is-leaving' : '',
        spotlight ? `is-${spotlight}` : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="entry-clip">
        <article
          className={checked && !pending ? 'card is-watched' : 'card'}
          data-phase={entry.phase}
          data-kind={entry.kind}
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
              <button
                type="button"
                className="details-open"
                onClick={() => onOpen(entry.id)}
              >
                <div className="card-heading">
                  <h3>{entry.title}</h3>
                  <div className="badges">
                    {entry.multiverse && <span className="badge">Multiverse</span>}
                    {entry.upcoming && <span className="badge badge-upcoming">Upcoming</span>}
                  </div>
                </div>
                <p className="meta">
                  <span className="kind" data-kind={entry.kind}>
                    {KIND_LABEL[entry.kind]}
                  </span>
                  <span>Phase {entry.phase}</span>
                  <span>{releaseYear(entry.releaseDate)}</span>
                  <span>{entry.era}</span>
                  {runtimes.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </p>
              </button>
              {required.length > 0 && (
                <p className="required">
                  <button
                    type="button"
                    className="required-toggle"
                    aria-pressed={spotlighting}
                    aria-label={
                      spotlighting
                        ? `Hide titles required before ${entry.title}`
                        : `Show titles required before ${entry.title}`
                    }
                    onClick={onFocusRequired}
                  >
                    Required:
                  </button>
                  {required.map((item) => item.title).join(', ')}
                </p>
              )}
            </div>
          </div>
        </article>
      </div>
    </li>
  )
}
