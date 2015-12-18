/* arrayFunctions.js - implement the higher-order array functions */

function forEach(arr, callback) {
	
	//check to make sure first element is array
	if(typeof arr !== 'object' || !Array.isArray(arr))
		return;

	for(var i = 0; i < arr.length; i++) {
		callback(arr[i]);
	}

}



function map(arr, callback)  {

   	var result = [];

	if(typeof arr !== 'object' || !Array.isArray(arr))
		return result;

	forEach(arr, function fn(element) {
        result.push(callback(element));
	});

	return result;
}



/*Example testing it out*/

var doubleIt = function(value) {
	return value *2;
}

var nums = [1,2,3,4];
var num2 = "nums";
var doubledNums = map(nums, doubleIt);
var numsDeux = map(num2, doubleIt);
console.log(doubledNums);
console.log(numsDeux);




