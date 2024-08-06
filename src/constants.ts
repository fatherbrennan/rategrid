const tvApi = {
  tmdb: 'tmdb',
} as const;

export const TV = {
  Api: tvApi,
  Apis: [tvApi.tmdb],
  Default: tvApi.tmdb,
} as const;
