import { useContext } from '@builder.io/qwik';

import { LocalStorageContextId } from '~/context';

import type { LocalStorage } from '~/context';

/**
 * Easy read/write to local storage.
 * @example
 * ```ts
 * component$(() => {
 *   const local = useLocalStorage();
 *   return <pre>{JSON.stringify(local)}</pre>;
 * });
 * ```
 *
 * Check the `$isRead` property to ensure the value is from local storage.
 * @example
 * ```ts
 * component$(() => {
 *   const local = useLocalStorage();
 *   return local.$isRead && <body class={local.theme}>...</body>;
 * });
 * ```
 */
export function useLocalStorage(): LocalStorage {
  const local = useContext(LocalStorageContextId);
  return local;
}
