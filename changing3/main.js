// main guest list
var guestList = ["Bisma", "Wajadan", "Hashim", "Haya"];
// guest who enable to come
var dontCome = guestList[0];
// why guest is not able to come
console.log(dontCome, "sorry dont come because Im busy ;");
// adding guest instead who enable to come 
guestList.splice(0, 1, "Zumar");
// message for everyone
console.log(" Hy Guys we have more friends at dinner");
//adding guest at first place
guestList.unshift("Haeen");
//adding guest to end of the list 
guestList.push("Ahmed");
// adding guest in middle by dividing by 2
var middleIndex = Math.floor(guestList.length / 2);
//adding guest at middle without replacing another
guestList.splice(middleIndex, 0, "kinza");
//message for everyone
console.log("Updated list of our guest");
//message for everyone
guestList.forEach(function (oneguest) { return console.log("HY ".concat(oneguest, ", \"would you to have dinner with me?")); });
//changing
console.log("Unfortunately I can only invite two people for dinner");
//length
while (guestList.length > 2) {
    var removedGuests = guestList.pop();
    console.log("Sorry , ".concat(removedGuests, ", I cant invite for dinner"));
}
//  invite 2 guest
console.log("invitation for last 2 guests");
//message for 2 guest
guestList.forEach(function (lasttwo) { return console.log("finally ".concat(lasttwo, ", you are still invite for dinner")); });
// finally inko bhi invite nhi kiaa akley enjoy karo
guestList.pop();
guestList.pop();
console.log("Empty list:", guestList);
