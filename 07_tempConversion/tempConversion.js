const ftoc = function(temp) {
  let result = ((temp - 32) * (5 / 9));

  if (result % 1 !== 0) {
    return Number(result.toFixed(1));
  } else {
    return result;
  }
};

const ctof = function(temp) {
  let result = (temp * (9 / 5) + 32);

  if (result % 1 !== 0) {
    return Number(result.toFixed(1));
  } else {
    return result;
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
