import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

import type { JSXOutput, Signal } from '@builder.io/qwik';

interface AsyncProps {
  /**
   * Delay in milliseconds before rendering `isPending` component.
   * @default 100
   */
  delay?: number;
  /** Signal to determine if component is pending. */
  isPending: Signal<boolean>;
  /** Component to render while pending. */
  onPending: JSXOutput;
  /**
   * Component to render while delaying.
   * @default <></>
   */
  onPreDelay?: JSXOutput;
  /** Component to render when resolved. */
  onResolved: JSXOutput;
}

export const Async = component$<AsyncProps>(({ isPending, delay = 100, onPreDelay: PreDelay = <></>, onPending: Pending, onResolved: Resolved }) => {
  const timeoutId = useSignal<number | undefined>();
  const isDelaying = useSignal(true);

  useVisibleTask$(({ track }) => {
    track(() => isPending.value);

    if (timeoutId.value !== undefined) {
      clearTimeout(timeoutId.value);
      timeoutId.value = undefined;
    }

    isDelaying.value = true;
    timeoutId.value = Number(
      setTimeout(() => {
        clearTimeout(timeoutId.value);
        timeoutId.value = undefined;
        isDelaying.value = false;
      }, delay),
    );
  });

  return isPending.value ? (isDelaying.value ? PreDelay : Pending) : Resolved;
});
