let guestList :string[] = ["Bisma", "Wajadan", "Hashim", "Haya"];
let dontCome =guestList[2];
console.log(dontCome, "sorry i dont come because Im busy");
guestList.splice(2 , 1, "Maha");
guestList.forEach(guest => console.log(`Good evening ${guest}, Would like to have dinner with me?`));