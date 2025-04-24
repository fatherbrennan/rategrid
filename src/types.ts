import type { QwikAttributes, PropsOf as QwikPropsOf } from '@builder.io/qwik';
import type { ImdbSearchItem, TvData } from '@fatherbrennan/api/dist/imdb';
import type MiniSearch from 'minisearch';
import type { SearchResult } from 'minisearch';

declare global {
  interface Window {
    minisearch?: MiniSearch<ImdbSearchItem>;
  }
}

export type ClassList = string | undefined | null | false;

export type PropsOf<T> = Omit<QwikPropsOf<T>, 'class'> & { class?: ClassList };

export type AttributesOf<T extends Element> = Omit<QwikAttributes<T>, 'class'> & { class?: ClassList };

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export type Require<T, K extends keyof T> = Pick<Required<T>, K> & Omit<T, K>;

export type TvSeriesDictionary = Record<ImdbSearchItem[typeof TvData.tconst], ImdbSearchItem>;

// Needed for better typing.
export type MiniSearchSearchResult = SearchResult & Pick<ImdbSearchItem, typeof TvData.tconst>;

export type Breadcrumb = {
  label: string;
  href: string;
};
