// two sum function

// let array = [1,2,3,4]
// let targetSum = 5;

// solution 1

// space complexity = o(N^2)
// memory complexity = o(N)

// function twoNumberSum(array, targetSum) {

// 	for(let i = 0; i < array.length - 1; i++){
// 		let num1 = array[i];

// 		for(let j = i + 1; j < array.length; j++){
// 			let num2 = array[j];

// 			if(num1 + num2 === targetSum){
// 				return [num1, num2];
// 			}
// 		}
// 	}
// 	return [];
// }

// solution 2 

// function twoNumberSum(array, targetSum){

//     let nums = {};

//     for(let i = 0; i < array.length; i++){
//         let thisNum = array[i];
//         nums[thisNum] = i;
//     }

//     for(let i = 0; i < array.length; i++){
//         let diff = targetSum - array[i];
//         if(nums[diff] !== undefined && nums[diff] !== i){
//             return [i, nums[diff]]
//         } else {
//             nums[array[i]];
//         }
//     }
// }

// console.log(twoNumberSum(array, targetSum));


// -------------------------------------------------------------------------------------------------------------------

// MULTIPLE POINTERS 

// solution 1

// function sumZero(array){

//     for(let i = 0; i < array.length; i++){

//         for(let j = i + 1; j < array.length; j++){

//             if(refOne + refTwo === 0){
//                 return [array[i], array[j]];
//             }
//         }
//     }
//     return [];
// }

// console.log(sumZero(array));

// time complexity: o(n^2)
// space complexity: o(1)

// solution 2

// function sumZero(array){
//     let left = 0;

//     // set to - 1, because the index starts at 0, not 1
//     let right = array.length - 1;

//     while(left < right){
//         let sum = array[left] + array[right];
//         if(sum === 0){
//             return [array[left], array[right]];
//         } else if (sum > 0){
//             right--;
//         } else {
//             left++;
//         }
//     } 
// }

// time complexity: o(n); linear
// space complexity: o(1); constant

// UNIQUE VALUES

// let arrayTwo = [1,1,1,2,3,3,4,4,5,6,6,7,8]

// function countUniqueValues(arrayTwo){
//     let counter = 0;
//     let left = 0;
//     let right = arrayTwo.length - 1

//     while(left < right){
//         if(arrayTwo[left] != arrayTwo[right]){
//             counter++;
//         }
//     }
//     return counter;
// }

// function countUniqueValues(array){
//     if(array.length === 0) return [];
//     let i = 0;

//     for(let j = 1; j < array.length; j++){
//         if(array[i] !== array[j]){
//             i++;
//             array[i] = array[j];
//         }
//     }
//     return i + 1;
//   }

//   console.log(countUniqueValues(arrayTwo));

//   time: o(n);
//   space: 0(1);

// ------------------------------------------------------------------------------

// SLIDING WINDOW 


// Not sliding window

// function maxSubarraySum(array, n){
//     if (n > array.length)return null;

//     let maxNum = -Infinity;

//     for(let i = 0; i < array.length - n + 1; i++){
//         let temp = 0;
//         for(let j = i + 1; j < n; j++){
//             temp += array[i+j];
//         }
//         if (temp > maxNum){
//             maxNum = temp;
//         }
//     }
//     return maxNum;
// };

// console.log(maxSubarraySum([1,2,3,4], 2));


// THIS IS THE REAL SOLUTION

// function maxSubarraySum(arr, num){
//     let maxSum = 0;
//     let tempSum = 0;

//     if (arr.length < num) return null;

//     for(let i = 0; i < num; i++){
//         maxSum += arr[i];
//     }

//     tempSum = maxSum;
//     for (let i = num; i < arr.length; i++){
//         tempSum = tempSum - arr[i - num] + arr[i];
//         maxSum = Math.max(maxSum, tempSum);
//     }
//     return maxSum;
// }

// console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3], 3))

// time complexity - o(n);

// --------------------- Recursion Function ----------------------

// function countDown(num){
//     if(num <= 0){
//         console.log("We're all done!");
//         return;
//     }

//     console.log(num);
//     num--
//     countDown(num);
// }

// countDown(5);

// function sumRange(num){
//     // base case
//     if(num === 1) return 1;
//     console.log(num);
//     return num + sumRange(num-1);
// }

// console.log(sumRange(5));

// FACTORIAL //

// non-recursive solution 

// function factorial(num){
//     let total = 1;
//     for (let i = num; i > 1; i--){
//         total*= i;
//     }
//     return total;
// }

// function factorial(num){
//     if(num === 1) return num;
//     return num * factorial(num - 1);
// }

// console.log(factorial(5));

// RECURSION HELPER METHOD //

// function collectOddValues(arr){

//     let result = [];

//     // adding to results 

//     function helper(helperInput){
//         if(helperInput.length === 0){
//             return;
//         }
//         // if the first index value is not divisble by 2, then it's odd
//         // push it into the result array

//         if(helperInput[0] % 2 !== 0){
//             result.push(helperInput[0])
//         }

//         // we create a subarray that excludes the first number
//         helper(helperInput.slice(1))
//     }

