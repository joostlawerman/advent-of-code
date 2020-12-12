const fs = require('fs');
const path = require('path');


fs.readFile(path.resolve(__dirname, "../resources/report.txt"), "utf8", (err, contents) => {
  let entries = contents.split("\n")
    .filter(i => i !== "")
    .map(i => parseInt(i));

  let a, b;

  for (let i of entries) {
    b = entries.find(
      j => entries.indexOf((2020 - i) - j) > -1
    )

    if (b) {
      a = i;
      break;
    }
  }

  console.log("Result: " + (a * b * (2020 - a - b)));
})

