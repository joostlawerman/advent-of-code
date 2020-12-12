const fs = require('fs');
const path = require('path');

const regexp = /([0-9]+)-([0-9]+) ([A-z]): ([A-z]+)/g;


fs.readFile(path.resolve(__dirname, "../resources/slope.txt"), "utf8", (err, contents) => {
  let entries = contents.split("\n")
    .filter(i => i !== "");

  const trees = calculateInteractions(entries, 1, 1)
    * calculateInteractions(entries, 1, 3)
    * calculateInteractions(entries, 1, 5)
    * calculateInteractions(entries, 1, 7)
    * calculateInteractions(entries, 2, 1)

  console.log("Result: " + trees);
})


function calculateInteractions(entries = [], yInc = 1, xInc = 3) {
  let trees = 0,
    x = 0;

  for (let y = 0; y < entries.length; y += yInc) {
    if (entries[y][x] === "#") {
      trees++;
    }

    // console.log(x + " \t " +  trees + ": \t " + entries[y].substring(0, x) + (entries[y][x] === "#" ? "X" : "O") + entries[y].substring(x + 1) + " \t \t " + entries[y]);

    x += xInc;
    if (x >= entries[y].length) {
      x = x - entries[y].length;
    }
  }

  return trees;
}

