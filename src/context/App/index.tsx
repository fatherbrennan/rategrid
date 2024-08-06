import { $, Slot, component$, createContextId, useContextProvider, useOnWindow, useStore, useVisibleTask$ } from '@builder.io/qwik';

/**
 * Exposed object to write to local storage.
 */
export interface AppStoreLocal {
  search: string;
  theme: string;
}

/**
 * Exposed object.
 */
export interface AppStore {
  local: AppStoreLocal;
}

export const appContextId = 'context.app';

export const AppContext = createContextId<AppStore>(appContextId);

export const AppContextProvider = component$(() => {
  const store = useStore<AppStore>({
    local: { search: '', theme: '' },
  });

  useContextProvider(AppContext, store);

  // Read from storage if available
  useOnWindow(
    'DOMContentLoaded',
    $(() => {
      console.log('context->DOMContentLoaded');
      const localStorage = window.localStorage.getItem(appContextId);

      // Set defaults
      if (!localStorage) {
        window.localStorage.setItem(appContextId, JSON.stringify(store.local));
        return;
      }

      // Set defaults for any missing values
      const localStore: Partial<AppStoreLocal> = JSON.parse(localStorage);
      store.local.theme = localStore.theme ?? '';
      store.local.search = localStore.search ?? '';
    }),
  );

  // Write to local storage on update
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ track }) => {
    track(() => store.local.theme);
    track(() => store.local.search);

    console.log('context->write');
    window.localStorage.setItem(appContextId, JSON.stringify(store.local));
  });

  return <Slot />;
});
