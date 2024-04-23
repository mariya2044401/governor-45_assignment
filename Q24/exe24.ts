// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a arrayz

// • Tests for equality and inequality with strings

let car:string = 'subaru'
let age : number =25;
let numbers: number[] = [1,2,3,4];

//String Test

// Test 1: Equality (True)
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru'); //True (case -insensitive)

// Test 2: Strict Equality (True)
console.log("Is car === 'subaru'? I predict True.")
console.log(car === 'subaru'); //True (case -insensitive)

//Test 3: InEquality (True)
console.log("Is car != 'Toyota'? I predict True.")
console.log(car != 'Toyota'); //True

// Test 4: InEquality(False)
console.log("Is car !== 'subaru'? I predict False.")
console.log(car !== 'subaru'); //False (case-sensitive)

//**Lowercase FUnction Tests */

//Test 5 : Lowercase conversion (True)
console.log("Is car.toLowerCase() == 'subaru'? I predict True")
console.log(car.toLowerCase() == 'subaru'); //True (converted to lowercase)

// Test 6 : Lowercase conversion (TRUE)
console.log("Is car ===  car.toLowerCase() ? I predict TRUE")
console.log(car === car.toLowerCase()); //True (Original value remains uppercase)

//Numerical Tests**

//Test 7 : Equality (True)

console.log("Is age == 25? I predict True.")
console.log(age == 25); //True

//Test 8 : Inequality (false)

console.log("Is age != 25 ? I predict false.");
console.log(age != 25); //false

//Test 9 :Greater than  (False)
console.log("Is age > 30 ? I predict False.");
console.log(age > 30); //False

//Test 10 : Less than or equal  (True)
console.log("Is age <= 25 ? I predict True.");
console.log(age <= 25); // True

// Logical Operators**


//Test 11 : And  (True)
console.log("Is age > 20 && age < 30 ? I predict True.");
console.log(age > 20 && age < 30); // True (both conditions met)

//Test 12 :OR  (FALSE)
console.log("Is age > 30 ||  age < 18 ? I predict False.");
console.log(age > 30 || age < 18); // False (neitherconditions met)

   //  **Array Tests**

   //Test 13 : In Array  (True)
console.log("Is 3 in numbers ? I predict True. ");
console.log(3 in numbers);  // True ( checks for index existance)

//Test 14 :  Not In Array  (False)
console.log("Is 5 not in numbers ? I predict True. ");
console.log(!numbers.includes(5));  // True ( negation in oprators)



