import { $, Slot, component$, createContextId, useContextProvider, useOnWindow, useStore, useVisibleTask$ } from '@builder.io/qwik';

export interface LocalStorage {
  /** Local storage has been read. */
  $isRead: boolean;
  theme: 'system' | 'dark' | 'light';
}

export const LOCAL_STORAGE_KEY = 'rg.local';

export const LocalStorageContextId = createContextId<LocalStorage>(LOCAL_STORAGE_KEY);

export const LocalStorageContextProvider = component$(() => {
  const local = useStore<LocalStorage>({
    $isRead: false,
    theme: 'system',
  });

  useContextProvider(LocalStorageContextId, local);

  useOnWindow(
    'DOMContentLoaded',
    $(() => {
      const localStorageString = window.localStorage.getItem(LOCAL_STORAGE_KEY);
      local.$isRead = true;

      // Keep defaults.
      if (!localStorageString) {
        return;
      }

      const localStorage = JSON.parse(localStorageString) as Partial<LocalStorage>;

      local.theme = localStorage.theme ?? local.theme;
    }),
  );

  useVisibleTask$(({ track }) => {
    track(() => local.theme);
    // Remove keys which are not to be written to local storage.
    const { $isRead: _$isRead, ...localToWrite } = local;

    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(localToWrite));
  });

  return <Slot />;
});
