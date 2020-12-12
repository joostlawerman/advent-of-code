const fs = require('fs');
const path = require('path');

const regexp = /([0-9]+)-([0-9]+) ([A-z]): ([A-z]+)/g;


fs.readFile(path.resolve(__dirname, "../resources/passwords.txt"), "utf8", (err, contents) => {
  let entries = contents.split("\n")
    .filter(i => i !== "");


  let correctEntries = entries.filter(i => {
    const groups = Array.from(i.matchAll(regexp), m => [m[1], m[2], m[3], m[4]])[0];

    const min = groups[0],
      max = groups[1],
      letter = groups[2],
      password = groups[3];

    let matches = password
      .split("")
      .filter(l => l === letter);

    return matches.length >= min && matches.length <= max
  })

  console.log("Result: " + correctEntries.length);
})

