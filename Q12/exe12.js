"use strict";
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let friend = ['Arsalan', 'Aman', 'AyAN', 'Arshiyan', 'MAryam'];
let message = " dear wanna meetup today lunch at restaurant";
for (let i = 0; i < friend.length; i++) {
    console.log(`Hi ${friend[i].toUpperCase()},${message}`);
}
