const fs = require("fs");
const path = require("path");

fs.readFile(
  path.resolve(__dirname, "../input.txt"),
  "utf8",
  (err, contents) => {
    let entries = contents
      .split("\n")
      .filter((i) => i !== "")
      .map((i) => parseInt(i));

    let windows = []

    for (let index = 0; index < entries.length - 2; index++) {
      windows.push(
        entries.slice(index, index + 3)
          .reduce((c, e) => c + e)
      );
    }

    let last = windows[0],
      count = 0;

    for (const entry of windows) {
      if (last < entry) {
        count++
      }
      last = entry
    }

    console.log("Result: " + count);
  }
);
