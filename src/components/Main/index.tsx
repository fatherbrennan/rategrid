import { component$, Slot } from '@builder.io/qwik';

export const Main = component$(() => {
  return (
    <main class="bg-paper h-full overflow-auto p-2">
      <Slot />
    </main>
  );
});
