#!/usr/bin/node
/*
    Print a square with the character #
    
    The size of the square must be the first argument 
    of the program.
*/


if (process.argv.length <= 2) {
    process.stderr.write("Missing size\n");
    process.exit(1)
}

/* 
la chaîne soit interprétée en base décimale (base 10), c’est-à-dire le système numérique habituel.
*/
const size = parseInt(process.argv[2], 10)

if (isNaN(size)) {
  process.stderr.write("size must be integer\n")
  process.exit(1)
}

if (size < 1) {
  process.stderr.write("size must be > 0\n")
  process.exit(1)
}

for (let i = 0 ; i < size ; i ++) {
    for (let j = 0 ; j < size ; j ++) {
        process.stdout.write("#");
    }
    process.stdout.write("\n");
}
