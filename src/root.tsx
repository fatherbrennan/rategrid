import { component$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';

import { RouterHead } from '~/components';
import { APP_TITLE, META_URL } from '~/constants';
import { v } from '~/utils/url';

import './global.css';

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        <meta name="author" content="@fatherbrennan" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover, user-scalable=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content={APP_TITLE} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        {/* Parameter cache bust. */}
        <link rel="manifest" href={v(`${META_URL}manifest.json`)} />
        <link rel="icon" type="image/png" href={v(`${META_URL}favicon.png`)} sizes="96x96" />
        <link rel="icon" href={v(`${META_URL}favicon.ico`)} sizes="48x48" />
        <link rel="icon" type="image/svg+xml" href={v(`${META_URL}favicon.svg`)} sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href={v(`${META_URL}apple-touch-icon.png`)} />

        <RouterHead />
      </head>
      <body lang="en" class="flex max-h-screen-h-full min-h-screen-h-full w-full flex-col flex-nowrap overscroll-x-none bg-paper-0 font-strict-serif text-ink-7">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
