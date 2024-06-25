import { $, Slot, component$, createContextId, useContextProvider, useOnWindow, useStore, useTask$ } from '@builder.io/qwik';
import { isServer } from '@builder.io/qwik/build';

import { PASSWORD } from '~/env';

import type { Password } from '~/utils/cipher';

export interface AppStore {
  isAuth: boolean;
  login: null | Password;
  loginDigest: string;
  search: string;
  theme: string;
}

export const appContextId = 'context.app';

export const AppContext = createContextId<AppStore>(appContextId);

export const AppContextProvider = component$(() => {
  const store = useStore<AppStore>({ login: null, loginDigest: PASSWORD, theme: '', search: '', isAuth: false });

  useContextProvider(AppContext, store);

  // Read from storage if available
  useOnWindow(
    'load',
    $(() => {
      const localStorage = window.localStorage.getItem(appContextId);

      if (!localStorage) {
        window.localStorage.setItem(appContextId, JSON.stringify(store));
        return;
      }

      const localStore: Partial<AppStore> = JSON.parse(localStorage);
      store.login = localStore.login ?? null;
      store.theme = localStore.theme ?? '';
      store.search = localStore.search ?? '';
    }),
  );

  // Write to storage on update
  useTask$(({ track }) => {
    track(() => store.login);
    track(() => store.loginDigest);
    track(() => store.theme);
    track(() => store.search);

    if (!isServer) {
      window.localStorage.setItem(appContextId, JSON.stringify(store));
    }
  });

  return <Slot />;
});
