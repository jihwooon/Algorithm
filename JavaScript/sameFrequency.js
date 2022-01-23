
// 두 수를 넣고 비교 해서 수의 갯수가 같은지 확인 하는 문제이다.
function sameFrequency(a,b) {
    
    //만약 두 수의 길이가 같지 않다면 false를 반환한다.
    if(a.length != b.length) {
        return false;
    }

    // 두 수의 길이가 같고 수를 비교 시 같다면? Big O(N)
    const lookup = {};
    for(let i = 0; i < a.length; i++) {
        let number = a[i];
        lookup[number] ? lookup[number] += 1 : lookup[number] = 1; 
    }

    for(let i = 0; i < b.length; i++) {
        let number = b[i];
        
        if(!lookup[number]) {
            return false;
        } else {
            lookup[number] -=i;
        }
    }
    return true;
}

console.log(sameFrequency(34, 14));
