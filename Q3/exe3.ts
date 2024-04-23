//3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

//Lowercase 
let personName = "mariya khan youzufzai"
console.log(`The lower case: ${personName.toLowerCase()} `);

//Uppercase

console.log(`The upper case: ${personName.toUpperCase()} `);

//titlecase

console.log(`The title case: ${personName.charAt(0).toUpperCase()+personName.toLowerCase().slice(1)} `);