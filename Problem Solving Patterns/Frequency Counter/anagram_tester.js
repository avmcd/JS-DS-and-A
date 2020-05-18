/*
Frequency Counters
* This pattern uses objects or sets to collect values/frequencies of values
* Can often avoid the need for nested loops or O(N^2) operations with arrays / strings
* Usually O(N) time

Ex: 
    Write a function called same which accepts two arrays.
    The function should return true if every value in the array has it’s corresponding 
    value squared in the second array. The frequency of values must be the same.

Naive Solution:
O(N^2)

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }  
    //nested loop
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2) // indexOf is another loop
        if (correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex,1)
    }
    return true;˜˜
}

*/


// function anagram(arr1, arr2){

//     if (arr1.length !== arr2.length){
//         console.log("false")
//         return false
//     }

//     //objects used to count values and their frequency
//     let frequencyCounter1 = {}
//     let frequencyCounter2 = {}

//     //for each number in array 1, add a key value pair to frequencyCounter1 with the number and its frequency in array 1
//     for (let val of arr1){
//         frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
//     }
//     //for each number in array 2, add a key value pair to frequencyCounter2 with the number and its frequency in array 2
//     for(let val of arr2){
//         frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
//     }

//     //for each key in frequencyCounter1, 
//     //  first check to see if the key also exists in frequencyCounter2
//     //  if key exists in both objects, then check if the count is the same in both objects
//     for(let key in frequencyCounter1){
//         if (!(key ** 2 in frequencyCounter2)){
//             console.log("false")
//             return false
//         }
//         if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
//             console.log("false")
//             return false
//         }
//     }
//     console.log("true")
//     return true
// }

// same([1,2,3], [1,4,9]);




function anagram(word1, word2) {
    if (word1.length !== word2.length) {
        console.log('false')
        return false
    }

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for (let char in word1) {
        frequencyCounter1[word1[char]] = (frequencyCounter1[char] || 0) + 1
    }
    for (let char in word2) {
        frequencyCounter2[word2[char]] = (frequencyCounter2[char] || 0) + 1
    }

    for (let key in frequencyCounter1) {
        if (!(key in frequencyCounter2)){
            console.log("false")
            return false
        }
        if (frequencyCounter2[key] !== frequencyCounter1[key]){
            console.log("false")
            return false
        }
    }
    console.log("true")
    return true
}

anagram('voldemort','voldemotr');


