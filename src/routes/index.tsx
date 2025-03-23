import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

import type { DocumentHead } from '@builder.io/qwik-city';

export const head: DocumentHead = {
  title: 'rategrid',
  meta: [{ name: 'description', content: 'Display information related to films and television series in a clean way.' }],
};

export default component$(() => {
  return (
    <>
      <h1>Welcome &#9996;</h1>

      <Link href="/rategrid/tv">/tv</Link>

      <div class="[&>div]:flex [&>div]:size-8 [&>div]:items-center [&>div]:justify-center">
        <div class="bg-rating-0">1</div>
        <div class="bg-rating-1">2</div>
        <div class="bg-rating-2">3</div>
        <div class="bg-rating-3">4</div>
        <div class="bg-rating-4">5</div>
        <div class="bg-rating-5">6</div>
        <div class="bg-rating-6">7</div>
        <div class="bg-rating-7">8</div>
        <div class="bg-rating-8">9</div>
        <div class="bg-rating-9">10</div>
      </div>
    </>
  );
});
