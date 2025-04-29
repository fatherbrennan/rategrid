import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';
import { links, meta } from '@qwikdev/pwa/head';

import { LOCAL_LANGUAGE_CODE_I18N, META_OG_IMAGE_ALT, META_OG_IMAGE_HEIGHT, META_OG_IMAGE_TYPE, META_OG_IMAGE_WIDTH, META_URL_OG_IMAGE, OpenGraph } from '~/constants';
import { OpenGraphMeta } from '~/utils/url';

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
      {[
        OpenGraphMeta(OpenGraph.Url, location.url.href),
        OpenGraphMeta(OpenGraph.Type, 'website'),
        OpenGraphMeta(OpenGraph.Locale, LOCAL_LANGUAGE_CODE_I18N),
        OpenGraphMeta(OpenGraph.Image, META_URL_OG_IMAGE),
        OpenGraphMeta(OpenGraph.ImageAlt, META_OG_IMAGE_ALT),
        OpenGraphMeta(OpenGraph.ImageType, META_OG_IMAGE_TYPE),
        OpenGraphMeta(OpenGraph.ImageWidth, META_OG_IMAGE_WIDTH.toString()),
        OpenGraphMeta(OpenGraph.ImageHeight, META_OG_IMAGE_HEIGHT.toString()),
      ].map((m) => (
        <meta key={m.property} {...m} />
      ))}

      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {links.map((l) => (
        <link key={l.key} {...l} />
      ))}
    </>
  );
});
