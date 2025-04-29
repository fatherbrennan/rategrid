import { component$, useVisibleTask$ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';

import { APP_URL_TV, TvApiDefault } from '~/constants';

/**
 * Redirect to the use the default API.
 */
export default component$(() => {
  const navigate = useNavigate();

  useVisibleTask$(() => {
    navigate(`${APP_URL_TV}${TvApiDefault}/`, { replaceState: true });
  });

  return <></>;
});
