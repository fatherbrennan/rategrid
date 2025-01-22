import type { ApiResponse as FatherBrennanApiResponse } from '@fatherbrennan/api/dist/api';
import type { ImdbSearchItem } from '@fatherbrennan/api/dist/imdb';
import type MiniSearch from 'minisearch';
import type { SearchResult } from 'minisearch';

declare global {
  interface Window {
    minisearch?: MiniSearch<ImdbSearchItem>;
  }
}

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export type Require<T, K extends keyof T> = Pick<Required<T>, K> & Omit<T, K>;

export type ApiResponse<T> = Pick<FatherBrennanApiResponse<T>, 'data' | 'isSuccess'>;

// Needed for better typing.
export type MiniSearchSearchResult = SearchResult & ImdbSearchItem;
