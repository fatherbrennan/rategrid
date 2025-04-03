import { component$, useVisibleTask$ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';

import { TvApiDefault } from '~/constants';

/**
 * Redirect to the use the default API.
 */
export default component$(() => {
  const navigate = useNavigate();

  useVisibleTask$(() => {
    navigate(`/rategrid/tv/${TvApiDefault}/`, { replaceState: true });
  });

  return <></>;
});
