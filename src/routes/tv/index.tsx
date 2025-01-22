import { imdbDirName } from '@fatherbrennan/api/dist/imdb';

import type { RequestHandler, StaticGenerateHandler } from '@builder.io/qwik-city';

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return {
    params: [imdbDirName].map((api) => ({ api })),
  };
};

/**
 * Redirect to the use the default API.
 */
export const onGet: RequestHandler = async ({ redirect, url }) => {
  throw redirect(303, new URL(imdbDirName, url).toString());
};
