import { useContext } from '@builder.io/qwik';

import { AppContext } from '~/context';

/**
 * Helper function to retrieve the app store.
 * @example
 * ```ts
 * component$(() => {
 *   const appStore = useAppStore();
 *   // ...
 * });
 * ```
 */
export const useAppStore = () => {
  const store = useContext(AppContext);
  return store;
};
