type EnsureTrailingSlash<T extends string> = T extends `${infer P}/` ? `${P}/` : `${T}/`;

export const withTrailingSlash = <T extends string>(path: T): EnsureTrailingSlash<T> => {
  return /\/$/.test(path) ? (path as unknown as EnsureTrailingSlash<T>) : (`${path}/` as EnsureTrailingSlash<T>);
};
