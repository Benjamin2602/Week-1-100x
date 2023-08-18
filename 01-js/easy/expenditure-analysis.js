/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {

  //empty object
  const categoryTotal = {}

  // looping through each transaction
  for(let i = 0 ; i < transactions.length ; i++){
    const transaction = transactions[i];
    const category = transaction.category
    const price = transaction.price

    if(!categoryTotal[category]){
      categoryTotal[category] =0
    }

    categoryTotal[category] += price
  }

  const result = [];
  for(const category in categoryTotal){
    result.push({[category]:categoryTotal[category]})
  }
  
  return result;
}
// const transactions = [
//   {
//     itemName: "atomic habit",
//     category: "book",
//     price: 389,
//     timestamp: new Date(),
//   },
//   {
//     itemName: "football",
//     category: "sport",
//     price: 599,
//     timestamp: new Date(),
//   }
// ];

// const categoryTotal = calculateTotalSpentByCategory(transactions);
// console.log("total spending");
// for(const category in categoryTotal){
//   console.log(`${category}: ${categoryTotal[category]}`)
// }

module.exports = calculateTotalSpentByCategory;
