import { component$ } from '@builder.io/qwik';

export const Header = component$(() => {
  return (
    <header class="bg-paper absolute top-0 h-header w-full border-b-4 border-double">
      <h1 class="flex h-full items-center justify-center text-lg underline">rategrid</h1>
    </header>
  );
});
