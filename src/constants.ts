import type { Field, StringToType, TypeAsString } from './types';

const tvApi = {
  github: 'github',
} as const;

export const TV = {
  Api: tvApi,
  Apis: [tvApi.github],
  Default: tvApi.github,
} as const;

function field<TMapKey extends string, TType extends TypeAsString, TIsNullable extends boolean>(
  map: TMapKey,
  _type: TType,
  _isNullable: TIsNullable,
): Field<TMapKey, TType, TIsNullable> {
  return { _: { type: null as unknown as StringToType<TType> }, map } as Field<TMapKey, TType, TIsNullable>;
}

export const Data = {
  ImdbTitleRating: {
    /**
     * Alphanumeric unique identifier of the title.
     */
    tconst: field('id', 'string', false),
    /**
     * Weighted average of all the individual user ratings.
     */
    averageRating: field('aR', 'number', true),
    /**
     * Number of votes the title has received.
     */
    numVotes: field('nV', 'number', true),
  },
  ImdbTitleEpisode: {
    /**
     * Alphanumeric identifier of episode.
     */
    tconst: field('id', 'string', false),
    /**
     * Alphanumeric identifier of the parent TV Series.
     */
    parentTconst: field('pId', 'string', false),
    /**
     * Season number the episode belongs to.
     */
    seasonNumber: field('sN', 'number', true),
    /**
     * Episode number of the tconst in the TV series.
     */
    episodeNumber: field('eN', 'number', true),
  },
  ImdbTitleBasic: {
    /**
     * Alphanumeric unique identifier of the title.
     */
    tconst: field('id', 'string', false),
    /**
     * The type/format of the title (e.g. movie, short, tvseries, tvepisode, video, etc).
     */
    titleType: field('tT', 'string', false),
    // TODO: Quick fix: Database is sometimes missing episode primary titles which on join will be null.
    /**
     * The more popular title / the title used by the filmmakers on promotional materials at the point of release.
     */
    primaryTitle: field('pT', 'string', true),
    /**
     * Original title, in the original language.
     */
    originalTitle: field('oT', 'string', true),
    /**
     * - `0`: non-adult title.
     * - `1`: adult title.
     */
    isAdult: field('iA', 'boolean', false),
    /**
     * Represents the release year of a title. In the case of TV Series, it is the series start year.
     */
    startYear: field('sY', 'number', true),
    /**
     * TV Series end year. `‘\N’` for all other title types.
     */
    endYear: field('eY', 'number', true),
    /**
     * Primary runtime of the title, in minutes.
     */
    runtimeMinutes: field('rM', 'number', true),
    /**
     * Includes up to three genres associated with the title.
     * CSV format.
     */
    genres: field('g', 'string', true),
  },
  Generated: {
    map: field('m', 'map', false),
    // TODO: Make this work.
    seasons: field('s', 'seasonIndex', false),
    // TODO: Make this work.
    episodes: field('e', 'episodeIndex', false),
    unknownEpisodes: field('uE', 'episodes', false),
  },
} as const;

export const Unknown = {
  Key: 'unknown',
  Number: 0,
  String: 'Unknown',
  Rating: null,
} as const;

export const colorMap = ['#f9f7f1', '#e7e5df', '#d4d3ce', '#c2c0bc', '#b0aeaa', '#9d9c99', '#8b8a87', '#787876', '#666664', '#545352', '#414141', '#2f2f2f'] as const;
