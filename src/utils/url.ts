import { ASSET_VERSION } from '~/constants';

import type { OpenGraph } from '~/constants';

type EnsureTrailingSlash<T extends string> = T extends `${infer P}/` ? `${P}/` : `${T}/`;

type Versioned<TPath extends string> = `${TPath}?v=${typeof ASSET_VERSION}`;

export const hasTrailingQuestionMark = <T extends string>(path: T): boolean => {
  return /\?$/.test(path);
};

export const withTrailingSlash = <T extends string>(path: T): EnsureTrailingSlash<T> => {
  return /\/$/.test(path) ? (path as unknown as EnsureTrailingSlash<T>) : (`${path}/` as EnsureTrailingSlash<T>);
};

/** Add a version to a path. Used for parameter cache busting for assets. */
export const v = <T extends string>(path: T): Versioned<T> => `${path}?v=${ASSET_VERSION}` as Versioned<T>;

export const OpenGraphMeta = <TProperty extends (typeof OpenGraph)[keyof typeof OpenGraph], TContent extends string>(property: TProperty, content: TContent) => ({
  property: `og:${property}` as const,
  content,
});
