// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface item {
name:string
price:number
}

//creates Objects

let book:item ={
    name : 'Typescript Essential',
    price:450
} 

let building:item ={
    name:'GFS builder appartment',
    price:200000000
}
console.log(`Book name:${book.name} \n price$:$${book.price}`);
console.log(`building name:${building.name} \n price$:$${building.price}`)