import fs from 'fs';
import readline from 'readline';

export function readFile(filePath: string): Promise<string[]> {
  return new Promise(resolve => {
    const lineReader = readline.createInterface({
      input: fs.createReadStream(filePath)
    });
    const input = [];
    lineReader.on('line', function (line) {
      input.push(line);
    });

    lineReader.on('close', () => {
      input.push('');
      resolve(input);
    });
  });
}
