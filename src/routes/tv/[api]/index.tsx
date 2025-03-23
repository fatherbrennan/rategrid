import { component$ } from '@builder.io/qwik';

import { TvApi } from '~/constants';

import type { DocumentHead, RequestHandler } from '@builder.io/qwik-city';

export const head: DocumentHead = {
  title: 'tv | rategrid',
  meta: [{ name: 'description', content: 'Display information related to television series in a clean way.' }],
};

/**
 * Redirect guard if provided with an invalid API.
 */
export const onGet: RequestHandler = async ({ params, redirect, url }) => {
  const { api } = params;
  if (!(api in TvApi)) {
    throw redirect(308, new URL('/rategrid/tv', url).toString());
  }
};

export default component$(() => {
  return <></>;
});
