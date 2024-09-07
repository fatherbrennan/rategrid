import type { PropsOf as QwikPropsOf } from '@builder.io/qwik';

import type { Data, Unknown } from './constants';

export type PropsOf<T> = Omit<QwikPropsOf<T>, 'class'> & { class?: string | undefined | null | false };

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export type Require<T, K extends keyof T> = Pick<Required<T>, K> & Omit<T, K>;

export type Nullable<T> = T | null;

export type TypeAsString = 'string' | 'number' | 'boolean' | 'map' | 'episodes' | 'episodeIndex' | 'seasonIndex';

export type StringToType<T extends TypeAsString> = T extends 'number'
  ? number
  : T extends 'string'
    ? string
    : T extends 'boolean'
      ? boolean
      : T extends 'map'
        ? TvSeriesMap
        : T extends 'episodes'
          ? TvSeriesEpisode[]
          : T extends 'episodeIndex'
            ? (keyof TvSeriesMap)[]
            : T extends 'seasonIndex'
              ? (keyof TvSeriesMap[NonNullable<ImdbTitleEpisodeRaw['seasonNumber']>])[]
              : never;

export type Field<TMapKey extends string, TType extends TypeAsString, TIsNullable extends boolean> = {
  _: { type: TIsNullable extends true ? StringToType<TType> | null : StringToType<TType>; map: { [K in TMapKey]: never } };
  map: TMapKey;
};

export type DataType = typeof Data;

export type EnsureId<T> = T & { id: string };

export type InferRawData<T extends keyof DataType> = {
  [K in keyof DataType[T]]: DataType[T][K] extends Field<infer _U, infer _V, infer _W> ? DataType[T][K]['_']['type'] : never;
};

export type InferMapData<T extends keyof DataType> = {
  [K in keyof DataType[T] as DataType[T][K] extends Field<infer _U, infer _V, infer _W> ? DataType[T][K]['map'] : never]: DataType[T][K] extends Field<infer _U, infer _V, infer _W>
    ? DataType[T][K]['_']['type']
    : never;
};

export type InferDataMap<T extends keyof DataType> = {
  [K in keyof DataType[T]]: DataType[T][K] extends Field<infer _U, infer _V, infer _W> ? DataType[T][K]['map'] : never;
};

export type GeneratedMap = InferDataMap<'Generated'>;

export type GeneratedRaw = InferRawData<'Generated'>;

export type Generated = InferMapData<'Generated'>;

export type ImdbTitleBasicMap = InferDataMap<'ImdbTitleBasic'>;

export type ImdbTitleBasicRaw = InferRawData<'ImdbTitleBasic'>;

export type ImdbTitleBasic = InferMapData<'ImdbTitleBasic'>;

export type ImdbTitleEpisodeMap = InferDataMap<'ImdbTitleEpisode'>;

export type ImdbTitleEpisodeRaw = InferRawData<'ImdbTitleEpisode'>;

export type ImdbTitleEpisode = InferMapData<'ImdbTitleEpisode'>;

export type ImdbTitleRatingMap = InferDataMap<'ImdbTitleRating'>;

export type ImdbTitleRatingRaw = InferRawData<'ImdbTitleRating'>;

export type ImdbTitleRating = InferMapData<'ImdbTitleRating'>;

export type TvSeriesStruct<T extends number | string | null, V> = null extends T ? { [key in NonNullable<T>]: V } & { [Unknown.Key]?: V } : { [key in NonNullable<T>]: V };

export type SearchTvSeries = Pick<ImdbTitleBasic, ImdbTitleBasicMap['tconst'] | ImdbTitleBasicMap['primaryTitle'] | ImdbTitleBasicMap['startYear']>;

export type TvSeries = Generated & SearchTvSeries & Pick<ImdbTitleBasic, ImdbTitleBasicMap['runtimeMinutes'] | ImdbTitleBasicMap['endYear']>;

export type TvSeriesEpisode = Pick<ImdbTitleEpisode, ImdbTitleEpisodeMap['tconst']> &
  Pick<ImdbTitleBasic, ImdbTitleBasicMap['primaryTitle']> &
  Pick<ImdbTitleRating, ImdbTitleRatingMap['averageRating'] | ImdbTitleRatingMap['numVotes']>;

export type TvSeriesEpisodeRaw = Pick<ImdbTitleBasicRaw, 'primaryTitle'> &
  Pick<ImdbTitleEpisodeRaw, 'tconst' | 'seasonNumber' | 'episodeNumber'> &
  Pick<ImdbTitleRatingRaw, 'averageRating' | 'numVotes'>;

export type TvSeriesMap = TvSeriesStruct<ImdbTitleEpisodeRaw['seasonNumber'], TvSeriesStruct<ImdbTitleEpisodeRaw['episodeNumber'], TvSeriesEpisode>>;
