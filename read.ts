const fs = require('fs');

export function readInput<T>(path: string, transform: (t: string) => T): Array<T> {
  return fs.readFileSync(path).toString()
    .split('\n')
    .map(value => transform(value));
}