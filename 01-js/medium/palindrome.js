/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
    function isSpace(char){

      return char !== ' ' ;
    }

    let lower = str.replace(/[^a-zA-Z0-9]/g," ").toLowerCase() ;
    let lowerArray = lower.split('').filter(isSpace) ;
    let limit = Math.trunc((lowerArray.length)/2) ;
    let count = 0 ; 

    for(let i = 0 ; i < limit ; i++){

      if(lowerArray[i] == lowerArray[lowerArray.length-i-1]){
        count++ ;
      }
      else{
        return false ;
      }

    }
    return true ;
}

module.exports = isPalindrome;
