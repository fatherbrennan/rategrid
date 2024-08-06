import { UrlBuilder } from './url';

import { noSerialize } from '@builder.io/qwik';

import type { NoSerialize } from '@builder.io/qwik';

import { TV } from '~/constants';
import type { UrlBuilderQueryParams } from './url';

export interface ApiRequestProps {
  baseUrl: string;
  params: UrlBuilderQueryParams;
  /** @default 'json' */
  responseType: keyof Pick<Response, 'arrayBuffer' | 'blob' | 'json' | 'text'>;
  requestInit: RequestInit;
}

export interface ApiResponse<T> {
  controller: NoSerialize<AbortController>;
  /**
   * The expected response on `isSuccess = true`.
   */
  data: T | null;
  /**
   * If the request failed due to an exception.
   */
  hasException: boolean;
  /**
   * Request was purposly aborted.
   */
  isAborted: boolean;
  /**
   * If the request was successful, inclusive of response status code.
   */
  isSuccess: boolean;
}

export interface Tmdb {
  token: string;
}

export interface TmdbError {
  status_code: number;
  status_message: string;
  success: false;
}

export interface TmdbSearchTvParams extends UrlBuilderQueryParams {
  /**
   * Search string.
   */
  query: string;
  /**
   * Search only the first air date. Valid values are: 1000..9999
   */
  first_air_date_year?: number;
  /** @default false */
  include_adult?: boolean;
  /** @default 'en-US' */
  language?: string;
  /** @default 1 */
  page?: number;
  /**
   * Search the first air date and all episode air dates. Valid values are: `1000..9999`
   */
  year?: number;
}

export interface TmdbSearchTvData {
  page: number;
  results: {
    /** @default true */
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    first_air_date: string;
    name: string;
    vote_average: number;
    vote_count: number;
  }[];
  total_pages: number;
  total_results: number;
}

export interface TmdbDetailsParams extends UrlBuilderQueryParams {
  /**
   * TMDB ID.
   */
  id: number;
}

export interface TmdbDetailsTvParams extends UrlBuilderQueryParams {}

export interface TmdbDetailsTvData {
  /** @default true */
  adult: boolean;
  backdrop_path: string;
  created_by: {
    /** @default 0 */
    id: number;
    credit_id: string;
    name: string;
    /** @default 0 */
    gender: number;
    profile_path: string;
  }[];
  episode_run_time: number[];
  first_air_date: string;
  genres: {
    /** @default 0 */
    id: number;
    name: string;
  }[];
  homepage: string;
  /** @default 0 */
  id: number;
  /** @default true */
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: {
    /** @default 0 */
    id: number;
    name: string;
    overview: string;
    /** @default 0 */
    vote_average: number;
    /** @default 0 */
    vote_count: number;
    air_date: string;
    /** @default 0 */
    episode_number: number;
    production_code: string;
    /** @default 0 */
    runtime: number;
    /** @default 0 */
    season_number: number;
    /** @default 0 */
    show_id: number;
    still_path: string;
  };
  name: string;
  next_episode_to_air: string;
  networks: {
    /** @default 0 */
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  /** @default 0 */
  number_of_episodes: number;
  /** @default 0 */
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  /** @default 0 */
  popularity: number;
  poster_path: string;
  production_companies: {
    /** @default 0 */
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  seasons: {
    air_date: string;
    /** @default 0 */
    episode_count: number;
    /** @default 0 */
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    /** @default 0 */
    season_number: number;
    /** @default 0 */
    vote_average: number;
  }[];
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  type: string;
  /** @default 0 */
  vote_average: number;
  /** @default 0 */
  vote_count: number;
}

class ApiRequest {
  public baseUrl: ApiRequestProps['baseUrl'] = '';
  public params: ApiRequestProps['params'] = {};
  public requestInit: ApiRequestProps['requestInit'] = {};
  public responseType: ApiRequestProps['responseType'] = 'json';

  constructor(request: Partial<ApiRequestProps>, baseRequest?: ApiRequest) {
    if (baseRequest) {
      this.baseUrl = baseRequest.baseUrl;
      this.params = baseRequest.params;
      this.requestInit = baseRequest.requestInit;
      this.responseType = baseRequest.responseType;
    }

    request.baseUrl && (this.baseUrl += request.baseUrl);
    this.params = { ...this.params, ...request.params };
    this.requestInit = { ...this.requestInit, ...request.requestInit };
    this.responseType = request.responseType ?? this.responseType;
  }
}

export class Api {
  public static async fetch<TDefaultResponse, TResponse = undefined>(request: ApiRequest) {
    // Create controller to allow requests to be aborted
    const controller = noSerialize(new AbortController());
    // Initialize response object
    const response: ApiResponse<TResponse extends undefined ? TDefaultResponse : TResponse> = {
      controller,
      data: null,
      hasException: true,
      isAborted: false,
      isSuccess: false,
    };

    try {
      const r = await fetch(`${request.baseUrl}${UrlBuilder.query(request.params)}`, { signal: controller?.signal, ...request.requestInit });
      const rType = await r[request.responseType]();

      // Build and return response object
      response.isSuccess = r.ok;
      response.hasException = false;
      response.data = rType;
      return response;
    } catch (error: unknown) {
      // Build and return response object
      response.isSuccess = false;
      response.hasException = true;
      // Expected error from aborting
      error instanceof Error && error.name === 'AbortError' && (response.isAborted = true);
      return response;
    }
  }

  /**
   * @example
   * ```ts
   * const { data, hasException, isAborted, isSuccess } = await Api.get()
   *   .tmdb({ token: appStore.env.TMDB_API_TOKEN })
   *   .search()
   *   .tv({ query: 'The Office' });
   * ```
   */
  public static get<TResponse = undefined>() {
    let request = new ApiRequest({ requestInit: { method: 'GET' } });

    return {
      [TV.Api.tmdb]: ({ token }: Tmdb) => {
        request = new ApiRequest(
          {
            baseUrl: 'https://api.themoviedb.org/3',
            requestInit: {
              headers: {
                accept: 'application/json',
                Authorization: `Bearer ${token}`,
              },
            },
          },
          request,
        );

        return {
          search: () => {
            request = new ApiRequest({ baseUrl: '/search' }, request);

            return {
              tv: (params: TmdbSearchTvParams) => {
                request = new ApiRequest({ baseUrl: '/tv', params }, request);

                return this.fetch<TmdbSearchTvData | TmdbError, TResponse>(request);
              },
            };
          },
          details: ({ id }: TmdbDetailsParams) => {
            return {
              tv: (params?: TmdbDetailsTvParams) => {
                let nSeasons: string = '';
                for (let i = 1; i < 21; i++) {
                  nSeasons += `season/${i},`;
                }

                // Always return up to 20 seasons (API's limit, and does not throw exceptions if there are less than 20)
                const allSeasonsParams: UrlBuilderQueryParams = { append_to_response: nSeasons.slice(0, nSeasons.length) };
                request = new ApiRequest({ baseUrl: `/tv/${id}`, ...{ ...allSeasonsParams, ...params } }, request);

                return this.fetch<TmdbDetailsTvData | TmdbError, TResponse>(request);
              },
            };
          },
        };
      },
    };
  }
}

// TODO: The Office: 2316
