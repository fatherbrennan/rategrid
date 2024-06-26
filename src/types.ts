import type { PropsOf as QwikPropsOf } from '@builder.io/qwik';

export type PropsOf<T> = Omit<QwikPropsOf<T>, 'class'> & { class: string | undefined | null | false };
