import { describe, expect, test } from 'vitest';

import { ASSET_VERSION, OpenGraph } from '~/constants';
import { OpenGraphMeta, hasTrailingQuestionMark, v, withTrailingSlash } from './url';

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

  test('v', async () => {
    // Would prefer to not use a variable (`ASSET_VERSION`), but we are not going to update the test every time the version changes.
    expect(v('hello')).toBe(`hello?v=${ASSET_VERSION}`);
    expect(v('/hello')).toBe(`/hello?v=${ASSET_VERSION}`);
    expect(v('hello.json')).toBe(`hello.json?v=${ASSET_VERSION}`);
    expect(v('/hello.json')).toBe(`/hello.json?v=${ASSET_VERSION}`);
    expect(v('hello/there.svg')).toBe(`hello/there.svg?v=${ASSET_VERSION}`);
    expect(v('/hello/there.svg')).toBe(`/hello/there.svg?v=${ASSET_VERSION}`);
    expect(v('hello/there.png')).toBe(`hello/there.png?v=${ASSET_VERSION}`);
    expect(v('/hello/there.png')).toBe(`/hello/there.png?v=${ASSET_VERSION}`);
  });

  test('OpenGraphMeta', async () => {
    expect(OpenGraphMeta(OpenGraph.Type, 'image/png')).toEqual({ property: 'og:type', content: 'image/png' });
    expect(OpenGraphMeta(OpenGraph.Title, 'Hello World!')).toEqual({ property: 'og:title', content: 'Hello World!' });
    expect(OpenGraphMeta('description', 'Goodbye World!')).toEqual({ property: 'og:description', content: 'Goodbye World!' });
  });
});
