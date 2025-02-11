import { component$, Slot } from '@builder.io/qwik';

export const Main = component$(() => {
  return (
    <main class="mb-footer mt-header flex flex-col gap-y-6 overflow-auto px-2">
      <Slot />
    </main>
  );
});
