import { component$, Slot } from '@builder.io/qwik';

import { cls } from '~/utils/cls';

import type { Component } from '@builder.io/qwik';

import type { AttributesOf } from '~/types';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps extends AttributesOf<HTMLHeadingElement> {
  level: HeadingLevel;
}

export const Heading = component$<HeadingProps>(({ level, class: rootClass, ...props }) => {
  const HeadingTag = `h${level}` as unknown as Component<AttributesOf<HTMLHeadingElement>>;
  const baseClass: { [headingLevel in HeadingLevel]: string } = {
    1: 'text-3xl md:text-4xl',
    2: 'text-2xl md:text-3xl',
    3: 'text-xl md:text-2xl',
    4: 'text-lg md:text-xl',
    5: 'text-base md:text-lg',
    6: 'text-sm md:text-base',
  };

  return (
    <HeadingTag {...props} class={cls('leading-tight font-bold italic', baseClass[level], rootClass)}>
      <Slot />
    </HeadingTag>
  );
});
