// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.



const fs = require('fs') ;
const path = require('path') ;

const filePath = path.join(__dirname,'a.txt') ; 
fs.readFile(filePath,"utf-8",function(err,data){
    if(err){
        console.log(err) ;
    }else{
        data += "Adding another sentence to check whether the function works. Hari Bollll !!! "  ;
        fs.writeFile(filePath,data,function(err,data){
            if(err){
                console.log(err);
            }else{
                console.log("file has been updated successfully") ; 
            }
        }) ; 
    }
    
}) 

