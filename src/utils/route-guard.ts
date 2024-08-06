import type { RequestEvent } from '@builder.io/qwik-city';

export interface RouteGuardConfig {
  /**
   * Ensure the route ends with a slash as it is what is in the canonical, reducing the number of redirects.
   */
  redirect: `${string}/`;
  /**
   * URL slug to watch.
   *
   * If `slug` is equal to `'id'`, then `/id/*` URL paths will be watched.
   */
  slug: string;
  /**
   *
   */
  whitelist: string[];
}

export class RouteGuard {
  private redirect: string;
  private slug: string;
  private whitelist: Set<string>;

  public guard(request: RequestEvent) {
    const slug: string | undefined = request.params[this.slug];

    // Only guard against routes which contain `slug`
    if (slug && !this.whitelist.has(slug)) {
      throw request.redirect(302, this.redirect);
    }
  }

  /**
   * Create a new route guard.
   * @param param0 config.
   * @example
   * ```ts
   * const routeGuard = new RouteGuard({
   *   redirect: '/',
   *   slug: 'id',
   *   whitelist: ['profile', 'settings']
   * });
   *
   * export const onGet: RequestHandler = async (request) => {
   *   // Disallow: /*
   *   // Allow: /profile/*
   *   // Allow: /settings/*
   *   routeGuard.guard(request);
   * };
   * ```
   */
  constructor({ redirect, slug, whitelist }: RouteGuardConfig) {
    this.redirect = redirect;
    this.slug = slug;
    this.whitelist = new Set(whitelist);
  }
}
