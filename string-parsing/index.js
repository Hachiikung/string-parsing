const fs = require('fs')

function getTheLongestWord(input) {

    array = input.replace(/[^A-Za-z-]+/g, ' ').trim().split(' ');

    let result = "";

    for (let s of array)
        s.length > result.length ? result = s : result;

    // return array;
    return result;
}

function getSumOfNumber(input) {

    array = input.replace(/[^0-9]+/g, ' ').trim().split(' ');

    let result = 0;

    for (let n of array)
        result += Number(n);

    // return array;
    return result;
}

let filePath = './input1.txt';
// let filePath = './input2.txt';
// let filePath = './input3.txt';

let input = fs.readFileSync(filePath, 'utf8');

console.log(getTheLongestWord(input));
console.log(getSumOfNumber(input));
