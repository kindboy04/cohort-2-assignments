/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1 , str2) {

  let a = str1.toUpperCase();
  let b = str2.toUpperCase() ;

  if (str1.length != str2.length){
    return false ;
  }

  let loop = 0 ;

  for(let i=0 ; i < str1.length ; i++){
    for(let j=0; j < str2.length; j++){
      if(a[i] == b[j]){
        loop = 1 ; 
        break ;
      }
    }
    if( loop == 0 ){
      return false ;
    }

  }
  return true ;
}

module.exports = isAnagram;
