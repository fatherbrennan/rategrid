import { component$ } from '@builder.io/qwik';

import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return <h1>Welcome &#9996;</h1>;
});

// TODO: Will need to add Open Graph metadata
export const head: DocumentHead = {
  title: 'rategrid',
  meta: [{ name: 'description', content: 'Display information related to films and television series in a clean way.' }],
};
