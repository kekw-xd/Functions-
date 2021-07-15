// addAll = (x, y, z) => {
//    return x + y + z 
// }

// console.log(addAll(1, 2, 4))



numArr = [2, 4, 5, 8, 1, 9]

addArr = (numArr) => {
    var z = 0

    for (x of numArr) {
        z += x
    }
    return z
}

console.log(addArr(numArr));



