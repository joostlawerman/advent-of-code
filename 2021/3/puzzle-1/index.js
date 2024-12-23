const fs = require("fs");
const path = require("path");

fs.readFile(
  path.resolve(__dirname, "../input.txt"),
  "utf8",
  (err, contents) => {
    let entries = contents.split("\n").filter((i) => i !== "");

    entries = entries.reduce(
      (c, entry) => {
        entry.split().forEach((e, i) => {
          if (e === "1") {
            c[i]++;
          }
        });
        return c;
      },
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    );

    let depth = 0,
      horizontal = 0,
      aim = 0;

    for (const entry of entries) {
      switch (entry.movement) {
        case "forward":
          horizontal += entry.amount;
          depth += aim * entry.amount;
          break;
        case "up":
          aim -= entry.amount;
          break;
        case "down":
          aim += entry.amount;
          break;
      }
    }

    console.log("Result: " + depth * horizontal);
  }
);
