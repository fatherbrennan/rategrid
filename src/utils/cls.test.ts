/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { describe, expect, test } from 'vitest';

import { cls } from './cls';

describe('class utility', async () => {
  test('falsy types', async () => {
    expect(cls(false && 'class1')).toBe('');
    expect(cls(false && 'class1', false && 'class2')).toBe('');
    expect(cls(null && 'class1', null && 'class2')).toBe('');
    expect(cls(undefined && 'class1', undefined && 'class2')).toBe('');
    expect(cls(void 0 && 'class1', !!0 && 'class2')).toBe('');
    expect(cls(false && 'class1', undefined && 'class2', null && 'class3', void 0 && 'class4', !!0 && 'class5')).toBe('');
  });

  test('truthy types', async () => {
    expect(cls(true && 'class1')).toBe('class1');
    expect(cls(true && 'class1', true && 'class2')).toBe('class1 class2');
    expect(cls(!undefined && 'class1', !undefined && 'class2')).toBe('class1 class2');
    expect(cls(!void 0 && 'class1', !0 && 'class2')).toBe('class1 class2');
    expect(cls(true && 'class1', !undefined && 'class2', !null && 'class3', !void 0 && 'class4', !0 && 'class5')).toBe('class1 class2 class3 class4 class5');
  });

  test('typical usage', async () => {
    expect(cls('class1')).toBe('class1');
    expect(cls(true && 'class1', 'class2', false && 'class3', 'class4')).toBe('class1 class2 class4');
    expect(cls('class1', 'class2', 'class3 class4', undefined && 'class5', !false && 'class6')).toBe('class1 class2 class3 class4 class6');
  });
});
