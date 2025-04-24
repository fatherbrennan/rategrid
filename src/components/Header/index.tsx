import { component$ } from '@builder.io/qwik';

import { APP_TITLE } from '~/constants';

export const Header = component$(() => {
  return (
    <header class="sticky top-0 z-50 flex max-h-safe-header min-h-safe-header flex-col justify-end bg-paper-0">
      <div class="flex h-header flex-row items-center justify-center">
        <h1 class="text-sm underline md:text-base">{APP_TITLE}</h1>
      </div>
    </header>
  );
});
