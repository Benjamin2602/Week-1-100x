// Import the function from the module
const calculateTotalSpentByCategory = require('./calculateTotalSpentByCategory'); // Adjust the path accordingly

// Define some sample transactions
const transactions = [
  { itemName: "Book", category: "Books", price: 20 },
  { itemName: "Soccer Ball", category: "Sports", price: 15 },
  { itemName: "Headphones", category: "Electronics", price: 50 },
  { itemName: "T-shirt", category: "Clothing", price: 30 },
  { itemName: "Basketball", category: "Sports", price: 25 },
  { itemName: "Phone Case", category: "Electronics", price: 10 }
];

// Call the function with the sample transactions
const result = calculateTotalSpentByCategory(transactions);

// Display the output
console.log(result);
