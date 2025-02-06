import { component$, Slot } from '@builder.io/qwik';

import { Search, Section } from '~/components';

export default component$(() => {
  return (
    <>
      <Section>
        <Search />
      </Section>

      <Slot />
    </>
  );
});
