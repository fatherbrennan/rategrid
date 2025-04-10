import { component$ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';

import type { DocumentHead } from '@builder.io/qwik-city';

export const head: DocumentHead = {
  title: 'rategrid',
  meta: [{ name: 'description', content: 'Display information related to films and television series in a clean way.' }],
};

export default component$(() => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Welcome &#9996;</h1>

      <ul class="[&>li]:cursor-pointer">
        <li onClick$={() => navigate('/rategrid/tv/')}>/tv</li>
      </ul>
    </>
  );
});
