import { component$ } from '@builder.io/qwik';

export const Footer = component$(() => {
  return (
    <footer class="fixed bottom-0 left-0 z-30 flex max-h-footer min-h-footer w-full flex-row flex-nowrap items-center gap-x-2 bg-paper-0 px-4 text-xs leading-none text-ink-5 [&>hr]:flex [&>hr]:h-px [&>hr]:grow [&>hr]:border-none [&>hr]:bg-paper-9">
      <hr />
      <span>b.</span>
      <hr />
    </footer>
  );
});
