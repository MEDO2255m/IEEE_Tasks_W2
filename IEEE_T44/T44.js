let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
let result = [];

for (let i = start + true; i < mix.length; i++) {
  if (typeof mix[i] === "string") {
    continue;
  }
  result.push(mix[i]);
}
for (let j = start; j < result.length; j++) {
  console.log(result[j]);
}
// Output
2;
3;
4;
