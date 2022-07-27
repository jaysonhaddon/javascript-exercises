const removeFromArray = function() {
    let removeArr = Array.from(arguments);
    let mainArr = removeArr.shift();
    for (let arg of removeArr) {
        if (mainArr.includes(arg)) {
            let index = mainArr.findIndex(element => element === arg);
            mainArr.splice(index, 1);    
        }
    }
    return mainArr;
};

// Do not edit below this line
module.exports = removeFromArray;
