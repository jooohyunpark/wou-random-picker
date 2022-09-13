const data = require("./data.json");

const result = [];

const shuffledData1 = [...data].sort((a, b) => 0.5 - Math.random());
const shuffledData2 = [...data].sort((a, b) => 0.5 - Math.random());

for (let i = 0; i < data.length; i++) {
  const object = {
    presenter: shuffledData1.pop(),
    reviewer: shuffledData2.pop(),
  };
  result.push(object);
}

console.log("\n");
console.log("🎉", result, "🎉");
console.log("\n");
