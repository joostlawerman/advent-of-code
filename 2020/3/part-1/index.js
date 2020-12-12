const fs = require('fs');
const path = require('path');

const regexp = /([0-9]+)-([0-9]+) ([A-z]): ([A-z]+)/g;


fs.readFile(path.resolve(__dirname, "../resources/slope.txt"), "utf8", (err, contents) => {
  let entries = contents.split("\n")
    .filter(i => i !== "");

  let trees = 0;

  console.log(entries[0].length)

  let x = 0;

  for (let y = 0; y < entries.length; y++) {
    if (entries[y][x] === "#") {
      trees++;
    }

    x += 3;
    if (x >= entries[y].length) {
      x = x - entries[y].length;
    }
  }

  console.log("Result: " + trees);
})

