import { component$, Slot } from '@builder.io/qwik';

import { Search, Section } from '~/components';
import { useAppState } from '~/hooks/useAppState';

export default component$(() => {
  const app = useAppState();

  return (
    <>
      {!app.isFullscreen && (
        <Section>
          <Search />
        </Section>
      )}

      <Slot />
    </>
  );
});
