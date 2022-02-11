function logAtleast5 (n) {
    for(var i = 1; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}

console.log(logAtleast5(1000))