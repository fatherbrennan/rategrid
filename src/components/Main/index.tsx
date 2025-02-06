import { component$, Slot } from '@builder.io/qwik';

export const Main = component$(() => {
  return (
    <main class="max-h-main min-h-main flex flex-col gap-y-6 px-2">
      <Slot />
    </main>
  );
});
