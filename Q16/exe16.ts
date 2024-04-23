// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.




let guestList :string[] =['Kamran Tessori','Asif zardari' ,'Maryam nawaz']

let cannotAttend:string ="maryam nawaz"
console.log(`${cannotAttend} cannot make it ,for Dinner`);

//Replace the guest
// guestList[2] = newGuest
// console.log(`New Guest List: ${guestList}`) 
let newGuest:string ="Muhammad ahmed"
guestList[2] = newGuest
console.log(`New Guest List: ${guestList}`)

console.log("you found a bigger dinner table.so i want to  invite more guest for the dinner");

// • Add one new guest to the beginning of your array.
guestList.unshift("Haniya khan")

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

//middle guest
let middleGuest:string ="Aezil basim"
let middleIndex:number =guestList.length/2
guestList.splice(middleIndex,0,middleGuest)
console.log(`New Guest List: ${guestList}`)

////add 2 person in the end of the list
guestList.push("haisam",'hashim')

//loop the list
guestList.forEach((guestList) =>{
    console.log(`Respected Dear ${guestList} \n You Are Invited To a Dinner.\n Thank You!`);
    
})