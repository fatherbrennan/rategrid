import { useContext } from '@builder.io/qwik';

import { AppStateContextId } from '~/context';

import type { AppState } from '~/context';

/**
 * Easy handling app state.
 * @example
 * ```ts
 * component$(() => {
 *   const app = useAppState();
 *   return <pre>{JSON.stringify(app)}</pre>;
 * });
 * ```
 */
export function useAppState(): AppState {
  const store = useContext(AppStateContextId);
  return store;
}
