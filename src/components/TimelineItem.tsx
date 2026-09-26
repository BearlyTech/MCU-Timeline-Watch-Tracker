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
          <div className="card-main">
            <label className="watch">
              <input
                type="checkbox"
                checked={checked}
                disabled={locked}
                onChange={() => onToggle(entry.id)}
              />
              <span>
                Watched
                <span className="sr-only"> {entry.title}</span>
              </span>
            </label>
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
