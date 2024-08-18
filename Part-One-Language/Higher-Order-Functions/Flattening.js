let arrays = [[1, 2, 3], [4, 5], [6]];

const flatArray = arrays.reduce((finalArray, currentArray) => {
  return finalArray.concat(currentArray);}, []);
console.log(flatArray);

// → [1, 2, 3, 4, 5, 6]