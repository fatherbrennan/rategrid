import { component$, Slot } from '@builder.io/qwik';

export const Main = component$(() => {
  return (
    <main class="h-full overflow-auto bg-paper p-2">
      <Slot />
    </main>
  );
});
