function countChar(string, letter) {
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === letter) {
            counter += 1;
        }
    }
    return counter;
}

function countBs(string) {
    return countChar(string, "B");
}

console.log(countBs("BOB"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4