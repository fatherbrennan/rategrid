import { component$, createContextId, Slot, useContextProvider, useStore } from '@builder.io/qwik';

export interface AppStore {
  isFullscreen: boolean;
}

export const AppStoreContextId = createContextId<AppStore>('rg.context.store');

export const AppStoreContextProvider = component$(() => {
  const store = useStore<AppStore>({
    isFullscreen: false,
  });

  useContextProvider(AppStoreContextId, store);

  return <Slot />;
});
