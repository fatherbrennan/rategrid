const tvApi = {
  github: 'github',
} as const;

export const TV = {
  Api: tvApi,
  Apis: [tvApi.github],
  Default: tvApi.github,
} as const;
