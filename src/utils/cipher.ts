export type Algorithm = AlgorithmIdentifier | RsaOaepParams | AesCtrParams | AesCbcParams | AesGcmParams;

export type EncodedData = string;

export type EncryptedData = ArrayBuffer;

export type DecryptedData = string;

export type Password = string;

export interface CipherEnv {
  crypto: Crypto;
  isBrowser: boolean;
  atob: Window['atob'];
  btoa: Window['btoa'];
}

export class Cipher {
  // Does not use `getRandomValues` for IV because is being used in SSG
  private static algorithm: Algorithm = { name: 'AES-GCM', iv: new Uint8Array(12) };
  private static env: CipherEnv | null = null;
  private static key: Awaited<ReturnType<(typeof Cipher)['generateKey']>>;
  private static password: Password = '';

  /**
   * Initialize Cipher environment variables.
   * - Node: `global`
   * - Browser: `window`
   * @returns Cipher environment variables.
   */
  private static async getEnv() {
    try {
      if (this.env === null) {
        const isBrowser = typeof global === 'undefined';

        this.env = {
          crypto: isBrowser ? window.crypto : ((await import('node:crypto')).webcrypto as Crypto),
          isBrowser,
          atob: isBrowser ? window.atob.bind(window) : global.atob.bind(global),
          btoa: isBrowser ? window.btoa.bind(window) : global.btoa.bind(global),
        };
      }

      return this.env;
    } catch (error) {
      throw 'CipherEnvError';
    }
  }

  private static async generateKey() {
    const env = await this.getEnv();

    const pad = (password: Password, blockSize = 128): ArrayBuffer => {
      const bytes = new TextEncoder().encode(password);
      const padLength = blockSize / 8 - (bytes.length % (blockSize / 8));
      const padBytes = new Uint8Array(bytes.length + padLength);
      padBytes.set(bytes);

      for (let i = bytes.length; i < padBytes.length; i++) {
        padBytes[i] = padLength;
      }

      return padBytes;
    };

    return await env.crypto.subtle.importKey('raw', pad(this.password), this.algorithm, false, ['encrypt', 'decrypt']);
  }

  public static async encrypt(data: DecryptedData): Promise<EncryptedData> {
    const env = await this.getEnv();
    const dataBuffer = new TextEncoder().encode(data);
    return env.crypto.subtle.encrypt(this.algorithm, this.key, dataBuffer);
  }

  public static async decrypt(encryptedData: EncryptedData): Promise<DecryptedData> {
    const env = await this.getEnv();
    const decryptedBuffer = await env.crypto.subtle.decrypt(this.algorithm, this.key, encryptedData);
    return new TextDecoder().decode(decryptedBuffer);
  }

  /**
   * Encode encrypted data using Base64.
   * @param encryptedData Encrypted data.
   * @returns Base64 encoded encrypted data.
   */
  public static async encode(encryptedData: EncryptedData): Promise<EncodedData> {
    const env = await this.getEnv();
    let binary = '';
    const bytes = new Uint8Array(encryptedData);

    for (let i = 0, l = bytes.byteLength; i < l; i++) {
      binary += String.fromCharCode(bytes[i]);
    }

    return env.btoa(binary);
  }

  /**
   * Decode encoded data using Base64.
   * @param encodedData Encoded data.
   * @returns Decoded encrypted data.
   */
  public static async decode(encodedData: EncodedData): Promise<EncryptedData> {
    const env = await this.getEnv();
    const binaryString = env.atob(encodedData);
    const l = binaryString.length;
    const bytes = new Uint8Array(l);

    for (let i = 0; i < l; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    return bytes.buffer;
  }

  /**
   * Generate a hash digest.
   * @param data Plaintext data.
   * @returns Hex encoded `SHA-512` hash digest.
   */
  public static async digest(data: string): Promise<string> {
    const env = await this.getEnv();
    const hashBuffer = await env.crypto.subtle.digest('SHA-512', new TextEncoder().encode(data));
    const hashArray = new Uint8Array(hashBuffer);
    let hashHex = '';

    for (let i = 0, l = hashArray.length; i < l; i++) {
      hashHex += hashArray[i].toString(16).padStart(2, '0');
    }

    return hashHex;
  }

  /**
   * Encrypt and encode data ready for storage.
   * @param data Encrypted data.
   * @returns Encoded, encrypted data.
   */
  public static async unparse(data: DecryptedData): Promise<EncodedData> {
    return await this.encode(await this.encrypt(data));
  }

  /**
   * Decrypt and decode data.
   * @param data Encoded data.
   * @returns Decoded, decrypted data.
   */
  public static async parse(data: EncodedData): Promise<DecryptedData> {
    return await this.decrypt(await this.decode(data));
  }

  /**
   * Set the new password and key used for encryption/decryption.
   * @param password Password for encryption/decryption.
   */
  public static async setPassword(password: Password): Promise<void> {
    this.password = password;
    this.key = await this.generateKey();
  }
}
