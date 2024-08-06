import { TV } from '~/constants';

import type { RequestHandler, StaticGenerateHandler } from '@builder.io/qwik-city';

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return {
    params: TV.Apis.map((api) => ({ api })),
  };
};

/**
 * Redirect to the use the default API.
 */
export const onGet: RequestHandler = async ({ redirect, url }) => {
  throw redirect(303, new URL(TV.Default, url).toString());
};
