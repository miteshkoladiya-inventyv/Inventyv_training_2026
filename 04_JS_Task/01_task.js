function firstfn(arr, callback) {
    const firstElement = arr.shift();
    return callback(firstElement, arr);
}

function secondfn(firstElement, restOfArray) {  
    return firstElement + restOfArray.reduce((acc, val) => acc + val, 0);
    //hello
}


const arr1 = [10, 15, 5, 8];
const sum = firstfn(arr1, secondfn);

new Promise((resolve, reject) => {
    if (sum > 35) {
        resolve(`Sum is ${sum} , which is greater than 35.`);
    }
    else {      
        reject(`Sum is ${sum} , which is not greater than 35.`);
    }
})
.then(msg => console.log("Resolved:", msg))
.catch(err => console.log("Rejected:", err));

