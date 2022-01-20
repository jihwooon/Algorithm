//TODO : Big 개념
function addUpTo(n) {
    let total = 0;
    for(let i= 1; i <= n; i++) {
        total += i;
    }
    return total;
}

console.log(addUpTo(100));

let t1 = performance.now();
addUpTo(1000000);

let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)



function addUpTo2 (n) {
    return n * (n+1)/ 2;
}

console.log(addUpTo2(100));