import { $, component$, useContext } from '@builder.io/qwik';

import { Input } from '~/components';
import { AppContext } from '~/context';

import type { DocumentHead } from '@builder.io/qwik-city';
import type { PropsOf } from '~/types';

export default component$(() => {
  const appStore = useContext(AppContext);

  const onInput: PropsOf<'input'>['onInput$'] = $((_event, { value }) => {
    appStore.search = value;
  });

  return (
    <>
      <Input name="search" type="search" id="search" onInput$={onInput} />
    </>
  );
});

export const head: DocumentHead = {
  title: 'rategrid',
  meta: [{ name: 'description', content: 'Display information related to films and television series in a clean way.' }],
};
