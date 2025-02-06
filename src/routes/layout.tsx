import { component$, Slot } from '@builder.io/qwik';

import { Footer, Header, Main } from '~/components';
import { AppStoreContextProvider, LocalStorageContextProvider } from '~/context';

import type { RequestHandler } from '@builder.io/qwik-city';

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a year stale
    staleWhileRevalidate: 60 * 60 * 24 * 365.25,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <LocalStorageContextProvider>
      <AppStoreContextProvider>
        <Header />

        <Main>
          <Slot />
        </Main>

        <Footer />
      </AppStoreContextProvider>
    </LocalStorageContextProvider>
  );
});
