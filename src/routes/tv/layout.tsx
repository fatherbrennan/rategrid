import { $, component$, Resource, Slot, useResource$ } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';

import { Input } from '~/components';
import { useAppStore } from '~/hooks/useAppStore';
import { useDebounce$ } from '~/hooks/useDebounce';
import { Api } from '~/utils/api';

import type { PropsOf, QRL } from '@builder.io/qwik';

export default component$(() => {
  console.log('tv->layout->component$');
  const appStore = useAppStore();
  const { params } = useLocation();
  // Trigger search conservatively
  const { debounce } = useDebounce$<HTMLInputElement['value']>(
    (value) => {
      appStore.local.search = value;
    },
    { delay: 200, threshold: 5 },
  );

  // TODO: Need to fetch popular shows instead if there is no search
  const tvListResource = useResource$(async ({ track }) => {
    track(() => appStore.local.search);
    const response = await Api.get().tmdb({ token: appStore.env.TMDB_API_TOKEN }).search().tv({ query: appStore.local.search });
    return response;
  });

  const updateSearch: QRL<PropsOf<'input'>['onInput$']> = $((_event, { value }) => {
    debounce(value);
  });

  return (
    <div>
      <pre>routes/tv</pre>

      <hr />

      <pre>{JSON.stringify({ params })}</pre>

      <hr />

      <Input type="search" placeholder="The Office" onInput$={updateSearch} />

      <hr />

      <Resource
        value={tvListResource}
        onResolved={({ data, isSuccess }) => {
          if (!isSuccess || !data || 'success' in data) {
            // TODO: Show UI error message
            return;
          }

          return (
            <ul>
              {data.results.map(({ id, name, origin_country, overview }) => {
                return (
                  <li key={id} class="pb-4">
                    <Link href={`${id}`} class="flex flex-col">
                      <span>{name}</span>
                      <span>{origin_country}</span>
                      <span>{overview}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          );
        }}
        onPending={() => <h1>Pending</h1>}
        onRejected={() => <h1>Rejected</h1>}
      />

      <hr />

      <Slot />
    </div>
  );
});
