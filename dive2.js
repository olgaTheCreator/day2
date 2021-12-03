const fs = require('fs')
const data = fs.readFileSync('input.txt', 'utf8')

let horizontal = 0;
let depth = 0;
let aim = 0;

const calculationOfPosition = (arr) => {
    if (arr[0] == 'forward') {
        horizontal += arr[1];
        depth += arr[1] * aim;
        console.log(depth);
    }
    else if (arr[0] == 'down') {
        aim +=  arr[1];
    }
    else {
        aim -= arr[1];
    }

}

const arr = data
    .split('\n')
    .map(a => a.split(' '))
    .map(a => [a[0], parseInt(a[1])])
    .forEach(a=> calculationOfPosition(a));

result = horizontal * depth;
console.log(result);