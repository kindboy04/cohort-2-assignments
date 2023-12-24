// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

// using setInterval function

function clock(){

    const time = new Date() ;

    // in format HH:MM:SS
    //console.log(`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`) ;

    // in format HH:MM:SS AM/PM
    if(time.getHours() > 12 ){
        console.log(`${time.getHours()-12}:${time.getMinutes()}:${time.getSeconds()} PM`) ; 
    }else{
        console.log(`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} AM`) ;
    }

}

setInterval(clock,1000);



// using setTimeout function

function clock(){

    const time = new Date() ;

    // in format HH:MM:SS
    //console.log(`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`) ;

    // in format HH:MM:SS AM/PM
    if(time.getHours() > 12 ){
        console.log(`${time.getHours()-12}:${time.getMinutes()}:${time.getSeconds()} PM`) ; 
    }else{
        console.log(`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} AM`) ;
    }
    setTimeout(clock,1000) ;
} 

setTimeout(clock,1000) ; 