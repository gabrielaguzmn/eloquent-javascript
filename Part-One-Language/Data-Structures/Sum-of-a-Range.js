function range(start, end, step) {
    let array = [];
    if (step == undefined) {
        step = 1;
    }
    if (step < 0) {
        for (let i = start; i >= end; i += step) {
            array.push(i);
        }
    }
    else {
        for (let i = start; i <= end; i += step) {
            array.push(i);
        }
    }
    return array;
}

function sum(array) {
    finalSum = 0;
    for (let i = 0; i < array.length; i++) {
        finalSum += array[i];
    }
    return finalSum;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55