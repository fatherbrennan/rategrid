import { component$, Slot } from '@builder.io/qwik';

export const Main = component$(() => {
  return (
    <main class="flex h-full grow flex-col gap-6 px-2 md:px-4">
      <Slot />
    </main>
  );
});
