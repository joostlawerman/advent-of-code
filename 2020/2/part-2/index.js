const fs = require('fs');
const path = require('path');

const regexp = /([0-9]+)-([0-9]+) ([A-z]): ([A-z]+)/g;

fs.readFile(path.resolve(__dirname, "../resources/passwords.txt"), "utf8", (err, contents) => {
  let entries = contents.split("\n")
    .filter(i => i !== "");


  let correctEntries = entries.filter(i => {
    const groups = Array.from(i.matchAll(regexp), m => [m[1], m[2], m[3], m[4]])[0];

    const a = groups[0],
      b = groups[1],
      letter = groups[2],
      password = groups[3];

    return (
      password.charAt(a - 1) === letter && password.charAt(b  - 1) !== letter
    ) || (
      password.charAt(a - 1) !== letter && password.charAt(b  - 1) === letter
    );
  })

  console.log("Result: " + correctEntries.length);
})

