const data = require("./data.json");

const result = [];

const shuffledData1 = [...data].sort((a, b) => 0.5 - Math.random());

const shuffledData2 = [...data].sort((a, b) => 0.5 - Math.random());

for (let i = 0; i < data.length; i++) {
  const presenter = shuffledData1.shift();
  let reviewer = shuffledData2.shift();

  while (presenter === reviewer) {
    shuffledData2.push(reviewer);
    reviewer = shuffledData2.shift();
  }

  const object = {
    presenter,
    reviewer,
  };

  result.push(object);
}

console.log("\n");
console.log("🎉", result, "🎉");
console.log("\n");
