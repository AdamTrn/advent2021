
import {read} from "fs";
import * as fs from "fs";

type Game = {
  moves: Array<number>
  boards: Array<Board>
}

type Board = {
  board: Array<Array<number>>
}

function readBingo(path: string) {
  let ret: Game = {moves: [], boards: []}
  let data =  fs.readFileSync(path).toString().split('\n')

  ret.moves = data[0].split(',').map(val => parseInt(val))
  for (let i = 0; i < data.length; i++) {

  }
}

function adv4() {
  let game = readBingo('4/test.txt')

  // let data2: Array<number> = readInput('4/in2.txt', parseInput);

}

adv4();