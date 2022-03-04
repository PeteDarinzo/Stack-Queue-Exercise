const Stack = require("./stack");

function reverseString(string) {
  const stack = new Stack();
  let output = [];

  for (let char of string) {
    stack.push(char);
  }
  while (!stack.isEmpty()) {
    output.push(stack.pop());
  }
  return output.join('');
}

module.exports = reverseString;