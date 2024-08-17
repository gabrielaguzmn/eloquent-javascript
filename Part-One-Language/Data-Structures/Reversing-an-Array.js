function reverseArray(array){
    let newArray= [];
    for(let i= array.length-1;i >= 0; i--){
      newArray.push(array[i]);
    }
    return newArray;
  }
  
  
  function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let variable = array[i];
        array[i] = array[array.length - i - 1];
        array[array.length - i - 1] = variable;
    }
}

  let myArray = ["A", "B", "C"];
  console.log(reverseArray(myArray));
  // → ["C", "B", "A"];
  console.log(myArray);
  // → ["A", "B", "C"];
  let arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue);
  // → [5, 4, 3, 2, 1]
  let arrayValueEven = [1, 2, 3, 4, 5, 6]
  reverseArrayInPlace(arrayValueEven);
  console.log(arrayValueEven);
  // → [6, 5, 4, 3, 2, 1]