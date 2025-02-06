import { useContext } from '@builder.io/qwik';

import { AppStoreContextId } from '~/context';

import type { AppStore } from '~/context';

/**
 * Easy handling app state.
 * @example
 * ```ts
 * component$(() => {
 *   const app = useAppStore();
 *   return <pre>{JSON.stringify(app)}</pre>;
 * });
 * ```
 */
export function useAppStore(): AppStore {
  const store = useContext(AppStoreContextId);
  return store;
}
