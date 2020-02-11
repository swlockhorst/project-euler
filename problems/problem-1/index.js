const getMultiples = (multipleNumber, multipleMax) => {
  const list = [];
  for (let i = 1; i < multipleMax; i++) {
    if (i * multipleNumber < multipleMax) {
      list.push(i * multipleNumber);
    }
  }
  return list;
};

// combine and sort them
const combined = [...getMultiples(5, 1000), ...getMultiples(3, 1000)].sort(
  function(a, b) {
    return a - b;
  }
);

// remove duplicates
const filterList = combined =>
  combined.filter((v, i) => combined.indexOf(v) === i);
const filteredList = filterList(combined);

// add all numbers in array
const sum = filteredList.reduce((a, b) => a + b, 0);
console.log("sum >>", sum);
