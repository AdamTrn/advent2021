import {readInput} from "../read.js";

function parseInput(line: string): Array<string> {
  return line.split("")
}

function transpose<T>(m: Array<Array<T>>): Array<Array<T>> {
  return m[0].map((_, index) => m.map(row => row[index]))
}

function adv3() {
  let data: Array<Array<string>> = readInput('3/in.txt', parseInput);
  // Weird bug where the second value in the array was parsed to NaN
  // let numData = data.map(value => value.map(parseInt))


  // The idea is to make a matrix of the inputs and transpose it
  // , so that we have the relevant columns in a row
  let ret = transpose(data)
    .map(row => {
      return row
        .map(value => parseInt(value))
        // Reduce each row to [count0, count1]
        .reduce((acc, cur) => {
          acc[cur]++
          return acc
        },[0,0])
        // Take the higher one
        .reduce((maxIndex, cur, curIndex, arr) => {
          return cur > arr[maxIndex] ? curIndex : maxIndex
        }, 0)
    })
    // [gamma, epsilon]
    .reduce((acc, value) => {
      acc[0] = (acc[0] << 1) | value
      acc[1] = (acc[1] << 1) | 1 - value
      return [...acc]
    }, [0,0])

  console.log(ret[0] * ret[1])
  // let data2: Array<number> = readInput('3/in2.txt', parseInput);
}

adv3();