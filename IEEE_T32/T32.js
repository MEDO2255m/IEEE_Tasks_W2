let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.splice(0, num)); // ["Ahmed", "Elham", "Osama"];
