/**
 * Javascript Relay Race: Loops and Arrays.
 * Our solutions (yours may be similar or have small variations) 
 */

/**
 * Question 1
 * Create a for loop that populates an array with the numbers 1 through 10 
 */

   var myArray = [];

   for(var count = 0; count <= 10; count ++) {
	  myArray[count] =  count + 1;
	}   

/**
 * Question 2
 * Using a while loop, subtract the numbers 1 through 10 from 100
 * Store the sum in the "sub" variable and print the sub and start to the console after each iteration.
 */

	var sub = 100;
	var start = 1;

	while(start <= 10) {
	  sub = sub - start;
	  start = start + 1;
	  console.log("Start: " + start + " sub: " + sub);
	}


/**
 * Question 3
 * Using a for loop, programatically find the largest number in the array.
 * Store the largest number in a variable called "largest_num"
 */

	var someNums = [3, 1, 88, -1, 33, 96, 35, 12, 72];
	var largest_num = someNums[0];

	for(var index = 0; index < someNums.length; index ++) {
	  if(someNums[index] > largest_num) {
	    largest_num = someNums[index]
	  }
	}


/**
 * Question 4
 * Using a for loop, programatically find the smallest number in the "someNums" array.
 * Store that number in "small"
 */

	var small = someNums[0];

	for(var index = 0; index < someNums.length; index ++) {
	  if(someNums[index] < small) {
	    small = someNums[index]
	  }
	}

/**
 * Question 5
 * Count how many elements appear in BOTH arrays. Store the number of duplicates in the 
 * variable "totalDuplicates". 
 * Hint: You will need to nest loops.
 */

	var firstArray = ['peaches', 'apples', 'pears', 'oranges', 'plums', 'water melon', 'strawberries'];
	var secondArray = ['blueberries', 'water melon', 'tomatoes', 'apples', 'plums', 'oranges', 'cantaloupe'];
	var totalDuplicates = 0;

	for(var i = 0; i < firstArray.length; i ++ ) {
	  for(var j = 0; j < secondArray.length; j ++) {
	    if(firstArray[i] == secondArray[j]) {
	      totalDuplicates = totalDuplicates + 1;
	    } 
	  }
	}

/**
 * Question 6 
 * Count the number of unique elements are in the array. In other words, in the 
 * array [1, 2, 1] there are two unique numbers: 1 and 2.
 * Store the number of uniques in "totalUniques"
 * Hint: you'll need multiple for loops.
 */

	var numbers = [3, 7, 1, 3, 23, 7, 98, 26, 1];
	var totalUniques = 0;

	for(var u = 0; u < numbers.length; u ++) {
	  var focus = numbers[u];
	  var isUnique = true;
	  
	  // Don't want to check itself! That's why we add one. 
	  for(var x = u + 1; x < numbers.length; x ++) {
	    if(focus == numbers[x]) {
	      isUnique = false
	    }
	  }
	  
	  if(isUnique) {
	    totalUniques = totalUniques + 1;
	  }
	}

