// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guestList :string [] =['Kamran Tessori','Asif zardari' ,'Marayam nawaz']
guestList.map(guestList => {
    console.log(`Respected Dear ${guestList} \n You Are Invited To a Dinner.\n Thank You!`);
    

})
export{guestList}