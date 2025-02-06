import { imdbDirName } from '@fatherbrennan/api/dist/imdb';

/** Local language code. */
export const LOCAL_LANGUAGE_CODE = 'en-AU';

export const TvApi = {
  [imdbDirName]: imdbDirName,
} as const;

export const TvApis = [TvApi[imdbDirName]] as const;

export const TvApiDefault = TvApi[imdbDirName];
