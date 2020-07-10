import path from 'path';
import fs from 'fs';
import os from 'os';

/**
 * @param {function(string, any[]): void} logFunc - function for logging
 */
export async function checkForGelarin(
  logFunc: (msg: string, ...args: any[]) => void
): Promise<boolean> {
  const gelarinPath = path.join(os.homedir(), 'gelarin.json');

  const exists = fs.existsSync(gelarinPath);
  if (!exists) {
    logFunc(
      `gelarin.json not found in ${gelarinPath}, creating new gelarin.json`
    );
    await fs.promises
      .writeFile(gelarinPath, JSON.stringify({}))
      .then(() => {
        logFunc(`gelarin.json created in ${gelarinPath} !`);
      })
      .catch(() => {
        logFunc(`Error when creating gelarin.json in ${gelarinPath} !`);
      });
  }

  return exists;
}

/**
 * @param {string} key - the boilerplate key
 * @param {string} desc - the boilerplate description
 * @param {number} longest - longest key length
 * @return {string} returns properly spaced key and description
 */
export function properSpace(key: string, desc: string, longest: number) {
  let space = '';
  for (let i = 0; i < longest - key.length + 3; i++) space += ' ';
  return `${key}${space}${desc}`;
}
