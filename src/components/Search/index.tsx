import { $, component$, useOnWindow, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { useLocation, useNavigate } from '@builder.io/qwik-city';
import { Api, UrlBuilder } from '@fatherbrennan/api/dist/api';
import { TvData } from '@fatherbrennan/api/dist/imdb';
import { Combobox } from '@qwik-ui/headless';
import { LuChevronDown } from '@qwikest/icons/lucide';
import MiniSearch from 'minisearch';

import { APP_URL_TV } from '~/constants';
import { useDebounce$ } from '~/hooks/useDebounce';

import type { PropsOf } from '@builder.io/qwik';
import type { ImdbSearchItem } from '@fatherbrennan/api/dist/imdb';

import type { TvApi } from '~/constants';
import type { MiniSearchSearchResult, TvSeriesDictionary } from '~/types';

export const Search = component$(() => {
  const navigate = useNavigate();
  const { params } = useLocation();
  const { api } = params;
  const comboboxRootRef = useSignal<Element>();
  const comboboxPopoverWidth = useSignal(0);
  const isSearchReady = useSignal(false);
  const isSearchOpen = useSignal(false);
  const searchValue = useSignal('');
  const searchResults = useSignal<ImdbSearchItem[]>([]);
  const tvSeriesDictionary: TvSeriesDictionary = {};
  // Trigger search conservatively.
  const { debounce } = useDebounce$<typeof searchValue.value>(
    (value) => {
      if (!window.minisearch) {
        return;
      }

      // Get minisearch top results.
      searchResults.value = (window.minisearch.search(value) as MiniSearchSearchResult[])
        .slice(0, 10)
        .map(({ [TvData.tconst]: tvSeriesId }) => tvSeriesDictionary[tvSeriesId])
        .sort((a, b) => b[TvData.numVotes] - a[TvData.numVotes]);

      if (searchResults.value.length !== 0) {
        isSearchOpen.value = true;
      }
    },
    { delay: 10, threshold: 1 },
  );

  useVisibleTask$(async () => {
    if (window.minisearch && window.minisearch.documentCount !== 0) {
      isSearchReady.value = true;
      return;
    }

    const { data, isSuccess } = await Api.get()[api as keyof typeof TvApi]().tv().search().fetch();

    // Ensure minisearch exists on window object.
    if (!window.minisearch) {
      window.minisearch = new MiniSearch({
        idField: TvData.tconst,
        fields: [TvData.tconst, TvData.primaryTitle, TvData.startYear],
        searchOptions: {
          boost: { [TvData.numVotes]: 2 },
          fuzzy: 0.2,
          prefix: true,
        },
      });
    }

    if (isSuccess && !!data) {
      // Add data to minisearch.
      window.minisearch.addAll(data);
      // Create dictionary from data.
      for (let i = 0; i < data.length; i++) {
        const searchItem = data[i];
        tvSeriesDictionary[searchItem[TvData.tconst]] = searchItem;
      }
      isSearchReady.value = true;
    }
  });

  useVisibleTask$(({ track }) => {
    track(searchValue);
    debounce(searchValue.value);
  });

  useVisibleTask$(({ track }) => {
    track(isSearchOpen);

    if (searchValue.value.length === 0) {
      isSearchOpen.value = false;
    }
  });

  const setPopoverWidth = $(() => {
    if (comboboxRootRef.value) {
      comboboxPopoverWidth.value = comboboxRootRef.value.getBoundingClientRect().width;
    }
  });

  // Set the popover width when first mounted, and on any resize.
  useVisibleTask$(() => setPopoverWidth());
  useOnWindow('resize', setPopoverWidth);

  const navigateToTvSeries: PropsOf<(typeof Combobox)['Root']>['onChange$'] = $((id: string | string[]) => {
    // We only expect a string, since we are not using combobox multi select.
    if (typeof id === 'string') {
      navigate(`${APP_URL_TV}${api}/${UrlBuilder.query({ id })}`);
    }

    isSearchOpen.value = false;
    searchValue.value = '';
    searchResults.value = [];
  });

  return (
    <Combobox.Root placeholder="The Office" ref={comboboxRootRef} bind:open={isSearchOpen} filter={false} onChange$={navigateToTvSeries}>
      <Combobox.Label>TV Series</Combobox.Label>
      <Combobox.Control>
        <Combobox.Input bind:value={searchValue} />
        <Combobox.Trigger>
          <LuChevronDown />
        </Combobox.Trigger>
      </Combobox.Control>
      <Combobox.Popover floating="bottom-start" style={{ width: comboboxPopoverWidth.value }}>
        {isSearchReady.value === true ? (
          searchValue.value.length > 0 ? (
            searchResults.value.map(({ [TvData.tconst]: id, [TvData.primaryTitle]: primaryTitle, [TvData.startYear]: startYear }) => (
              <Combobox.Item key={id} value={id}>
                <Combobox.ItemLabel>{primaryTitle}</Combobox.ItemLabel>
                <span>{startYear}</span>
              </Combobox.Item>
            ))
          ) : (
            <Combobox.Item key="empty" value="empty">
              <Combobox.ItemLabel>
                <span class="pr-2">&#40;◔_◔&#41;</span>
                <span>You need to give me something to search...</span>
              </Combobox.ItemLabel>
            </Combobox.Item>
          )
        ) : (
          <Combobox.Item key="error" value="error">
            <Combobox.ItemLabel>
              <span class="pr-2">&#40;◕︵◕&#41;</span>
              <span>I’m sorry, but I have nothing to search...</span>
            </Combobox.ItemLabel>
          </Combobox.Item>
        )}
      </Combobox.Popover>
    </Combobox.Root>
  );
});
