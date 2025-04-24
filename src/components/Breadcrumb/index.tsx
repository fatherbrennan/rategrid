import { component$ } from '@builder.io/qwik';

import { useAppState } from '~/hooks/useAppState';

export const Breadcrumb = component$(() => {
  const app = useAppState();

  return (
    <div>
      {app.breadcrumbs.map(({ href, label }) => (
        <div key={href}>
          <a href={href}>{label}</a>
        </div>
      ))}
    </div>
  );
});
