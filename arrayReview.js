var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

  //code here
var last = function(array) {
  return array[array.length - 1];
}

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */


//Fix 'dicedArray' below so that it's an array full of integers from 0-10
var dicedArray = [0,1,4,5,7,8,10];

  //code here
dicedArray = [];

for (var i = 0; i < 11; i++) {
	dicedArray.push(i);
}

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];

  //code here
for (var i = 0; i < evenArray.length; i++) {
	if (evenArray[i] % 2 !== 0) {
		evenArray.splice(i, 1);
		i--;
	}
}

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30, and an array full or numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

  //code here
var checkArray = function(array) {
	var randomNum = getRandomArbitrary();
	
	for (var i = 0; i < array.length; i++) {
		if (array[i] === randomNum) {
			return true;
		}
	}
	return false;
};

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second = first.slice();

  //code here
second.push(6, 7);

alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"

  //code here
var longestWord = function(mySentence) {
	var sentenceArray = mySentence.split(" ");
	var longestWord = sentenceArray[0];
	
	for (var i = 0; i < sentenceArray.length; i++) {
		if (sentenceArray[i].length > longestWord.length) {
			longestWord = sentenceArray[i];
		}
	}
	return longestWord;
}

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word 
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

  //code here
var capitalize = function(myString) {
	return myString.toUpperCase();
};


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.

var vowelArray = ['a', 'e', 'i', 'o', 'u'];

var vowelCounter = function(myString) {
	var vowelCount = 0;
	myString = myString.toLowerCase();
	var charArray = myString.split("");
	for (var i = 0; i < charArray.length; i++) {
		for (var j = 0; j < vowelArray.length; j++) {
			if (charArray[i] === vowelArray[j]) {
				vowelCount++;
			}
		}
	}
	return vowelCount;
};
