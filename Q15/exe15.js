"use strict";
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let guestList = ['Kamran Tessori', 'Asif zardari', 'Maryam nawaz'];
let cannotAttend = "maryam nawaz";
console.log(`${cannotAttend} cannot make it ,for Dinner`);
//Replace the guest
let newGuest = "Muhammad ahmed";
guestList[2] = newGuest;
console.log(`New Guest List: ${guestList}`);
// guestList[guestList.indexOf(cannotAttend)] =newGuest;
// console.log(`New Guest List: ${guestList}`)
guestList.forEach(guestList => {
    console.log(`Respected Dear ${guestList} \n You Are Invited To a Dinner.\n Thank You!`);
});
