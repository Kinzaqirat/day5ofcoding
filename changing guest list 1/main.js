var guestList = ["Bisma", "Wajadan", "Hashim", "Haya"];
var dontCome = guestList[2];
console.log(dontCome, "sorry i dont come because Im busy");
guestList.splice(2, 1, "Maha");
guestList.forEach(function (guest) { return console.log("Good evening ".concat(guest, ", Would like to have dinner with me?")); });
