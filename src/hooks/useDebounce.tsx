import { $, implicit$FirstArg, useStore } from '@builder.io/qwik';

import type { QRL } from '@builder.io/qwik';

export type UseDebounceFn<T> = QRL<(args: T) => void>;

export interface UseDebounceOptions {
  /**
   * Delay in milliseconds before triggering `fn`.
   * @default 300
   */
  delay?: number;
  /**
   * Maximum number of times during debouncing, before triggering `fn`.
   * - Note: If equal to `1`, will execute immediately.
   * @default Infinity
   */
  threshold?: number;
}

export interface UseDebounce<T> {
  /**
   * Cancel existing debounce.
   */
  clear: QRL<() => void>;
  /**
   * Queue `fn` to be executed after debounce dependencies are met.
   */
  debounce: UseDebounceFn<T>;
  /**
   * Cancel existing debounce and immediately execute `fn`.
   */
  force: UseDebounceFn<T>;
  /**
   * `true` when in a debounce state, meaning there is a queued `fn` to execute.
   */
  isDebouncing: boolean;
}

interface UseDebounceState {
  timeoutId: number | undefined;
  debounced: number;
  isDebouncing: boolean;
}

export function useDebounceQrl<T>(fn: UseDebounceFn<T>, options?: UseDebounceOptions): UseDebounce<T> {
  const { delay = 300, threshold = Infinity } = options ?? {};
  const state = useStore<UseDebounceState>({
    timeoutId: undefined,
    debounced: 0,
    isDebouncing: false,
  });

  const clear: UseDebounce<T>['clear'] = $(() => {
    clearTimeout(state.timeoutId);
    state.timeoutId = undefined;
    state.debounced = 0;
    state.isDebouncing = false;
  });

  const force: UseDebounce<T>['force'] = $(async (args) => {
    clear();
    fn(args);
  });

  const debounce: UseDebounce<T>['debounce'] = $(async (args) => {
    state.debounced++;
    state.isDebouncing = true;

    // Force execute if threshold reached
    if (state.debounced >= threshold) {
      force(args);
      return;
    }

    clearTimeout(state.timeoutId);
    state.timeoutId = Number(setTimeout(() => force(args), delay));
  });

  return {
    clear,
    debounce,
    force,
    isDebouncing: state.isDebouncing,
  };
}

/**
 * Set debounce callback `fn` and debounce dependencies.
 * @example
 * ```ts
 * component$(() => {
 *   const { debounce } = useDebounce$<string>((value) => {
 *     console.log(value);
 *   }, { delay: 200, threshold: 5 });
 *
 *   return <input type="text" onInput$={$((_event, { value }) => debounce(value))} />
 * });
 * ```
 */
export const useDebounce$ = implicit$FirstArg(useDebounceQrl);
