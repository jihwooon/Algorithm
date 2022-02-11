// function validAnagram(first, second) {
//     // 첫번째 인수와 두번째 인수가 다르다면 false 반환한다.
//     if(first.length !== second.length) {
//         return false
//     }

//     const lookup = {};
//     // for 문을 돌려서 탐색을 한다.
//     for(let i = 0; i < first.length; i++) {
//         let letter = first[i];
//         // if letter exists, increment, otherwise set to 1
//         lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
//     }

//     for(let i = 0; i< second.length; i++) {
//         let letter = second[i];

//         // can't find letter or letter is zero then it's not an anagram
//         if(!lookup[letter]) {
//             return false;
//         } else {
//             lookup[letter] -= i;
//         }
//     }
//     return true;
// }


console.log(validAnagram('anagram', 'nagaram'));
// 문제를 이해한다.
    // 글자 수가 틀리면 false , 글자 수가 같으면 true ex) aaz = zza (false) a:2 z:1, z:2 a:1 false

// 예제를 탐색한다.
    // 

// 해결점을 찾는다.
// 
// add whatever parameters you deem neccessary - good luck!

function validAnagram(first, second) {
    if(first.length != second.length) {
        return false;
    }

    const lookup = {};

    for(let i = 0; i < first.length; i++) {
        let letter = first[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1; 
    }

    for(let i = 0; i < second.length; i++) {
        let letter = second[i];
        
        if(!lookup[letter]){
            return false
        } else {
            lookup[letter] -=i;
        }
    }
    return true
}

console.log(validAnagram('rat', 'car'));
