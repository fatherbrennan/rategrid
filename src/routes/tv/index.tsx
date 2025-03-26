import { component$, useVisibleTask$ } from '@builder.io/qwik';
import { useLocation, useNavigate } from '@builder.io/qwik-city';

import { TvApiDefault } from '~/constants';
import { withTrailingSlash } from '~/utils/url';

/**
 * Redirect to the use the default API.
 */
export default component$(() => {
  const { url } = useLocation();
  const navigate = useNavigate();

  useVisibleTask$(() => {
    url.pathname = withTrailingSlash(url.pathname);
    navigate(new URL(TvApiDefault, url).toString(), { replaceState: true });
  });

  return <></>;
});
