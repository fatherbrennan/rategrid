import { component$ } from '@builder.io/qwik';

export const Footer = component$(() => {
  return (
    <footer class="flex max-h-footer min-h-footer w-full flex-row items-end bg-paper-0">
      <div class="flex h-6 grow flex-row flex-nowrap items-center gap-x-2 px-4 text-ink-5 text-xs leading-none [&>hr]:flex [&>hr]:h-px [&>hr]:grow [&>hr]:border-none [&>hr]:bg-paper-9">
        <hr />
        <span>b.</span>
        <hr />
      </div>
    </footer>
  );
});
