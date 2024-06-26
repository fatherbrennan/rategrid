import { component$ } from '@builder.io/qwik';

import { cls } from '~/utils/cls';

import type { PropsOf } from '~/types';

export interface InputProps extends PropsOf<'input'> {}

export const Input = component$<InputProps>(({ class: c, ...props }) => {
  return <input class={cls('rounded-sketch border-2 border-solid border-black bg-transparent px-2 py-1 text-xs', c)} {...props} />;
});
