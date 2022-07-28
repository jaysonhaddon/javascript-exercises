const sumAll = function(min, max) {
    let sum = 0;

    if (typeof min != "number" || typeof max != "number") {
        return "ERROR";
    } else if (min < 0 || max < 0) {
        return "ERROR";
    }

    if (min > max) {
        let temp = max;
        max = min;
        min = temp;
    } 

    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;