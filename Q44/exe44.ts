// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function sandwich(...item: string[]): void {
  console.log("Sandwich order:");
  for (let items of item) {
    console.log(`-${items}`);
  }
}
console.log("Enjoy your sandwich with delecious food!!")
sandwich('tomato catchup','salt','black pepper')
sandwich('chicken','beef')
sandwich('Afghani tikka sandwich','pepperoni sandwich','club sadnwich')
