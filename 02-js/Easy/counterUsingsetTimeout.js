// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let counter = 0 ;
const time = new Date() ;
const startTime = time.getTime()
let elaspsedTime = 0 ;
let currentTime = 0 ;
function updateCounter(){
    currentTime = new Date().getTime() ;
    elaspsedTime = (currentTime - startTime)/1000 ; 
    counter += 1 ;
    console.log("The value of the counter is " + counter) ;
    console.log(`The time elapsed is ${elaspsedTime}`) ;
    if(counter < 10){
        setTimeout(updateCounter,1000) ;
    }
}

setTimeout(updateCounter,1000) ;

