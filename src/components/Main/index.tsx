import { component$, Slot } from '@builder.io/qwik';

export const Main = component$(() => {
  return (
    <main class="flex h-full grow flex-col gap-6 p-2 md:p-4">
      <Slot />
    </main>
  );
});
