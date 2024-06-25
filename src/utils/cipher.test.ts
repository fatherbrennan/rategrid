import { describe, expect, test } from 'vitest';

import { Cipher } from './cipher';

describe('cipher in node environment', async () => {
  const password = 'password';
  const data = 'data to encrypt';

  await Cipher.setPassword(password);

  const isArrayBuffersEqual = (arrayBuffer1: ArrayBuffer, arrayBuffer2: ArrayBuffer): boolean => {
    const view1 = new Uint8Array(arrayBuffer1);
    const view2 = new Uint8Array(arrayBuffer2);
    return view1.every((byte, index) => view2[index] === byte);
  };

  const encryptedData = await Cipher.encrypt(data);
  const decryptedData = await Cipher.decrypt(encryptedData);
  const encodedData = await Cipher.encode(encryptedData);
  const decodedData = await Cipher.decode(encodedData);

  test('encrypt data', () => {
    expect(encryptedData.byteLength).toBe(31);
  });

  test('decrypt data', () => {
    expect(decryptedData).toBe(data);
  });

  test('encode data', () => {
    expect(encodedData).toBe('LKm6o9nt9p7UXr91w9GADu2wZsV87iAFGsSf2zJdOw==');
  });

  test('decode data', () => {
    expect(encryptedData.byteLength).toBe(decodedData.byteLength);
    expect(isArrayBuffersEqual(encryptedData, decodedData)).toBeTruthy();
  });

  test('unparse and parse data', async () => {
    const unparsedData = await Cipher.unparse(data);
    const parsedData = await Cipher.parse(unparsedData);
    expect(unparsedData).not.toBe(data);
    expect(parsedData).toBe(data);
  });

  test('create hash digest', async () => {
    const digest = await Cipher.digest(password);
    expect(digest).toBe('b109f3bbbc244eb82441917ed06d618b9008dd09b3befd1b5e07394c706a8bb980b1d7785e5976ec049b46df5f1326af5a2ea6d103fd07c95385ffab0cacbc86');
  });
});
