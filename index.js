const { argv } = require("yargs");
const data = require("./data.json");

if (argv.n <= 0 || argv.n > data.length / 2) {
  console.log("Please check n value and try again.");
  process.exit(1);
}

const count = argv.n || 1;

const result = [];

data.sort((a, b) => 0.5 - Math.random());

for (let i = 0; i < count; i++) {
  const object = {
    presenter: data.pop(),
    reviewer: data.pop(),
  };
  result.push(object);
}

console.log("\n");
console.log("🎉", result, "🎉");
console.log("\n");