//     helper(arr)
//     return result;
// }

// PURE RECURSION 

// function collectOddValues(arr){

//     // it's going to be an empty array everytime is runs
//     let newArr = [];

//     // check if the array is empty
//     if(arr.length === 0){
//         return newArr;
//     }

//     // check if the first num is odd, if yes - push to new array
//     if(arr[0] % 2 !== 0){
//         newArr.push(arr[0]);
//     }

//     // assign newArr to concat (merge two or more arrays) to the rest of the array
//     // [1,2,3,4,5] => [2,3,4,5].slice(1) => [3,4,5]
//     newArr = newArr.concat(collectOddValues(arr.slice(1)));
//     return newArr;
// }

// console.log(collectOddValues([1,2,3,4]))

// let s = "codility";

// function solution(s) {

//     // create a hash map 
//     let obj = {};

//     // loop through the string 

//     for (let i = 0; i < s.length; i++) {

//         // if the value is not in the hash map 
//         // create a key and equal it to 1 

//         if (!obj[s[i]]) {
//             // watch out for the return statement.. if you use a return statement, it will end the conditional
//             obj[s[i]] = 1;
//             // if the value is in the hash map 
//             // add 1 to key 
//         } else if (obj[s[i]]) {
//             obj[s[i]] += 1;
//             console.log("second one", obj[s[i]])

//             if (obj[s[i]] === 2){
//                 return s[i]
//             }
//         } 
//     }

// find the keys that equal 2 and returning it 
// return Object.keys(obj).find(key => obj[key] === 2); 
// }

// console.log(solution(s));

// LINEAR SEARCH PRACTICE

// const array = [3, 5, 6, 2, 1];
// const value = 2;

// function linearSearch(array, value) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === value) return i;
//     }
//     return -1;
// }

// console.log(linearSearch(array, value));

// time complexity - best case o(1); average o(n); worst case o(n); 

// BINARY SEARCH

// let array = [1,2,3,4,5,6,7,8];
// let value = 2; 

// function binarySearch(array, value){

//     // create two variables - starting and ending
//     let leftPointer = 0; 
//     let rightPointer = array.length - 1; 
//     let middlePointer = Math.floor((rightPointer + leftPointer) / 2);

//     while(array[middlePointer] !== value && leftPointer <= rightPointer){
//         if(value < array[middlePointer]){
//             rightPointer = middlePointer - 1;
//         } else {
//             leftPointer = middlePointer + 1;
//         }
//         middlePointer = Math.floor((rightPointer + leftPointer) / 2);
//     }
//     if (array[middlePointer] === value){
//         return middlePointer;
//     } else {
//         return -1; 
//     } 
// }


// BINARY SEARCH - SHORTER VERSION

// function binarySearch(array, value){

//     // create two variables - starting and ending
//     let leftPointer = 0; 
//     let rightPointer = array.length - 1; 

//     // use the average to find the middle point
//     let middlePointer = Math.floor((rightPointer + leftPointer) / 2);

//     // if the middle point value does not equal the value OR start is less than or greater than the end, run the loop

//     while(array[middlePointer] !== value && leftPointer <= rightPointer){

//         // if value is less than the middle point, then move the right pointer to the index right before the previous middle point

//         if(value < array[middlePointer]) rightPointer = middlePointer - 1;

//         // else start needs to move to the index right after the previous middle point
//         else leftPointer = middlePointer + 1;

//         // recalculate the average everytime it loops 

//         middlePointer = Math.floor((rightPointer + leftPointer) / 2);
//     }

//     // this needs to be OUTSIDE of the while loop or else it'll keep looping
//     // if the middlePoint equals the value then return the value;
//     // if the middlePoint does not = value or is in the array then return -1 

//     return array[middlePointer] === value ? middlePointer : -1;
// }

// console.log(binarySearch(array, value))


// BALLOONS CHALLENGE 

// create a function that takes in a strng of uppercase letters
// iterate through the string to see if the characters "BALLOON" are in the string
// if they are - remove the characters and add 1 to the counter (number of moves)
// if not return 0; 

// for of iterates through arrays and strings
// for in iterates through objects 

let s = "BAONXXOLL";
let sTwo = "BAOOLLNNOLOLGBAX"


function solution(s) {

    let wordMatch = "BALLOON";
    let count = 0;
    let wordObj = {};

    for (let character of s) {
        wordObj[character] = ++wordObj[character] || 1
    }

    while (wordObj['B'] > 0 && wordObj['A'] > 0 && wordObj['L'] > 1 && wordObj['O'] > 1 && wordObj['N']) {
        wordObj['B'] -= 1;
        wordObj['A'] -= 1;
        wordObj['L'] -= 2;
        wordObj['O'] -= 2;
        wordObj['N'] -= 1;

        count++
    }
    return count;
}

console.log(solution(sTwo));

// NAIVE STRING SEARCH

// let firstArray = wowomgzomg;
// let secondArray = omg; 

// function naiveSearch(firstArray, secondArray){
//     for(let i = 0; i < firstArray.length; i++){
//         for(let j = 0; j < secondArray.length; j++){
//             if
//         }
//     }
// }