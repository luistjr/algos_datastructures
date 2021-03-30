function twoNumberSum(array, targetSum) {
	
	for(let i = 0; i < array.length - 1; i++){
		let num1 = array[i];
		
		for(let j = i + 1; j < array.length; j++){
			let num2 = array[j];
			
			if(num1 + num2 === targetSum){
				return [num1, num2];
			}
		}
	}
	return [];
}

console.log('hello world');