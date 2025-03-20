import { component$ } from '@builder.io/qwik';

export const Header = component$(() => {
  return (
    <header class="min-h-header max-h-header bg-paper-0 sticky top-0 z-50 flex flex-row items-center justify-center">
      <h1 class="underline">rategrid</h1>
    </header>
  );
});
