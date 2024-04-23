"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
//Modify the shirts
function make_shirt(size = "Large", message = "I love Typescript.") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it`);
}
make_shirt(); //Default large and message
make_shirt('Medium', 'You do effort then no one stop to become succesful'); //Default medium and message
make_shirt('Small', 'Dive into coding'); //Custom small and message"
