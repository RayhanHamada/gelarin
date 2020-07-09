import path from 'path';
import fs from 'fs';
import os from 'os';

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
