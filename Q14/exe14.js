"use strict";
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
let guestList = ['Kamran Tessori', 'Asif zardari', 'Marayam nawaz'];
exports.guestList = guestList;
guestList.map(guestList => {
    console.log(`Respected Dear ${guestList} \n You Are Invited To a Dinner.\n Thank You!`);
});
