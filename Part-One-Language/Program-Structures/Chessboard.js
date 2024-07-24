let string = "";
for (let i = 0; i <= 8; i++) {
    for (let j = 0; j <= 8; j++) {
        if (i % 2 == 0) {
            if (j % 2 == 0) {
                string += "#";
            }
            else {
                string += " ";
            }
        }
        else{
            if (j % 2 != 0) {
                string += "#";
            }
            else {
                string += " ";
            }
        }
    }
    string += "\n";
}
console.log(string);