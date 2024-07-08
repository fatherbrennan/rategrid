import type { PropsOf as QwikPropsOf } from '@builder.io/qwik';

export type PropsOf<T> = Omit<QwikPropsOf<T>, 'class'> & { class?: string | undefined | null | false };

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export type Require<T, K extends keyof T> = Pick<Required<T>, K> & Omit<T, K>;
