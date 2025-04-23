import { component$ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';

import { APP_TITLE, META_URL_TV, META_URL_TV_PATHNAME, OpenGraph } from '~/constants';
import { OpenGraphMeta } from '~/utils/url';

import type { DocumentHead } from '@builder.io/qwik-city';

const title = APP_TITLE;
const description = 'Display information related to films and television series in a clean way.';

export const head: DocumentHead = {
  title,
  meta: [{ name: 'description', content: description }, OpenGraphMeta(OpenGraph.Title, title), OpenGraphMeta(OpenGraph.Description, description)],
};

export default component$(() => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Welcome &#9996;</h1>

      <ul class="[&>li]:cursor-pointer">
        <li onClick$={() => navigate(META_URL_TV)}>/{META_URL_TV_PATHNAME}</li>
      </ul>
    </>
  );
});
