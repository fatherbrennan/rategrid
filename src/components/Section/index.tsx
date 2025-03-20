import { component$, Slot } from '@builder.io/qwik';

import { cls } from '~/utils/cls';

import type { AttributesOf } from '~/types';

export const Section = component$<AttributesOf<HTMLElement>>(({ class: rootClass, ...props }) => {
  return (
    <section {...props} class={cls('flex w-full flex-col', rootClass)}>
      <Slot />
    </section>
  );
});
