export type Kind = 'movie' | 'series' | 'special' | 'one-shot'

export type Saga = 'infinity' | 'multiverse'

export type Phase = 1 | 2 | 3 | 4 | 5 | 6

export type Order = 'chrono' | 'release'

export interface CatalogEntry {
  id: string
  title: string
  kind: Kind
  phase: Phase
  saga: Saga
  releaseDate: string
  chronoOrder: number
  era: string
  multiverse?: boolean
  upcoming?: boolean
}

export const KINDS: Kind[] = ['movie', 'series', 'special', 'one-shot']

export const KIND_LABEL: Record<Kind, string> = {
  movie: 'Movie',
  series: 'Series',
  special: 'Special',
  'one-shot': 'One-Shot',
}

export const SAGA_LABEL: Record<Saga, string> = {
  infinity: 'Infinity Saga',
  multiverse: 'Multiverse Saga',
}

export function releaseYear(isoDate: string): string {
  return isoDate.slice(0, 4)
}
