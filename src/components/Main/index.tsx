import { component$, Slot } from '@builder.io/qwik';

export const Main = component$(() => {
  return (
    <main class="h-full overflow-auto bg-cyan-200">
      <Slot />
    </main>
  );
});
