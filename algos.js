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

function collectOddValues(arr){

    // it's going to be an empty array everytime is runs
    let newArr = [];

    // check if the array is empty
    if(arr.length === 0){
        return newArr;
    }

    // check if the first num is odd, if yes - push to new array
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }

    // assign newArr to concat (merge two or more arrays) to the rest of the array
    // [1,2,3,4,5] => [2,3,4,5].slice(1) => [3,4,5]
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

console.log(collectOddValues([1,2,3,4]))
