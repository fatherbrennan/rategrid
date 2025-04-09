import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';
import { links, meta } from '@qwikdev/pwa/head';

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const location = useLocation();

  return (
    <>
      <title>{head.title}</title>

      <link rel="canonical" href={location.url.href} />

      {meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {links.map((l) => (
        <link key={l.key} {...l} />
      ))}
    </>
  );
});
