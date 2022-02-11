// Big O 개념
function addUpTo(n) {
    let total = 0;
    for(let i= 1; i <= n; i++) {
        total += i;
    }
    return total;
}

console.log(addUpTo(100));

let t1 = performance.now();
addUpTo(10000000);

let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

/*
 The Problem with Time
 * Different machines will record different times
 * The same machine will record different times!
 * For fas algorithms, speed measurements may not be precise enough? 
*/

function addUpto(n) {
    for (let i=0; i <= n; i++) {
        total += i;
    }
    return total;
}
console.log(addUpTo(10));

