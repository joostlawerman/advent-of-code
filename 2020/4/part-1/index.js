const fs = require('fs');
const path = require('path');

const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"]

fs.readFile(path.resolve(__dirname, "../resources/passports.txt"), "utf8", (err, contents) => {
  let entries = contents.split("\n\n")
    .filter(i => i !== "")
    .map(
      e => e.split(/[\n ]/)
        .map(prop => {
          const t = prop.split(":")

          return {
            key: t[0],
            value: t[1]
          }
        })

    );

  const correctEntries = entries.filter(
    e => requiredFields.filter(
      field => e.findIndex(i => i.key === field) > -1
    ).length === requiredFields.length
  );

  console.log("Result: " + correctEntries.length);
})
