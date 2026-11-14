import { useEffect, useRef, useState } from 'react'
import { details } from '../data/details'
import { formatRuntime, runtimeMeta } from '../data/runtime'
import type { CatalogEntry } from '../types'
import { KIND_LABEL, releaseYear } from '../types'

type TitleDialogProps = {
  entry: CatalogEntry | null
  onClose: () => void
}

export function TitleDialog({ entry, onClose }: TitleDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const onCloseRef = useRef(onClose)
  const [failedPosterId, setFailedPosterId] = useState<string | null>(null)

  useEffect(() => {
    onCloseRef.current = onClose
  }, [onClose])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (entry && !dialog.open) dialog.showModal()
    if (!entry && dialog.open) dialog.close()
  }, [entry])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    const handleClose = () => onCloseRef.current()
    dialog.addEventListener('close', handleClose)
    return () => dialog.removeEventListener('close', handleClose)
  }, [])

  useEffect(() => {
    const scroller = dialogRef.current?.querySelector('.details-scroll')
    if (scroller instanceof HTMLElement) scroller.scrollTop = 0
  }, [entry?.id])

  const detail = entry ? details[entry.id] : undefined
  const meta = runtimeMeta(detail)
  const episodes = detail?.episodes ?? []
  const showPoster = Boolean(entry?.poster) && failedPosterId !== entry?.id

  return (
    <dialog
      ref={dialogRef}
      className="details-dialog"
      aria-labelledby={entry ? 'details-title' : undefined}
      onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close()
      }}
    >
      {entry && (
        <div className="details-panel">
          <button
            type="button"
            className="details-close"
            onClick={() => dialogRef.current?.close()}
          >
            Close
          </button>
          <div className="details-scroll">
            <div className="details-hero">
              {showPoster ? (
                <img
                  className="details-poster"
                  src={entry.poster}
                  alt=""
                  onError={() => setFailedPosterId(entry.id)}
                />
              ) : (
                <span className="details-poster details-poster-fallback">
                  {KIND_LABEL[entry.kind]}
                </span>
              )}
              <div className="details-copy">
                <p className="kicker">{KIND_LABEL[entry.kind]}</p>
                <h2 id="details-title">{entry.title}</h2>
                <p className="meta">
                  <span>Phase {entry.phase}</span>
                  <span>{releaseYear(entry.releaseDate)}</span>
                  <span>{entry.era}</span>
                  {meta.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </p>
                {entry.upcoming && (
                  <p className="badges">
                    <span className="badge badge-upcoming">Upcoming</span>
                  </p>
                )}
                {detail?.synopsis && (
                  <p className="details-synopsis">{detail.synopsis}</p>
                )}
              </div>
            </div>
            {episodes.length > 0 && (
              <section className="episode-section" aria-labelledby="episode-heading">
                <h3 id="episode-heading">Episodes</h3>
                <ol className="episode-list">
                  {episodes.map((episode, index) => (
                    <li key={`${episode.name}-${index}`}>
                      <article
                        className="card episode-card"
                        data-phase={entry.phase}
                        data-kind={entry.kind}
                      >
                        <span className="episode-index" aria-hidden="true">
                          {index + 1}
                        </span>
                        <div className="card-main">
                          <h4>{episode.name}</h4>
                          <p className="meta">
                            <span>{formatRuntime(episode.runtimeMinutes)}</span>
                          </p>
                          <p className="episode-synopsis">{episode.synopsis}</p>
                        </div>
                      </article>
                    </li>
                  ))}
                </ol>
              </section>
            )}
          </div>
        </div>
      )}
    </dialog>
  )
}
