var guestList = ["Bisma", "Wajadan", "Hashim", "Haya"];
var dontCome = guestList[2];
console.log(dontCome, "sorry dont come because Im busy ;");
guestList.splice(2, 2, "Zumar", "Saadi");
console.log(" Hy Guys we have more friends at dinner");
guestList.unshift("Haeen");
guestList.push("Ahmed");
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Kinza");
console.log("Updated list of our guest");
guestList.forEach(function (oneguest) { return console.log("HY ".concat(oneguest, ", \"would you to have dinner with me?")); });
