import { component$, Slot } from '@builder.io/qwik';

import { cls } from '~/utils/cls';

import type { AttributesOf } from '~/types';

export interface SectionProps extends AttributesOf<HTMLElement> {}

export const Section = component$<SectionProps>(({ class: rootClass, ...props }) => {
  return (
    <section {...props} class={cls('mx-auto flex w-full max-w-screen-lg flex-col', rootClass)}>
      <Slot />
    </section>
  );
});
