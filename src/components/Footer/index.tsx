import { component$ } from '@builder.io/qwik';

export const Footer = component$(() => {
  return (
    <footer class="bg-paper absolute bottom-0 h-footer w-full text-center">
      <div class="flex items-center px-2">
        <hr class="flex-grow" />
        <span class="px-2 text-xs">b.</span>
        <hr class="flex-grow" />
      </div>
    </footer>
  );
});
