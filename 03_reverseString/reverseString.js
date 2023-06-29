const reverseString = function(input_string) {
    let container = Array.from(input_string);
    container = container.reverse();
    return container.toString().replaceAll(',','');
};

// Do not edit below this line
module.exports = reverseString;
