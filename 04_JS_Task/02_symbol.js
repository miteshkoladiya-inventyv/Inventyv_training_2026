const sum = Symbol("sum");

function firstfn(arr, callback, resultObj) {
    const firstElement = arr[0];
    const restOfArray = arr.slice(1);

    resultObj[sum] = callback(firstElement, restOfArray);
}

function secondfn(firstElement, restOfArray) {
    return firstElement + restOfArray.reduce((acc, val) => acc + val, 0);
}

const arr1 = [10, 15, 5, 8];
const result = {};

firstfn(arr1, secondfn, result);

new Promise((resolve, reject) => {
    if (result[sum] > 35) {
        resolve(`Sum is ${result[sum]}, which is greater than 35.`);
    } else {
        reject(`Sum is ${result[sum]}, which is not greater than 35.`);
    }
})
.then(msg => console.log("Resolved:", msg))
.catch(err => console.log("Rejected:", err));
