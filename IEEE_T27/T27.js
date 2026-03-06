// Test Case 1
let num1 = 9; // "009"
if (num1 < 10) {
  console.log(`00${num1}`);
} else if (num1 > 10 && num1 < 100) {
  console.log(`0${num1}`);
} else {
  console.log(num1);
}

// Test Case 2
let num2 = 20; // "020"
if (num2 < 10) {
  console.log(`00${num2}`);
} else if (num2 > 10 && num2 < 100) {
  console.log(`0${num2}`);
} else {
  console.log(num2);
}

// Test Case 3
let num3 = 110; // "110"
if (num3 < 10) {
  console.log(`00${num3}`);
} else if (num3 > 10 && num3 < 100) {
  console.log(`0${num3}`);
} else {
  console.log(num3);
}
