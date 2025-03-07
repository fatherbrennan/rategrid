import { $, component$, createContextId, isDev, Slot, useContextProvider, useOnWindow, useStore, useVisibleTask$ } from '@builder.io/qwik';

import { SCREEN_SMALL_WIDTH } from '~/constants';

export interface AppStore {
  isFullscreen: boolean;
  isSmallDisplay: boolean;
}

export const AppStoreContextId = createContextId<AppStore>('rg.context.store');

export const AppStoreContextProvider = component$(() => {
  const store = useStore<AppStore>({
    isFullscreen: false,
    isSmallDisplay: true,
  });

  const checkScreenSizes = $(() => {
    store.isSmallDisplay = window.innerWidth <= SCREEN_SMALL_WIDTH;
  });

  useOnWindow('DOMContentLoaded', checkScreenSizes);
  useOnWindow('resize', checkScreenSizes);

  useContextProvider(AppStoreContextId, store);

  // Show eruda devtools in mobile when in development.
  useVisibleTask$(async () => {
    if (isDev && store.isSmallDisplay) {
      const eruda = (await import('eruda')).default;
      eruda.init();
    }
  });

  return <Slot />;
});
