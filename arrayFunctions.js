/* arrayFunctions.js - implement the higher-order array functions */

function forEach(arr, callback) {
	
	//check to make sure first element is array
	if(!Array.isArray(arr))
		return;

	for(var i = 0; i < arr.length; i++) {
		callback(arr[i]);
	}

}



function map(arr, callback)  {

   	var result = [];

    //if the passed in parameter is not an array, just return an empty array
	if(!Array.isArray(arr))
		return result;

	forEach(arr, function fn(element) {
        result.push(callback(element));
	});

	return result;
}


function filter(arr, callback) {

	var result = [];

    //if the passed in parameter is not an array, just return an empty array
	if(!Array.isArray(arr))
		return result;

     forEach(arr, function fn(element) {
         if(callback(element)) { result.push(element); }
     });


     return result;
}


function reduce(arr, callback) {

}


function every(arr, callback) {

}


function some(arr, callback)  {

}


/*Example testing it out*/

var doubleIt = function(value) {
	return value *2;
}

var nums = [1,2,3,4];
var num2 = "nums";

/*testing map */
var doubledNums = map(nums, doubleIt);
var numsDeux = map(num2, doubleIt);
console.log(doubledNums);   // expected [2,4,6,8]
console.log(numsDeux);      // expected []

/*testing filter*/

var divisibleByTwo = function(value)  {
   return value % 2 === 0;
}

console.log(filter(nums, divisibleByTwo));  // expect [2, 4]









