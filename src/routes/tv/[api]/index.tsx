import { $, component$, useComputed$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { useLocation, useNavigate } from '@builder.io/qwik-city';
import { Api } from '@fatherbrennan/api/dist/api';
import { TvData } from '@fatherbrennan/api/dist/imdb';
import { LuChevronsLeftRight, LuChevronsRightLeft } from '@qwikest/icons/lucide';

import { Async, Heading, Section } from '~/components';
import { META_URL_TV_PATHNAME, OpenGraph, TvApi, TvApis } from '~/constants';
import { useAppState } from '~/hooks/useAppState';
import { cls } from '~/utils/cls';
import { OpenGraphMeta } from '~/utils/url';

import type { DocumentHead, StaticGenerateHandler } from '@builder.io/qwik-city';
import type { ImdbEpisode, ImdbTvSeriesDetails } from '@fatherbrennan/api/dist/imdb';

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return {
    params: TvApis.map((api) => ({ api })),
  };
};

const title = META_URL_TV_PATHNAME;
const description = 'Display information related to television series in a clean way.';

export const head: DocumentHead = {
  title,
  meta: [{ name: 'description', content: description }, OpenGraphMeta(OpenGraph.Title, title), OpenGraphMeta(OpenGraph.Description, description)],
};

export default component$(() => {
  const { params, url } = useLocation();
  const { api } = params;
  const { search } = url;
  const id = useSignal<ReturnType<URLSearchParams['get']>>(null);
  const navigate = useNavigate();
  const app = useAppState();
  const tvApiData = useSignal<ImdbTvSeriesDetails | null>(null);
  const isPendingId = useSignal(true);
  const isFetchingTvApiData = useSignal(false);
  const isPendingTvApiData = useComputed$(() => id.value !== null && isFetchingTvApiData.value);
  const unknownEpisode: ImdbEpisode = {
    [TvData.tconst]: '',
    [TvData.primaryTitle]: '',
    [TvData.averageRating]: 0,
    [TvData.numVotes]: 0,
  };

  useVisibleTask$(async ({ track }) => {
    track(() => api);
    track(() => search);

    if (!(api in TvApi)) {
      navigate('/rategrid/tv/', { replaceState: true });
      tvApiData.value = null;
    }

    // For whatever reason, the useLocation hook does not return the correct search params on page load.
    const url = new URL(window.location.href);

    id.value = url.searchParams.get('id');
    isPendingId.value = false;

    if (id.value === null) {
      return;
    }

    if (id.value.length === 0) {
      navigate(`/rategrid/tv/${api}/`, { replaceState: true });
      id.value = null;
      return;
    }

    isFetchingTvApiData.value = true;
    const data = (await Api.get()[api as keyof typeof TvApi]().tv().details({ id: id.value }).fetch()).data;

    // Update meta tags.
    const metaOgTitleValue = OpenGraphMeta(OpenGraph.Title, `${data === null ? '' : `${data[TvData.primaryTitle]} (${data[TvData.startYear]}) · `}tv`);
    window.document.title = metaOgTitleValue.content;
    const metaOgTitle = window.document.head.querySelector<HTMLMetaElement>(`meta[property="${metaOgTitleValue.property}"]`);
    const metaOgDescriptionValue = OpenGraphMeta(
      OpenGraph.Description,
      data === null ? description : `Display information about ${data[TvData.primaryTitle]} television series in a clean way.`,
    );
    const metaOgDescription = window.document.head.querySelector<HTMLMetaElement>(`meta[property="${metaOgDescriptionValue.property}"]`);
    if (metaOgDescription) {
      metaOgDescription.content = metaOgDescriptionValue.content;
    }
    if (metaOgTitle) {
      metaOgTitle.content = metaOgTitleValue.content;
    }

    tvApiData.value = data;
    isFetchingTvApiData.value = false;
  });

  const toggleFullscreen = $(() => {
    app.isFullscreen = !app.isFullscreen;
  });

  return (
    <Async
      isPending={isPendingId}
      onPending={<>◔_◔ ...</>}
      onResolved={
        id.value === null ? (
          <>&#40;/◔ ◡ ◔&#41;/</>
        ) : (
          <Async
            delay={1000}
            isPending={isPendingTvApiData}
            onPending={<>◔_◔ ...</>}
            onResolved={
              tvApiData.value !== null ? (
                <Section class={cls('grow gap-y-6', app.isFullscreen && 'h-main', !app.isFullscreen && 'pb-12')}>
                  <div class="gap-y-1">
                    <Heading level={2}>{tvApiData.value[TvData.primaryTitle]}</Heading>
                    <div class="overflow-hidden text-ellipsis whitespace-nowrap text-ink-5 text-xs">
                      <span title="Start and end year">
                        {tvApiData.value[TvData.startYear]} - {tvApiData.value[TvData.endYear]}
                      </span>
                      <span class="px-2">|</span>
                      <span title="Average rating">{tvApiData.value[TvData.averageRating]}</span>
                      <span class="px-2">|</span>
                      <span title="Genres">{tvApiData.value[TvData.genres].join(', ')}</span>
                    </div>
                  </div>

                  <div class="grow overflow-auto">
                    <section class="rategrid" aria-label="ratings table">
                      <table>
                        <thead>
                          <tr>
                            <th>
                              <div>
                                <button type="button" title={`Click to ${app.isFullscreen ? 'exit' : 'enter'} fullscreen`} onClick$={toggleFullscreen} class="cursor-pointer">
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
                                {tvApiData.value?.[TvData.seasonsIndex].map((season) => {
                                  const episodeDetails = tvApiData.value?.[TvData.episodeMap]?.[season]?.[episode] ?? unknownEpisode;
                                  const averageRatingAsInteger = ~~episodeDetails[TvData.averageRating];

                                  return (
                                    <td
                                      key={`${season}-${episode}`}
                                      class={cls(
                                        episodeDetails[TvData.averageRating] !== unknownEpisode[TvData.averageRating] && `text-white bg-rating-${averageRatingAsInteger - 1}`,
                                      )}
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
                    </section>
                  </div>
                </Section>
              ) : (
                <Section>
                  <p>
                    You might know <span class="bg-paper-9 px-2">{id.value}</span>, but i haven't heard of it :&#40;
                  </p>
                </Section>
              )
            }
          />
        )
      }
    />
  );
});
