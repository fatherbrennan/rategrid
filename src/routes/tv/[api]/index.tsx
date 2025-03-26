import { $, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { useLocation, useNavigate } from '@builder.io/qwik-city';
import { Api } from '@fatherbrennan/api/dist/api';
import { TvData } from '@fatherbrennan/api/dist/imdb';
import { LuChevronsLeftRight, LuChevronsRightLeft } from '@qwikest/icons/lucide';

import { Heading, Section } from '~/components';
import { TvApi, TvApis } from '~/constants';
import { useAppState } from '~/hooks/useAppState';
import { cls } from '~/utils/cls';

import type { DocumentHead, StaticGenerateHandler } from '@builder.io/qwik-city';
import type { ImdbEpisode, ImdbTvSeriesDetails } from '@fatherbrennan/api/dist/imdb';

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return {
    params: TvApis.map((api) => ({ api })),
  };
};

export const head: DocumentHead = {
  title: 'tv | rategrid',
  meta: [{ name: 'description', content: 'Display information related to television series in a clean way.' }],
};

export default component$(() => {
  const { url, params } = useLocation();
  const { api } = params;
  const { searchParams } = url;
  const id = useSignal('');
  const navigate = useNavigate();
  const app = useAppState();
  const tvApiData = useSignal<ImdbTvSeriesDetails | null>(null);
  const unknownEpisode: ImdbEpisode = {
    [TvData.tconst]: '',
    [TvData.primaryTitle]: '',
    [TvData.averageRating]: 0,
    [TvData.numVotes]: 0,
  };

  useVisibleTask$(async ({ track }) => {
    track(() => api);
    track(() => searchParams);

    if (!(api in TvApi)) {
      navigate(new URL('/rategrid/tv', url).toString(), { replaceState: true });
      tvApiData.value = null;
    }

    id.value = searchParams.get('id') ?? '';

    const data = (await Api.get()[api as keyof typeof TvApi]().tv().details({ id: id.value }).fetch()).data;
    window.document.title = `${data === null ? ':(' : `${data[TvData.primaryTitle]} (${data[TvData.startYear]})`} | tv | rategrid`;
    tvApiData.value = data;
  });

  const toggleFullscreen = $(() => {
    app.isFullscreen = !app.isFullscreen;
  });

  return id.value === '' ? (
    <>&#40;/◔ ◡ ◔&#41;/</>
  ) : tvApiData.value === null ? (
    <Section>
      <p>
        You might know <span class="bg-paper-9">{id.value}</span>, but i haven't heard of it :&#40;
      </p>
    </Section>
  ) : (
    <Section class={cls('grow gap-y-6', app.isFullscreen && 'h-main', !app.isFullscreen && 'pb-12')}>
      <div class="gap-y-1">
        <Heading level={2}>{tvApiData.value[TvData.primaryTitle]}</Heading>
        <div class="text-ink-5 overflow-hidden text-xs text-ellipsis whitespace-nowrap">
          <span>
            {tvApiData.value[TvData.startYear]} - {tvApiData.value[TvData.endYear]}
          </span>
          <span class="px-2">|</span>
          <span>{tvApiData.value[TvData.averageRating]}</span>
          <span class="px-2">|</span>
          <span>{tvApiData.value[TvData.genres].join(', ')}</span>
        </div>
      </div>

      <div class="grow overflow-auto">
        <div class="rategrid" role="region" aria-label="ratings table" tabIndex={0}>
          <table>
            <thead>
              <tr>
                <th>
                  <div>
                    <button type="button" title={`Click to ${app.isFullscreen ? 'enter' : 'exit'} fullscreen`} onClick$={toggleFullscreen} class="cursor-pointer">
                      {app.isFullscreen ? (
                        <LuChevronsRightLeft class="icon-collapse" aria-label="collapse icon" />
                      ) : (
                        <LuChevronsLeftRight class="icon-expand" aria-label="expand icon" />
                      )}
                    </button>
                  </div>
                </th>
                {tvApiData.value[TvData.seasonsIndex].map((season) => (
                  <th key={season}>
                    <div>{season}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tvApiData.value[TvData.episodeIndex].map((episode) => {
                return (
                  <tr key={episode}>
                    <th>
                      <div>{episode}</div>
                    </th>
                    {tvApiData.value![TvData.seasonsIndex].map((season) => {
                      const episodeDetails = tvApiData.value![TvData.episodeMap]?.[season]?.[episode] ?? unknownEpisode;
                      const averageRatingAsInteger = ~~episodeDetails[TvData.averageRating];

                      return (
                        <td
                          key={`${season}-${episode}`}
                          class={cls(episodeDetails[TvData.averageRating] !== unknownEpisode[TvData.averageRating] && `text-white bg-rating-${averageRatingAsInteger - 1}`)}
                          title={episodeDetails[TvData.primaryTitle]}
                        >
                          <div>{episodeDetails[TvData.averageRating] !== unknownEpisode[TvData.averageRating] ? episodeDetails[TvData.averageRating] : ''}</div>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
});
