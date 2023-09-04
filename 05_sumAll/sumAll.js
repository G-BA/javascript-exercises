const sumAll = function() {

    if(arguments[0] < 0 || arguments[0] < 0){return "ERROR"};
    if(isNaN(arguments[0]) == false || isNaN(arguments[0] == false) ){return "ERROR"};
    
    let result = 0;
    for(i = arguments[0]; i <= arguments[1]; i++){
        result += i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
