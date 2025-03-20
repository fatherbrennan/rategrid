import { TvApiDefault, TvApis } from '~/constants';
import { withTrailingSlash } from '~/utils/url';

import type { RequestHandler, StaticGenerateHandler } from '@builder.io/qwik-city';

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return {
    params: TvApis.map((api) => ({ api })),
  };
};

/**
 * Redirect to the use the default API.
 */
export const onGet: RequestHandler = async ({ redirect, url }) => {
  url.pathname = withTrailingSlash(url.pathname);
  throw redirect(303, new URL(TvApiDefault, url).toString());
};
