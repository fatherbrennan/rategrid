import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

import { Cipher } from '../src/utils/cipher';

/**
 * Generate public `env.ts` file from local `.env` by encrypting values.
 */
(async () => {
  const filename = 'env.ts';
  const path = resolve(__dirname, '../', 'src', filename);
  let env = `// Generated file: '${filename}' (encrypted values)\n`;

  try {
    const password: string = import.meta.env.VITE_PASSWORD;

    await Cipher.setPassword(password);

    /**
     * Helper function to generate variable declarations.
     * @param name Variable name.
     * @param value Variable value.
     */
    const addConst = async (name: string, value: string, doNotParse: boolean = false) => {
      env += `export const ${name} = '${doNotParse ? value : await Cipher.unparse(value)}';\n`;
    };

    // Add environment variables
    await addConst('PASSWORD', await Cipher.digest(password), true);
    await addConst('TMDB_API_KEY', import.meta.env.VITE_TMDB_API_KEY);

    // Write to file
    await writeFile(path, env, 'utf8');
  } catch (error) {
    throw new Error(JSON.stringify(error) || `Generating ${filename}.`);
  }
})();
