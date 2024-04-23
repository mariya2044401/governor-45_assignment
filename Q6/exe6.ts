// 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
// character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let person_name:string = "\t\t\t\nMariya khan \t\t\t\nyousufzai"
let person_name1:string = "\n\t\t\tMariya khan yousufzai\t\t\t\n"

console.log(`Show the name with whitespace :${person_name}`)
console.log(`Show the name without whitespace :${person_name1.trim()}`)