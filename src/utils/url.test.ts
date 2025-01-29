import { describe, expect, test } from 'vitest';

import { withTrailingSlash } from './url';

describe('url utilities', async () => {
  test('withTrailingSlash', async () => {
    expect(withTrailingSlash('hi')).toBe('hi/');
    expect(withTrailingSlash('hi/')).toBe('hi/');
    expect(withTrailingSlash('hi/there')).toBe('hi/there/');
    expect(withTrailingSlash('hi/there/')).toBe('hi/there/');
    expect(withTrailingSlash('hi/there/123')).toBe('hi/there/123/');
    expect(withTrailingSlash('hi/there/123/')).toBe('hi/there/123/');
  });
});
