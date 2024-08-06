import { component$, useVisibleTask$ } from '@builder.io/qwik';
import { useLocation, useNavigate } from '@builder.io/qwik-city';

import { TV } from '~/constants';
import { appContextId } from '~/context/App';
import { useAppStore } from '~/hooks/useAppStore';
import { UrlBuilder } from '~/utils/url';

import type { DocumentHead, RequestHandler } from '@builder.io/qwik-city';

/**
 * Redirect guard if provided with an invalid API.
 */
export const onGet: RequestHandler = async ({ params, redirect }) => {
  const { api } = params;
  console.log('[api]->onGet', JSON.stringify({ api }));
  !(api in TV.Api) && redirect(308, '/tv');
};

export default component$(() => {
  const loc = useLocation();
  const nav = useNavigate();
  const appStore = useAppStore();
  const search = loc.url.searchParams.get('q');

  // Use `useVisibleTask$` so it is guranteed to fire after layout `useOnWindow()`
  // Handle which search should be used
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    // Use URL query if exists
    if (search) {
      appStore.local.search = search;
      window.localStorage.setItem(appContextId, JSON.stringify(appStore.local));
      return;
    }

    // Use cached query if exists
    if (appStore.local.search) {
      nav(UrlBuilder.query({ q: appStore.local.search }));
      return;
    }

    // TODO: Show popular shows
    // Show popular shows
    console.log('api->shows');
  });

  // TODO: If `search` is `null`, we should have search bar, and potentially have popular tv show picks.
  // Otherwise, we should prefill the search bar, and provide the search results
  return (
    <div class="flex flex-col">
      <pre>{JSON.stringify({ search })}</pre>
    </div>
  );
});

export const head: DocumentHead = ({ params }) => {
  const { api } = params;

  return {
    title: `rategrid - ${api}`,
    meta: [
      { name: 'description', content: 'Display information related to films and television series in a clean way.' },
      { name: 'source', content: JSON.stringify([api]) },
    ],
  };
};
