## Big 표기법

What does better maan ?
* Faster?
* Less memory-intensive?
* More readable?


## Big O 정의

We say that an algorithm is **O(f(n))** if the number of simple operations the computer has to do is eventually less than a constant times **f(n)**, as **n** increases

* f(n) could be linear (f(n) = n)
* f(n) could be  be quadratic (f(n) = $n^2$)
* f(n) could be  be quadratic (f(n) = 1)
* f(n) could be something entirely different!


## 시간 복잡도
* 입력값이 증가함에 따라 알고리즘을 실행하는 시간을 분석
* 실행시간을 가지고 알고리즘을 실행하는데 얼마나 걸리는지를 다룸

```javascript
/**
 * O(1)
 * Always 3 operations 
 **/
function addUpTo(n) {
    let total = 0;
    for(let i= 1; i <= n; i++) {
        total += i;
    }
    return total;
}
```

```javascript
/**
 * O(n)
 * Number of operations is (eventually) bounded by a multiple of n(say, 10n)
**/
function addUpTo(n) {
    return n * (n + 1) / 2;

}
```


```javascript
function countUpAndDown(n) {
    console.log("Going up!");
    for(let i = 0; i < n; i++) {
        console.log(i);
    }
    console.log("At the top!\nGoing down...");
    for(let j = n - 1; j >= 0; j--) {
        console.log(j);
    }
    console.log("Back down. Bye!");
}

console.log(countUpAndDown(100))

```


```javascript
/**
* O($n^2$)
* O(n) operation inside of an O(n) operation.
**/
function printAllPairs(n) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}
console.log(printAllPairs(2));

```




```javascript

/*
 *   빅오(1)== O(1)입니다
 *   n이 1000이 되더라도 루프는 5번만 작동합니다
 *   n이 백만이 되더라도 루프는 5번만 작동합니다.
*/
function logAtleast5 (n) {
    for(var i = 1; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}

console.log(logAtleast5(1000))

```


## 공간 복잡도