import { component$, Slot } from '@builder.io/qwik';

import { Auth, Footer, Header, Main } from '~/components';
import { AppContextProvider } from '~/context';

import type { RequestHandler } from '@builder.io/qwik-city';

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 365,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <AppContextProvider>
      <div class="h-screen w-screen overflow-hidden bg-paper pb-footer pt-header font-serif text-ink">
        <Header />

        <Main>
          <Auth>
            <Slot />
          </Auth>
        </Main>

        <Footer />
      </div>
    </AppContextProvider>
  );
});
