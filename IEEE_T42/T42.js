let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let newFriends = [];
for (let i = +false; i < friends.length; i++) {
  if (friends[i].startsWith(letter.toUpperCase())) {
    continue;
  }
  newFriends.push(friends[i]);
}
for (let j = +false; j < newFriends.length; j++) {
  console.log(`${j + true} => ${newFriends[j]}`);
}
// Output
("1 => Sayed");
("2 => Eman");
("3 => Mahmoud");
("4 => Osama");
("5 => Sameh");
