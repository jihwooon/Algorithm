// ===============================================================
// Write a function which takes two numbers and returns their sum.
// ===============================================================

// 1.Can I restate the problem in my own words?
"implement addition"
// 2.What are the inputs that go into the problem? 
    // - ints?
    // - floats?
    // - what about string for large numbers?
// 3.What are the outputs that should come from the solution to the problem?
    // - int? float? string?
// 4.Can the outputs be determined from the inputs? In others words, do I have enough information to solve the problem? 
    // 
// 5.How should i label the important pieces of data that are a part of the problem?

// Write a function which takes in a string and returns counts of each character in th string.

// charCount("aaaa"); 
// /* {
//     a:4, b:0, c:0
// } */

// charCount("hello"); 
// /* {
//     h:1, 
//     e:1, 
//     l:2, 
//     o:1
// } */

// charCount("Your PIN number is 1234!") 
// /* {
//     1: 1,
//     2: 1,
//     3: 1,
//     4: 1,
//     b: 1,
//     e: 1,
//     i: 2,
//     m: 2,
//     n: 1,
//     o: 1,
//     p: 1,
//     r: 2,
//     s: 1,
//     u: 2,
//     y: 1

// } */

function charCount(str) {
    // do something
    // return an object with keys that are lowercase alphanumeric characters in the string; values should be the counts for those characters
    // 

}

function charCount(str) {
    // make object to return at end
    var result = {};
    // loop over string, for each character.....
    for(var i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase()
        // if the char is a number/letter AND is a key in object, add one to count
        if (result[char] > 0) {
            result[char]++;
        } else {
        // if the char is a number/letter AND not in object, add it object and set value to 1
            result[char] = 1;
        };
    }
        
        

        // if character is something else (space, period, etc.) don't do anything
    // return object at end
    return result;
}

console.log(charCount("Hello"));
console.log(charCount("Hi there!"));
