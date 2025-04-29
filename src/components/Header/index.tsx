import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

import { APP_TITLE, APP_URL } from '~/constants';

export const Header = component$(() => {
  return (
    <header class="sticky top-0 z-50 flex max-h-safe-header min-h-safe-header flex-col justify-end bg-paper-0">
      <div class="flex h-header flex-row items-center justify-center">
        <h1>
          <Link href={APP_URL} class="text-sm underline hover:border-b md:text-base" title="Click to navigate to the homepage">
            {APP_TITLE}
          </Link>
        </h1>
      </div>
    </header>
  );
});
