#!/usr/bin/env node

const yargs = require("yargs");

const options = yargs
 .usage("Usage: -p <position [a,1] to [c,3] Range>")
 .option("p", { alias: "position", describe: "Your next position [row, column]", type: "string", demandOption: true })
 .argv;


 var counter = 0;
 var blankTable = '[ ][ ][ ]\n[ ][ ][ ]\n[ ][ ][ ]'
console.log(options.position) //position of 1 and 2 will give you the row and column

if (counter%2===0) {
    var char = 'X'
} else var char  = 'O'

counter++ // Data not persisting currently, it looks like it overwrites the counter since it reinitiates every time
// I may be able to avoid this by just using closure. 
console.log(`It is your turn to add an ${char}`)
console.log(blankTable)

// just hard code each of the