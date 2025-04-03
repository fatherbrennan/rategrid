import { describe, expect, test } from 'vitest';

import { hasTrailingQuestionMark, withTrailingSlash } from './url';

describe('url utilities', async () => {
  test('withTrailingSlash', async () => {
    expect(withTrailingSlash('hi')).toBe('hi/');
    expect(withTrailingSlash('hi/')).toBe('hi/');
    expect(withTrailingSlash('hi/there')).toBe('hi/there/');
    expect(withTrailingSlash('hi/there/')).toBe('hi/there/');
    expect(withTrailingSlash('hi/there/123')).toBe('hi/there/123/');
    expect(withTrailingSlash('hi/there/123/')).toBe('hi/there/123/');
  });

  test('hasTrailingQuestionMark', async () => {
    expect(hasTrailingQuestionMark('hi')).toBe(false);
    expect(hasTrailingQuestionMark('hi?')).toBe(true);
    expect(hasTrailingQuestionMark('hi/there')).toBe(false);
    expect(hasTrailingQuestionMark('hi/there?')).toBe(true);
    expect(hasTrailingQuestionMark('hi/there/?')).toBe(true);
    expect(hasTrailingQuestionMark('?hi/there/')).toBe(false);
    expect(hasTrailingQuestionMark('?hi/there/?')).toBe(true);
    expect(hasTrailingQuestionMark('hi/there/?/')).toBe(false);
    expect(hasTrailingQuestionMark('hi/there/?id=')).toBe(false);
    expect(hasTrailingQuestionMark('hi/there/?id=123')).toBe(false);
  });
});
