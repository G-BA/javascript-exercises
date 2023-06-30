const add = function() {
  return arguments [0] + arguments [1];
	
};

const subtract = function() {
  return arguments [0] - arguments [1];
	
};

const sum = function(input_array) {
  let result = 0;
  for(let i = 0; i < input_array.length; i++){
    result += input_array[i];
  }
  return result;
};

const multiply = function() {
  let result = 1;
  for(let i = 0; i < arguments.length;i++){
    result *= arguments[i];
  }
  return result;

};

const power = function(number1, number2) {
    return number1 ** number2;
};

const factorial = function() {
  let result = 1;
  for(let i = 1; i < arguments[0]+1;i++){
    result = result * i;
};
return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
