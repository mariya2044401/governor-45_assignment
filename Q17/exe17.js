"use strict";
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let guestList = ['Kamran Tessori', 'Asif zardari', 'Marayam nawaz'];
let canNotAtend = "Maryam nawaz";
console.log(canNotAtend + ' ' + 'cannot make it ,for Dinner');
//REplace the guest
let newGuest = "Muhammad ahmed ";
guestList[2] = newGuest;
console.log(guestList);
// //REplace the guest
// guestList[guestList.indexOf(canNotAtend)]=newGuest
// console.log(guestList);
// //Add three more people begining
guestList.unshift('Iqra', 'Adam', 'Azlan');
console.log(guestList);
// //middle guest list
let middleGuest = "Aizal basim";
let middleIndex = guestList.length / 2;
guestList.splice(middleIndex, 0, middleGuest);
console.log(guestList);
//add two new guest ending
guestList.push('Haya', 'Fatima');
console.log(guestList);
console.log('\nUnfortunately we cannot arrange big table, I can invite Only two people a Dinner');
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log(`${removeGuest} ,sorry you can’t invite them to dinner.`);
}
guestList.forEach(guestList => {
    console.log(`${guestList}, you are still invited to dinner.`);
});
//noone to invite
guestList.splice(0, guestList.length);
console.log(guestList);
