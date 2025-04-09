import { component$ } from '@builder.io/qwik';

export const Header = component$(() => {
  return (
    <header class="sticky top-0 z-50 flex max-h-header min-h-header flex-row items-center justify-center bg-paper-0">
      <h1 class="underline">rategrid</h1>
    </header>
  );
});
