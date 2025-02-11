import { component$ } from '@builder.io/qwik';

export const Header = component$(() => {
  return (
    <header class="fixed left-0 top-0 z-40 flex max-h-header min-h-header w-full grow flex-col items-center justify-end border-b border-paper-9 bg-paper-0">
      <div class="mt-safe-t flex w-full grow items-center justify-center">
        <h1 class="underline">rategrid</h1>
      </div>
    </header>
  );
});
