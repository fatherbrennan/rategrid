import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

import { APP_TITLE, APP_URL_TV, OpenGraph } from '~/constants';
import { description as tvDescription, title as tvTitle } from '~/routes/tv/[api]/';
import { OpenGraphMeta } from '~/utils/url';

import type { DocumentHead, LinkProps } from '@builder.io/qwik-city';

const title = APP_TITLE;
const description = 'Display information related to films and television series in a clean way.';

export interface NavItem extends Required<Pick<LinkProps, 'href' | 'title'>> {
  label: string;
}

export const head: DocumentHead = {
  title,
  meta: [{ name: 'description', content: description }, OpenGraphMeta(OpenGraph.Title, title), OpenGraphMeta(OpenGraph.Description, description)],
};

export default component$(() => {
  const navItems: NavItem[] = [{ label: tvTitle, href: APP_URL_TV, title: tvDescription }];

  return (
    <>
      <nav>
        <ul class="border-2 border-paper-9 bg-paper-5">
          {navItems.map(({ label, href, title }) => (
            <li key={href}>
              <Link class="flex px-2 py-1 hover:bg-paper-9" {...{ href, title }}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
});
