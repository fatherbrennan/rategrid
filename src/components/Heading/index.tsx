import { component$, Slot } from '@builder.io/qwik';

import type { QwikAttributes } from '@builder.io/qwik';

export const headingLevels = [1, 2, 3, 4, 5, 6] as const;

export type HeadingLevel = (typeof headingLevels)[number];

export interface HeadingProps extends QwikAttributes<HTMLHeadingElement> {
  level: HeadingLevel;
}

export const Heading = component$<HeadingProps>(({ level, ...props }) => {
  const HeadingTag = `h${headingLevels[level - 1]}`;
  // TODO: Need to add default classes.

  return (
    <HeadingTag {...props}>
      <Slot />
    </HeadingTag>
  );
});
