// Exercise 1:


var myObj = { class: [] };
// var className = 'animating';// in this assignment statement, the "var className;" is being hoisted to the top of the global scope, which makes this undefined. This assignment statement needs to be placed within the function animateLeft.


function animateLeft(obj) { // This whole funciton is hoisted above the assignment statements in the global variable since it is a function declaration statement.
	var className = 'animating';
    obj.class.push(className);
    className = 'left'; // the "var className;" is being hoisted to the top of this function, but not the value thats assigned to that assignment statement. So this assignment statement is undefined. Also, you should never declare the same variable name twice.
    obj.class.push(className);
}




// animateLeft(myObj);





// Exercise 2:

// var unit = 'F'; // This needs to be put inside the function so the "If" statement can be compared to this assignment statement.  Right now the var unit = F is in the global scope, when it needs to be inside the local scope of the function. 
// var temp = formatTemp(99);

// function formatTemp(temp, celcius) { // This function declaration statement is being hoisted to the top. 
//     if (celcius) {
//         var unit = 'C';
//     } else {
//     	   unit = 'F'; Never declare the same variable name twice.
//     }

//     return temp + '&deg;' + unit;
// }

// // var temp = formatTemp(99); // the assignment statement is being hoisted to the top of the global scope as var temp; which === undefined.  This whole assignment statement along with its value needs to be moved to the top of the global scope.

// console.log(temp);




// Exercise 3:

// var update = true;
// var a = 0;

// function increment() {
   

//     if (update === false) {
//         return;
//     }

//     function number() { // This was origionally funciton update, which was conflicting with variable assignment statement update. To fix this, I just changed the function name to anything but Update
//         a++;

//         if (a >= 10) {
//             update = false;
//         }
//     }

//     number(); // also changed this to match the new function name.			
// }

// for (var i = 0; i < 50; i++) {
//     increment();
// }

// console.log(a);


// Exercise 4:


// function outer() {
// 	//return inner(); // This is bad because you said it was bad, buuuuuut you should never retun a function that hasn't been defined yet.
//     function inner() { 
//     	return 'Hello'; 
//     }
//     return inner(); // so you need to return the function here!
// }

// console.log(outer());



// Exercise 5:


// logTime(); // this needs to be moved to underneath of the function

// var logTime = function logTime () { // So unfortunately for her this aint gonna work becuase this is a function assignment statement and does not get hoisted. the only thing that does is var logTime; which === undefined
//     var date = new Date();
//     console.log('The time is ' + date.getHours() + ':' + date.getMinutes());
// }

// logTime();





