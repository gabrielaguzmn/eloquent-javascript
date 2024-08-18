function every(array, test) {
    let flag = true;
    for (let i = 0; i < array.length; i++) {
        if (!test(array[i])) {
            flag = false;
        }
        else {
        }
    }
    return flag;
}

/*
function everyWithSome(array, test){
    if (!array.some(!test)){
      return true;
    }
    else{
      return false;
    }
  }
*/

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(everyWithSome([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true