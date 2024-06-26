import { $, Slot, component$, useContext, useTask$ } from '@builder.io/qwik';

import { Input } from '~/components';
import { AppContext } from '~/context';
import { Cipher } from '~/utils/cipher';

import type { PropsOf } from '@builder.io/qwik';

export const Auth = component$(() => {
  const appStore = useContext(AppContext);

  useTask$(async ({ track }) => {
    track(() => appStore.login);
    // Set the Cipher encryption/decryption password on authorized password change
    if (appStore.login) {
      if ((await Cipher.digest(appStore.login)) === appStore.loginDigest) {
        await Cipher.setPassword(appStore.login);
        appStore.isAuth = true;
        return;
      }
    }

    appStore.isAuth = false;
  });

  const onInput: PropsOf<'input'>['onInput$'] = $(async (_event, { value }) => {
    appStore.login = value;
  });

  return appStore.isAuth ? <Slot /> : <Input type="password" name="password" id="password" title="Enter the password" onInput$={onInput} />;
});
