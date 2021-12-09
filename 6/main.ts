import {readInput} from "../read.js";

function parseInput(line: string): Array<number> {
  return line.split(',').map(value => parseInt(value));
}

function solve(d: number, counts: Array<number>): number {
  return Array(d).fill(null).reduce((acc) => {
    return acc.map((value, index) => {
      if (index == 6) {
        return acc[7] + acc[0];
      } else if (index == 8) {
        return acc[0];
      } else {
        return acc[index + 1]
      }
    });
  }, counts)
    .reduce((acc, cur) => acc + cur);
}

function adv() {
  const input: Array<number> = readInput('6/in.txt', parseInput).flat();
  const d1 = 80;
  const d2 = 256;

  let counts = input.reduce((acc, cur) => {
    acc[cur] += 1;
    return acc;
  }, Array(9).fill(0));

  console.log(BigInt(solve(d1, counts)));
  console.log(BigInt(solve(d2, counts)));
}

adv();