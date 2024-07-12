import { $, component$, Slot, useContext, useStore, useTask$ } from '@builder.io/qwik';

import { AppContext } from '~/context';
import { Env } from '~/env';
import { Cipher } from '~/utils/cipher';
import { Input } from '../Input';

import type { PropsOf, QRL } from '@builder.io/qwik';

export const Auth = component$(() => {
  const appStore = useContext(AppContext);
  const state = useStore({ isAuth: false, isLoaded: false });

  useTask$(async ({ track }) => {
    track(() => appStore.local.password);

    // Set the Cipher encryption/decryption password on authorized password change
    if (appStore.local.password) {
      if ((await Cipher.digest(appStore.local.password)) === Env.PASSWORD_DIGEST) {
        await Cipher.setPassword(appStore.local.password);
        state.isAuth = true;
        state.isLoaded = true;

        // Expose the env variables using the password
        appStore.env.TMDB_API_TOKEN = await Cipher.parse(Env.TMDB_API_TOKEN);
        return;
      }
    }

    state.isAuth = false;
    state.isLoaded = true;
  });

  const onInput: QRL<PropsOf<'input'>['onInput$']> = $(async (_event, { value }) => {
    appStore.local.password = value;
  });

  // `state.isLoaded && state.isAuth` causes a flicker
  // This syntax will not cause a flicker while loading
  return state.isLoaded ? (
    state.isAuth ? (
      <Slot />
    ) : (
      <Input type="password" name="password" id="password" title="Enter the password" class="!bg-red-700" onInput$={onInput} />
    )
  ) : undefined;
});
