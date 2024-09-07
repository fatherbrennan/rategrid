import { component$, Resource, useResource$ } from '@builder.io/qwik';
import { useLocation, useNavigate } from '@builder.io/qwik-city';

import { Data, TV, Unknown } from '~/constants';
import { Api } from '~/utils/api';
import { cls } from '~/utils/cls';

export default component$(() => {
  const { params } = useLocation();
  const { api, id } = params;
  const nav = useNavigate();

  // TODO: Request data from the API, if no data is returned, then redirect guard

  // Throw if an invalid API or something other than a string is provided as the ID
  if (!(api in TV.Api) || typeof id !== 'string') {
    nav('/tv', { replaceState: true });
  }

  const tvResource = useResource$(async () => {
    return await Api.get()[api as keyof typeof TV.Api]().details({ id }).tv();
  });

  return (
    <div>
      <Resource
        value={tvResource}
        onResolved={({ data, isSuccess }) => {
          if (!isSuccess || !data || 'success' in data) {
            // TODO: Show UI error message
            return;
          }

          return (
            <>
              <h2 class="text-2xl font-bold italic">{data[Data.ImdbTitleBasic.primaryTitle.map] ?? Unknown.String}</h2>

              {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

              <div>
                <table class="rategrid">
                  <thead>
                    <tr>
                      <th></th>
                      {data[Data.Generated.seasons.map].map((season) => (
                        <th key={season}>{season}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data[Data.Generated.episodes.map].map((episode) => {
                      return (
                        <tr key={episode}>
                          <td>{episode}</td>
                          {data[Data.Generated.seasons.map].map((season) => {
                            const episodeDetails = data[Data.Generated.map.map][season]?.[episode] ?? {
                              [Data.ImdbTitleBasic.tconst.map]: '',
                              [Data.ImdbTitleBasic.primaryTitle.map]: Unknown.String,
                              [Data.ImdbTitleRating.averageRating.map]: Unknown.Rating,
                              [Data.ImdbTitleRating.numVotes.map]: Unknown.Number,
                            };

                            return (
                              <td
                                key={`${season}-${episode}`}
                                class={cls(
                                  episodeDetails[Data.ImdbTitleRating.averageRating.map] !== null &&
                                    `text-${~~episodeDetails[Data.ImdbTitleRating.averageRating.map]! > 6 ? 'paper' : 'ink'} bg-rating-${~~episodeDetails[Data.ImdbTitleRating.averageRating.map]!}`,
                                )}
                                title={episodeDetails[Data.ImdbTitleBasic.primaryTitle.map] ?? undefined}
                              >
                                {episodeDetails[Data.ImdbTitleRating.averageRating.map]}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </>
          );
        }}
        onPending={() => <h1>Pending</h1>}
        onRejected={() => <h1>Rejected</h1>}
      />
    </div>
  );
});

// TODO: Use https://www.npmjs.com/package/html-to-image for HTML to image.
// TODO: Use https://www.npmjs.com/package/minisearch for search engine.
