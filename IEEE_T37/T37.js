let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = allArrs.concat(arr1, arr2).sort().slice(4).join("").toLowerCase();
console.log(allArrs); // fxy
