import { component$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';

import { RouterHead } from '~/components';

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
        <link rel="icon" type="image/x-icon" href="/rategrid/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/rategrid/favicon.svg" />
        <link rel="manifest" href="/rategrid/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover, user-scalable=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        <RouterHead />
      </head>
      <body lang="en" class="flex max-h-screen-h-full min-h-screen-h-full w-full flex-col flex-nowrap overscroll-x-none bg-paper-0 font-strict-serif text-ink-7">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
