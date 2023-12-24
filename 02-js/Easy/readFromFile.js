// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require('fs') ;
const path = require('path') ;
const filepath = path.join(__dirname,'a.txt') ; // construct the full path

fs.readFile(filepath,"utf-8",function(err,data){
    console.log(data) ;
})

for( let i = 0 ; i <= 1000; i++){
    // to cause delay
}

// As readfile is an asynchronous function ,it results in the program going forward to the next line while the function is executed in the web API.
// Once completed, it goes into event loop and after all the lines of code is executed it pushes the result on to the stack.