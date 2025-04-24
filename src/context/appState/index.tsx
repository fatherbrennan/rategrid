import { $, Slot, component$, createContextId, isDev, useContextProvider, useOnWindow, useStore, useVisibleTask$ } from '@builder.io/qwik';

import { SCREEN_SMALL_WIDTH } from '~/constants';

import type { Breadcrumb } from '~/types';

export interface AppState {
  isFullscreen: boolean;
  /** `true` if screen width is less than `SCREEN_SMALL_WIDTH`. */
  isSmallDisplay: boolean;
  breadcrumbs: Breadcrumb[];
}

export const AppStateContextId = createContextId<AppState>('rg.context.store');

export const AppStateContextProvider = component$(() => {
  const store = useStore<AppState>({
    isFullscreen: false,
    isSmallDisplay: true,
    breadcrumbs: [],
  });

  const checkScreenSizes = $(() => {
    store.isSmallDisplay = window.innerWidth <= SCREEN_SMALL_WIDTH;
  });

  useOnWindow('DOMContentLoaded', checkScreenSizes);
  useOnWindow('resize', checkScreenSizes);

  useContextProvider(AppStateContextId, store);

  // Show eruda devtools in mobile when in development.
  useVisibleTask$(async () => {
    if (isDev && store.isSmallDisplay) {
      const eruda = (await import('eruda')).default;
      eruda.init();
    }
  });

  return <Slot />;
});
