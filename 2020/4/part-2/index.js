const fs = require('fs');
const path = require('path');

const requiredFields = {
  "byr": between(1920, 2002),
  "iyr": between(2010, 2020),
  "eyr": between(2020, 2030),
  "hgt": value => {
    const val = parseInt(value.substring(-2)),
      metric = value.substring(value.length-2);
    if (metric === "cm") {
      return val >= 150 && val <= 193
    } else if (metric === "in") {
      return val >= 59 && val <= 76
    }
    return false;
  },
  "hcl": value => !!value.match(/#[0-9A-Fa-f]{6}/g),
  "ecl": value => ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].indexOf(value) > -1,
  "pid": value => !!value.match(/[0-9]{9}/g)
}

function between(min, max) {
  return value =>
    value.length === 4
      && parseInt(value) >= min
      && parseInt(value) <= max
}

fs.readFile(path.resolve(__dirname, "../resources/passports.txt"), "utf8", (err, contents) => {
  let entries = contents.split(/\n\n/)
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
    e => Object.keys(requiredFields)
      .filter(
        field => {
          const val = e.find(i => i.key === field)
          if (!val) {
            return false;
          }
          return requiredFields[field](val.value)
        }
      ).length === Object.keys(requiredFields).length
  );

  console.log("Result: " + correctEntries.length);
})
