import type { EpisodeDetail, TitleDetail } from '../types'

export function formatRuntime(minutes: number): string {
  const hours = Math.floor(minutes / 60)
  const rest = minutes % 60
  if (hours === 0) return `${rest}m`
  if (rest === 0) return `${hours}h`
  return `${hours}h ${rest}m`
}

export function seriesWatchStats(episodes: EpisodeDetail[]) {
  const count = episodes.length
  const total = episodes.reduce((sum, episode) => sum + episode.runtimeMinutes, 0)
  const average = Math.round(total / count)
  return { count, average, total }
}

export function runtimeMeta(detail: TitleDetail | undefined): string[] {
  if (!detail) return []
  if (detail.episodes && detail.episodes.length > 0) {
    const stats = seriesWatchStats(detail.episodes)
    const noun = stats.count === 1 ? 'episode' : 'episodes'
    return [
      `${stats.count} ${noun}`,
      `${formatRuntime(stats.average)} avg`,
      formatRuntime(stats.total),
    ]
  }
  if (detail.runtimeMinutes) return [formatRuntime(detail.runtimeMinutes)]
  return []
}
