// two sum function

let array = [1,2,3,4]
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

let arrayTwo = [1,1,1,2,3,3,4,4,5,6,6,7,8]

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

function maxSubarraySum(array, n){

}