/* Where things go wrong
*  No base case
*  Forgetting to return or returning the wrong thing!
*  Stack overflow!
*/

// 호출 스택이 최대 크기로 초과 된다. Stack overflow
function factorial(num) {
    if(num == 1) console.log(1)
    return num * factorial(num -1)

}
console.log(factorial(5));

// return 1을 걸어줘야 한다.
function factorial(num) {
    if(num == 1) return 1;
    return num * factorial(num -1)

}

console.log(factorial(5));
