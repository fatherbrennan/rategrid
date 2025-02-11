import { $, component$ } from '@builder.io/qwik';
import { routeLoader$, useLocation } from '@builder.io/qwik-city';
import { Api } from '@fatherbrennan/api/dist/api';
import { TvData } from '@fatherbrennan/api/dist/imdb';

import { Heading, Section } from '~/components';
import { TvApi } from '~/constants';
import { useAppStore } from '~/hooks/useAppStore';
import { cls } from '~/utils/cls';

import type { DocumentHead, RequestHandler } from '@builder.io/qwik-city';
import type { ImdbEpisode } from '@fatherbrennan/api/dist/imdb';

export const head: DocumentHead = ({ resolveValue }) => {
  const tvApiData = resolveValue(useTvApiData);
  return {
    title: `${tvApiData === null ? ':(' : `${tvApiData?.[TvData.primaryTitle] ?? '??'} (${tvApiData?.[TvData.startYear] ?? '??'})`} | tv | rategrid`,
    meta: [{ name: 'description', content: 'Display information related to television series in a clean way.' }],
  };
};

/**
 * Redirect guard if provided with an invalid API.
 */
export const onGet: RequestHandler = async ({ params, redirect, url }) => {
  const { api } = params;
  if (!(api in TvApi)) {
    throw redirect(308, new URL('/tv', url).toString());
  }
};

export const useTvApiData = routeLoader$(async ({ params }) => {
  // `onGet` ensures type safe `api`.
  const { api, id } = params;
  return (await Api.get()[api as keyof typeof TvApi]().tv().details({ id }).fetch()).data;
});

export default component$(() => {
  const { params } = useLocation();
  const { id } = params;
  const app = useAppStore();
  const tvApiData = useTvApiData();
  const unknownEpisode: ImdbEpisode = {
    [TvData.tconst]: '',
    [TvData.primaryTitle]: '',
    [TvData.averageRating]: 0,
    [TvData.numVotes]: 0,
  };

  if (tvApiData.value === null) {
    return (
      <Section>
        <p>
          You might know <span class="bg-paper-9">{id}</span>, but i haven't heard of it :&#40;
        </p>
      </Section>
    );
  }

  const setFullscreen = $(() => {
    app.isFullscreen = true;
  });

  return (
    <>
      <div class="flex max-h-main min-h-main flex-col gap-y-6 overflow-hidden">
        <Section class="gap-y-1">
          <Heading level={2}>{tvApiData.value[TvData.primaryTitle]}</Heading>
          <div class="overflow-hidden text-ellipsis whitespace-nowrap text-xs text-ink-5">
            <span>
              {tvApiData.value[TvData.startYear]} - {tvApiData.value[TvData.endYear]}
            </span>
            <span class="px-2">|</span>
            <span>{tvApiData.value[TvData.averageRating]}</span>
            <span class="px-2">|</span>
            <span>{tvApiData.value[TvData.genres].join(', ')}</span>
          </div>
        </Section>

        <Section class="grow overflow-auto">
          <div class="rategrid" role="region" aria-label="ratings table" tabIndex={0}>
            <table>
              <thead>
                <tr>
                  <th>
                    <div>
                      <button onClick$={setFullscreen}>&lt;&gt;</button>
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
                      {tvApiData.value[TvData.seasonsIndex].map((season) => {
                        const episodeDetails = tvApiData.value[TvData.episodeMap]?.[season]?.[episode] ?? unknownEpisode;
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
        </Section>
      </div>
    </>
  );
});
