#!/usr/bin/node
/*
    Print a square with the character #
    
    The size of the square must be the first argument 
    of the program.
*/


if (process.argv.length <= 2) {
    process.exit(1)
}

const size = parseInt(process.argv[2])

if (isNaN(size)) {
  process.exit(1)
}

if (size < 1) {
  process.exit(1)
}

for (let i = 0 ; i < size ; i ++) {
    for (let j = 0 ; j < size ; j ++) {
        process.stdout.write("#");
    }
    process.stdout.write("\n");
}
