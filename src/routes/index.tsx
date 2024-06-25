import { component$, useContext } from '@builder.io/qwik';

import { AppContext } from '~/context';

import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  const appStore = useContext(AppContext);

  return (
    <>
      <h1>Hi 👋</h1>

      <pre>
        <code>{JSON.stringify(appStore, null, 2)}</code>
      </pre>
    </>
  );
});

export const head: DocumentHead = {
  title: 'rategrid',
  meta: [{ name: 'description', content: 'Display information related to films and television series in a clean way.' }],
};
