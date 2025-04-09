import { Slot, component$ } from '@builder.io/qwik';

import { Search, Section } from '~/components';
import { useAppState } from '~/hooks/useAppState';
import { cls } from '~/utils/cls';

export default component$(() => {
  const app = useAppState();

  return (
    <>
      <Section class={cls(app.isFullscreen && 'hidden')}>
        <Search />
      </Section>

      <Slot />
    </>
  );
});
