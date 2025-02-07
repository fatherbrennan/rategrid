import { component$, Slot } from '@builder.io/qwik';

import { Search, Section } from '~/components';
import { useAppStore } from '~/hooks/useAppStore';

export default component$(() => {
  const app = useAppStore();

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
