const fs = require("fs");
const path = require("path");

fs.readFile(
  path.resolve(__dirname, "../input.txt"),
  "utf8",
  (err, contents) => {
    let entries = contents
      .split("\n")
      .filter((i) => i !== "")

    entries = entries.map(entry => {
      const s = entry.split(" ")
      return {
        "movement": s[0],
        "amount": parseInt(s[1], 10)
      }
    });

    let depth = 0,
      horizontal = 0;

    for (const entry of entries) {
      switch (entry.movement) {
        case 'forward':
          horizontal += entry.amount;
          break;
        case 'up':
          depth -= entry.amount;
          break;
        case 'down':
          depth += entry.amount;
          break;
      }
    }

    console.log("Result: " + (depth * horizontal));
  }
);
