import fs from 'fs';
import path from 'path';

export const getFile = (file: string) => {
  const appRoot = globalThis.appRoot;
  return fs.readFileSync(path.join(appRoot, file));
};
