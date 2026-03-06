let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

if (haystack.indexOf(needle) !== -1) {
  console.log("Found");
}
if (haystack.includes(needle) !== false) {
  console.log("Found");
}
if (haystack.find((el) => el === needle)) {
  console.log("Found");
}
