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

    let last = entries[0],
      count = 0;
    
    for (const entry of entries) {
      if (last < entry) {
        count++
      }
      last = entry
    }
    
    console.log("Result: " + count);
  }
);
