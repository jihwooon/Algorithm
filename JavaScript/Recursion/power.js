function power(a) {
    if(a === 0) return 1;// 마지막에 1 부분을 반환 해야 한다.

    return a * power(a-1);

}

console.log(power(5)); // 16
