import { component$ } from '@builder.io/qwik';

export const Header = component$(() => {
  return (
    <header class="flex max-h-header min-h-header flex-col items-center justify-center border-b border-paper-9">
      <h1 class="underline">rategrid</h1>
    </header>
  );
});
