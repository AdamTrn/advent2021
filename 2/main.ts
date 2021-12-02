import {readInput} from "../read.js";


function parseInput(line: string): {s: string; n: number} {
  let tmp = line.split(' ')
  return {s: tmp[0],n: parseInt(tmp[1]) }
}


function adv2() {
  let data: Array<{s: string,n: number}> = readInput('2/in.txt', parseInput);

  let ret = data
    // Map the values to "movements"
    .map(value => {
      switch (value.s) {
      case "forward":
        return [value.n, 0];
      case "down":
        return [0, value.n];
      case "up":
        return [0, -value.n];
      }
    })
    // Sum the movements to get the resulting coordinate
    .reduce((acc, cur) => {
      acc[0] += cur[0];
      acc[1] += cur[1];
      return acc
    })
    // Multiply to get the result
    .reduce((acc, cur) => acc * cur)

  console.log(ret)

  let data2: Array<{s: string,n: number}> = readInput('2/in2.txt', parseInput);

  let ret2 = data2
    // Map to [horizontal movement, aim change]
    .map(value => {
      switch (value.s) {
      case "forward":
        return [value.n, 0];
      case "down":
        return [0, value.n];
      case "up":
        return [0, -value.n];
      }
    })
    // [hor, ver, aim]
    .reduce((acc, cur) => {
      // Update aim
      acc[2] += cur[1]
      // Update coordinates using aim
      acc[0] += cur[0]
      acc[1] += cur[0] * acc[2]

      return acc
    },[0, 0, 0])
    .slice(0,2)
    .reduce((acc, cur) => acc * cur)

  console.log(ret2)
}

adv2();