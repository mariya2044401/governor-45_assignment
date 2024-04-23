// Unchanged Magicians Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

//exercise 41 original array
function show_magicians(magician:string[]):void{
    magician.forEach((magician) => console.log(magician))
    }
show_magicians(["Alice","David","Chris"])

//MODIfiy  magicians name

function make_great(magician:string[]):void{
    magician.forEach((magician) => console.log("The Great"+' '+magician))
}
make_great(["Alice","David","Chris"])