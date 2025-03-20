import { component$ } from '@builder.io/qwik';

export const Footer = component$(() => {
  return (
    <footer class="min-h-footer max-h-footer bg-paper-0 flex w-full flex-row items-end">
      <div class="text-ink-5 [&>hr]:bg-paper-9 flex h-6 grow flex-row flex-nowrap items-center gap-x-2 px-4 text-xs leading-none [&>hr]:flex [&>hr]:h-px [&>hr]:grow [&>hr]:border-none">
        <hr />
        <span>b.</span>
        <hr />
      </div>
    </footer>
  );
});
