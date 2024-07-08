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

  // Open Env constant
  env += 'export const Env = {';

  try {
    const password: string = import.meta.env.VITE_PASSWORD;

    await Cipher.setPassword(password);

    /**
     * Helper function to generate variable declarations.
     * @param name Variable name.
     * @param value Variable value.
     */
    const addProp = async (name: string, value: string, doNotParse: boolean = false) => {
      env += `\n  ${name}: '${doNotParse ? value : await Cipher.unparse(value)}',`;
    };

    // Add environment variables
    await addProp('PASSWORD_DIGEST', await Cipher.digest(password), true);
    await addProp('TMDB_API_TOKEN', import.meta.env.VITE_TMDB_TOKEN);

    // Close Env constant
    env += '\n};\n';

    // Write to file
    await writeFile(path, env, 'utf8');
  } catch (error) {
    throw new Error(JSON.stringify(error) || `Generating ${filename}.`);
  }
})();
