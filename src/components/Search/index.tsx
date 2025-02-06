import { $, component$, useOnWindow, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { useLocation, useNavigate } from '@builder.io/qwik-city';
import { Api } from '@fatherbrennan/api/dist/api';
import { TvData, type ImdbSearchItem } from '@fatherbrennan/api/dist/imdb';
import { Combobox } from '@qwik-ui/headless';
import { LuChevronDown } from '@qwikest/icons/lucide';
import MiniSearch from 'minisearch';

import { useDebounce$ } from '~/hooks/useDebounce';

import type { PropsOf } from '@builder.io/qwik';

import type { TvApi } from '~/constants';
import type { MiniSearchSearchResult, TvSeriesDictionary } from '~/types';

export const Search = component$(() => {
  const navigate = useNavigate();
  const { params } = useLocation();
  const { api } = params;
  const comboboxRootRef = useSignal<Element>();
  const comboboxPopoverWidth = useSignal(0);
  const isSearchOpen = useSignal(false);
  const searchValue = useSignal('');
  const searchResults = useSignal<ImdbSearchItem[]>([]);
  const tvSeriesDictionary: TvSeriesDictionary = {};
  // Trigger search conservatively.
  const { debounce } = useDebounce$<typeof searchValue.value>(
    (value) => {
      if (value.length > 0 && window.minisearch) {
        // Get minisearch top results.
        searchResults.value = (window.minisearch.search(searchValue.value) as MiniSearchSearchResult[])
          .slice(0, 10)
          .map(({ [TvData.tconst]: tvSeriesId }) => tvSeriesDictionary[tvSeriesId])
          .sort((a, b) => b[TvData.numVotes] - a[TvData.numVotes]);
        isSearchOpen.value = true;
      }
    },
    { delay: 10, threshold: 1 },
  );

  useVisibleTask$(async () => {
    const { data, isSuccess } = await Api.get()[api as keyof typeof TvApi]().tv().search().fetch();

    // Ensure minisearch exists on window object.
    !window.minisearch &&
      (window.minisearch = new MiniSearch({
        idField: TvData.tconst,
        fields: [TvData.tconst, TvData.primaryTitle, TvData.startYear],
        searchOptions: {
          boost: { [TvData.numVotes]: 2 },
          fuzzy: 0.2,
          prefix: true,
        },
      }));

    if (isSuccess && !!data) {
      // Add data to minisearch.
      window.minisearch.addAll(data);
      // Create dictionary from data.
      for (let i = 0; i < data.length; i++) {
        const searchItem = data[i];
        tvSeriesDictionary[searchItem[TvData.tconst]] = searchItem;
      }
    }
  });

  useVisibleTask$(({ track }) => {
    track(searchValue);
    debounce(searchValue.value);
  });

  const setPopoverWidth = $(() => {
    comboboxRootRef.value && (comboboxPopoverWidth.value = comboboxRootRef.value.getBoundingClientRect().width);
  });

  // Set the popover width when first mounted, and on any resize.
  useVisibleTask$(() => setPopoverWidth());
  useOnWindow('resize', setPopoverWidth);

  const navigateToTvSeries: PropsOf<(typeof Combobox)['Root']>['onChange$'] = $((id: string | string[]) => {
    // We only expect a string, since we are not using combobox multi select.
    typeof id === 'string' && navigate(`/tv/${api}/${id}`);
    isSearchOpen.value = false;
    searchValue.value = '';
  });

  return (
    <Combobox.Root placeholder="The Office" ref={comboboxRootRef} bind:open={isSearchOpen} autoFocus filter={false} onChange$={navigateToTvSeries}>
      <Combobox.Label>TV Series</Combobox.Label>
      <Combobox.Control>
        <Combobox.Input bind:value={searchValue} />
        <Combobox.Trigger>
          <LuChevronDown />
        </Combobox.Trigger>
      </Combobox.Control>
      <Combobox.Popover floating="bottom-start" style={{ width: comboboxPopoverWidth.value }}>
        {searchResults.value.map(({ [TvData.tconst]: id, [TvData.primaryTitle]: primaryTitle, [TvData.startYear]: startYear }) => (
          <Combobox.Item key={id} value={id}>
            <Combobox.ItemLabel>{primaryTitle}</Combobox.ItemLabel>
            <span>{startYear}</span>
          </Combobox.Item>
        ))}
      </Combobox.Popover>
    </Combobox.Root>
  );
});
