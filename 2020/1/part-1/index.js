const fs = require('fs');
const path = require('path');


fs.readFile(path.resolve(__dirname, "../resources/report.txt"), "utf8", (err, contents) => {
  let entries = contents.split("\n")
    .filter(i => i !== "")
    .map(i => parseInt(i));

  let res = entries.find(
    i => entries.indexOf(2020 - i) > -1
  )

  console.log("Result: " + (res * (2020 - res)));
})

