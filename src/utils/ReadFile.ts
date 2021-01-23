import { readFile } from 'fs';

export const getFile = (filePath: string, cb: (data: string[]) => void): void => {
  readFile(filePath, 'utf-8' ,(err, data) => {
    const array = data.split('\r\n');
    cb(array);
  });
};
