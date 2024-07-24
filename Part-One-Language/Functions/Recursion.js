function isEven(num) {
    if (num > 0) {
        if (num % 2 == 0) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return "??";
    }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??