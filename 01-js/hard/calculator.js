/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

class Calculator {
  constructor(initialValue) {
    this.result = initialValue;
  }
  validateNumber(value) {
    if (typeof value !== "number" || isNaN(value)) {
      throw new Error("Invalid number");
    }
  }
  add(value) {
    this.validateNumber(value);
    this.result += value;
    return this;
  }
  subtract(value) {
    this.validateNumber(value);
    this.result -= value;
    return this;
  }
  multiply(value) {
    this.validateNumber(value);
    this.result *= value;
    return this;
  }
  divide(value) {
    this.validateNumber(value);
    if (value !== 0) {
      this.result /= value;
    } else {
      console.log("division error");
    }
    return this;
  }
  getResult() {
    return this.result;
  }
}

const calculator = new Calculator(10);

const result = calculator.add(5).subtract(3).multiply(2).divide(4).getResult();
console.log("result: " + result);

module.exports = Calculator;
