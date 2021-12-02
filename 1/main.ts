import {readInput} from "../read.js";

function adv1() {
  let data: Array<number> = readInput('1/in.txt', parseInt);
  let ret = data
    .filter((value, index, array) => array[index + 1] > array[index])
    .length;
  console.log(ret);

  let data2: Array<number> = readInput('1/in2.txt', parseInt);
  let ret2 = data2
    .filter((value, index, array) => {
      let w1 = array[index] + array[index + 1] + array[index + 2];
      let w2 = array[index + 1] + array[index + 2] + array[index + 3];
      return w2 > w1;
    }).length;
  console.log(ret2);
}

adv1();