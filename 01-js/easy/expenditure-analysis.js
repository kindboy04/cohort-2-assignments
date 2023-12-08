/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let answer = [] ; 
  let temp = {} ;
  let keys = [] ;

  for(let i=0 ; i < transactions.length ; i++){
    let category = transactions[i]["category"] ;
    let price = transactions[i]["price"] ;

    if(!temp[category]){
      temp[category] = price ;
      keys.push(category) ;
    }
    else{
      temp[category] += price ;
    }
  }
  for(let i = 0 ; i < keys.length ; i++ ){
    
    let obj = { 

      category : keys[i] ,
      totalSpent : temp[keys[i]] ,

    };
    answer.push(obj) ; 
  }
  return answer ; 

}

module.exports = calculateTotalSpentByCategory;
