function deepEqual(object1, object2) {
    if (object1 === object2) {
        return true;
    }
    if (typeof object1 === 'object' && object1 != null && typeof object2 === 'object' && object2 != null) {
        let keysObject1 = Object.keys(object1);
        let keysObject2 = Object.keys(object2);

        if (keysObject1.length !== keysObject2.length) {
            return false;
        }
        for (let key of keysObject1) {
            if (!keysObject2.includes(key) || !deepEqual(object1[key], object2[key])) {
                return false;
            }
        }
        return true;
    }
    return false;
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true