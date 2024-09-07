import { noSerialize } from '@builder.io/qwik';

import { TV } from '~/constants';
import { UrlBuilder } from './url';

import type { NoSerialize } from '@builder.io/qwik';

import type { TvSeries } from '~/types';
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

export interface GitHubError {
  status_code: number;
  status_message: string;
  success: false;
}

export interface GitHubSearchTvParams extends UrlBuilderQueryParams {
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

export interface GitHubSearchTvData {
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

export interface GitHubDetailsParams extends UrlBuilderQueryParams {
  /**
   * GitHub ID (same as IMDb ID).
   */
  id: string;
}

export interface GitHubDetailsTvParams extends UrlBuilderQueryParams {}

export interface GitHubDetailsTvData extends TvSeries {}

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
   *   .github()
   *   .search()
   *   .tv({ query: 'The Office' });
   * ```
   */
  public static get<TResponse = undefined>() {
    let request = new ApiRequest({ requestInit: { method: 'GET' } });

    return {
      [TV.Api.github]: () => {
        request = new ApiRequest(
          {
            baseUrl: '',
            requestInit: {
              headers: {
                accept: 'application/json',
              },
            },
          },
          request,
        );

        return {
          search: () => {
            request = new ApiRequest({ baseUrl: '/search' }, request);

            return {
              tv: (params: GitHubSearchTvParams) => {
                request = new ApiRequest({ baseUrl: '/tv', params }, request);

                return this.fetch<GitHubSearchTvData | GitHubError, TResponse>(request);
              },
            };
          },
          details: ({ id }: GitHubDetailsParams) => {
            return {
              tv: () => {
                // request = new ApiRequest({ baseUrl: `/tv/${id}` }, request);

                // TODO: Dev
                console.log(id);

                // return this.fetch<GitHubDetailsTvData | GitHubError, TResponse>(request);

                // TODO: Dev dummy data
                const response: ApiResponse<GitHubDetailsTvData> = {
                  controller: noSerialize(new AbortController()),
                  // TODO: Dev
                  data: null,
                  hasException: false,
                  isAborted: false,
                  isSuccess: true,
                };
                return response;
              },
            };
          },
        };
      },
    };
  }
}
