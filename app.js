// Module imports
const fs = require('fs')

// File imports
const day1 = require('./Day-1/Day-1')
const day2 = require('./Day-2/Day-2')
const day3 = require('./Day-3/Day-3')

// Utility
const readInputFile = (numDay, primitiveType) => {
    return fs.readFileSync(`./Day-${numDay}/input`)
                .toString()
                .split('\n')
                .map(primitiveType)
}

///////////////////////// Day 1 \\\\\\\\\\\\\\\\\\\\\\\\\
const day1Data = readInputFile(1, Number)
const day1Part1 = day1.part1(day1Data)
const day1Part2 = day1.part2(day1Data)

console.log('\n> Day 1');
console.log(' - Part 1:', day1Part1);
console.log(' - Part 2:', day1Part2);

///////////////////////// Day 2 \\\\\\\\\\\\\\\\\\\\\\\\\
const day2Data = readInputFile(2, String)
const day2Part1 = day2.part1(day2Data)
const day2Part2 = day2.part2(day2Data)

console.log('\n> Day 2');
console.log(' - Part 1:', day2Part1);
console.log(' - Part 2:', day2Part2);

///////////////////////// Day 3 \\\\\\\\\\\\\\\\\\\\\\\\\
const day3Data = readInputFile(3, String)
const day3Part1 = day3.part1(day2Data)
const day3Part2 = day3.part2(day2Data)

console.log('\n> Day 3');
console.log(' - Part 1:', day3Part1);
console.log(' - Part 2:', day3Part2);