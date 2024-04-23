// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

// //exercise 41 original array
// function show_magicians(magician:string[]):void{
//     magician.forEach((magician) => console.log(magician))
//     }
// show_magicians(["Alice","David","Chris"])

//MODIfiy  magicians name

function make_great(magician:string[]):void {
    magician.forEach(magician => {console.log(`The Great ${magician}`)})
    
}
make_great(["Alice","David","Chris"])

