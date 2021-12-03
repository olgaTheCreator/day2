const fs = require('fs')
const data = fs.readFileSync('input.txt', 'utf8')

let horizontal = 0;
let depth = 0;
const arr = data

    .split('\n')
    .map(a => a.split(' '))
    .map(a => [a[0], parseInt(a[1])])
    .forEach(a=> a[0] == 'forward'? horizontal+= a[1]: a[0]== 'down'? depth+= a[1]: depth-= a[1]);

console.log(horizontal, depth);

result = horizontal * depth;
console.log(result);