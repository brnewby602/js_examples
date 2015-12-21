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


function reduce(arr, callback /*, prevVal */) {
     
     var result;

     //if the passed in parameter is not an array, just return undefined
	if(!Array.isArray(arr))
		return result;

    //if initial value is passed in
    if(arguments[2] != undefined) {
       result = arguments[2];
       //console.log("Previous Value = " + result);
    }
    
    result = callback(arr.pop(), result);
    var len = arr.length;

    if(len === 0)
    	return result;

    //console.log("result = " + result);
    //console.log("len = " + len);

    return reduce(arr, callback, result);

}


function every(arr, callback) {

	//if the passed in parameter is not an array, return false 
	if(!Array.isArray(arr))
		return false;
    
    var all = true;

    for(var i = 0; i < arr.length; i++)  {

    	if(!callback(arr[i]))   {
       	   	all = false;
       	    break;
        }
    }

    return all;
}


function some(arr, callback)  {
    
    //if the passed in parameter is not an array, return false 
	if(!Array.isArray(arr))
		return false;
    
    var some = false;

    for(var i = 0; i < arr.length; i++)  {

    	if(callback(arr[i]))   {
       	   some = true;
       	   break;
        }          
    }

    return some;
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


/* testing reduce */

var anotherNums = [1,2,3,4,5];
var addEm = function(element, prevVal)   {
	return element + prevVal;
}
console.log(reduce(anotherNums, addEm, 0));   // expect 15


/* testing every */


var twos = [2,4,6,8,10];
var almostTwos = [2,4,6,8,11];

console.log(every(twos, divisibleByTwo));  // expect true
console.log(every(almostTwos, divisibleByTwo));   // expect false

/* testing some */

var odds = [1,3, 5, 7, 9, 11];

console.log(some(twos, divisibleByTwo));  // expect true
console.log(some(almostTwos, divisibleByTwo));   // expect true
console.log(some(odds, divisibleByTwo));   // expect false
