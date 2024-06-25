import { component$ } from '@builder.io/qwik';

export const Header = component$(() => {
  return (
    <header class="absolute top-0 h-12 w-full bg-red-200">
      <span>Header</span>
    </header>
  );
});
