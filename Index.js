//1. Write a JavaScript program to display the current day and time in 
//the following format.
function getWeekDay(date) {
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return days[date.getDay()];
} 

var date = new Date(); 
console.log ("Today is ");
console.log(getWeekDay(date));


//2. Write a JavaScript program to get the current date.

var now = new Date();
console.log( now );

//3. Write a JavaScript program to find 1st January be a Sunday 
//between 2014 and 2050.


var years = [];
for(var year = 2014; year <= 2050; year++){
     var mydate = new Date(year, 0, 1);
	 var day = mydate.getDay();
	 if (day == 0){
		 years.push(year);
	 }
	 	 
  };
 console.log ("В следующих годах 1е Января выпадает на воскресенья:");
 console.log (years);
 
 
 

//4. Write a JavaScript program to calculate days left until next New Year.

function getDaysTillNY9() {
  var now = new Date();
  var NewYear = new Date(2016, 0, 1);
  var diff = NewYear - now;
  return Math.round (diff / 1000 / 3600 / 24);
}
  
  var DaysTillNY=getDaysTillNY9();
  console.log(DaysTillNY);
 

//5.	Write a JavaScript function to check whether an `input` is an 
// array or not. 

function check(input) {
if(input instanceof Array){
    console.log("It is array");
  } else {
    console.log("It is not array");
  };
 }
 
check([1,3,6]);


//6.	Write a JavaScript function to clone an array


function clone (InputArray) {
	var ArrayResult =[];
	for(var i = 0; i < InputArray.length; i++){
		  ArrayResult.push(InputArray[i]);
	  };	
	return ArrayResult;
}

var array1 = [1,2,3,4];
var array2 = clone (array1);

console.log(array2);



//7.Write a JavaScript function to find the most frequent item of an array.

function findFrequentItem (InputArray) {
	var mf = 1; //default maximum frequency
	var m = 0;  //counter
	var item;  //to store item with maximum frequency
	for (var i=0; i<InputArray.length; i++)    //select element (current element)
	{
		m=0;   // make counter 0 for current element.
		for (var j=i; j<InputArray.length; j++)   //loop through next elements in array to compare calculate frequency of current element
		{
			if (InputArray[i] == InputArray[j]) {    //see if element occurs again in the array
				m++;			//increment counter if it does
			}
			if (mf<m) {   //compare current items frequency with maximum frequency
				mf=m;      //if m>mf store m in mf for upcoming elements
				item = InputArray[i];   // store the current element.
			}
		}
	}	
	return item;
}

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]; //array
console.log(findFrequentItem (arr1));


// 8.	Write a JavaScript function that inverts the case of the letters of the given string 
//and returns new string

function invertTheCase (InputString) {
	var NewString = '';
	for(var i = 0; i < InputString.length; i++){
		var NumberSymbol=InputString[i];
		 if (NumberSymbol==NumberSymbol.toUpperCase()){
			NewString += InputString[i].toLowerCase();
		 }
		 else {
			NewString += InputString[i].toUpperCase();
		 }
	  };	

	return NewString;
}
InputString="jhUhjgGGGGtyTY";
console.log (invertTheCase(InputString));


//9.	Write a JavaScript program to remove duplicate strings from a string array 
//(ignore case sensitivity)


function RemoveDuplicate (InputArray) {
	var ArrayResult =[];
	for (var i = 0; i < InputArray.length; i++) {
        if (InputArray[i] in ArrayResult) {
//			InputArray.splice(i, 1);
        } else {            // add this value to index
            ArrayResult.push(InputArray[i]);
        }
    }
	return ArrayResult;
}

var array1 = [1,2,3,4,4,3,2]; 
var array2 = RemoveDuplicate (array1);

console.log(array2);


//10.	Write a JavaScript program to shuffle an array

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;   // While there remain elements to shuffle...
  while (0 !== currentIndex) {     // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;     // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


var array1 = [1,2,3,4,4,2];
var array2 = shuffle (array1);
console.log(array2);


//11.	Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values 
//from an array

function cleanArray(actual) {
  var newArray = new Array();
  for (var i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i]);
    }
  }
  return newArray;
}


console.log(cleanArray([1,2,NaN]));






//13. Write a JavaScript function to merge two arrays and removes all duplicates elements

function Merge(InputArray1, InputArray2) {
	var ArrayResult =[];
	for(var i = 0; i < InputArray1.length; i++){
		  ArrayResult.push(InputArray1[i]);
	  };	
	for(var j = 0; j < InputArray2.length; j++){
		if (!(InputArray2[j] in ArrayResult))
		  ArrayResult.push(InputArray2[j]);
	  };	
	return ArrayResult;
}

var array1 = [1,2,4,3];
var array2 = [3,3,5,6];

var array3 = Merge(array1, array2);

console.log(array3);







//15. Write a JavaScript function to get a random item from an array

function Random(InputArray) {
	var randomId =  Math.floor((Math.random()*InputArray.length));
	var randomItem = InputArray[randomId];
	
	return randomItem;
}


var array1 = [1,2,3,4,5,6,7,8];
var MyNumber = Random (array1);

console.log(MyNumber);



//16.	Write a JavaScript function to move an array element from one position to another


function arraymove(arr, fromIndex, toIndex) {
	var elements = [];
	ArrayResult = clone (arr);
	
	ArrayResult[fromIndex]=arr[toIndex];
	ArrayResult[toIndex]=arr[fromIndex];
		
	    
	return ArrayResult;
}

var InArray = [1,2,3,4,5,6,7]
var newArray = arraymove(InArray, 2, 4);

console.log(newArray);




// 17.	Write a JavaScript function to get difference between two dates in days


function DiffTwoDates(OneDate, TwoDate) {
    //var diff = (new Date(OneDate)) - (new Date(TwoDate));
    var diff = (Date.parse(OneDate)) - (Date.parse(TwoDate));
	var d1 = Date.parse(OneDate); // зона UTC
	var d2 = Date.parse(TwoDate); // зона UTC
	diff = d2 - d1;
  return Math.round (diff / 1000 / 3600 / 24);
}
  
  var Difference=DiffTwoDates('2015/02/01', '2015/01/01');
  console.log(Difference);
 

 //18.	Write a JavaScript function to get the maximum date from an array of dates

function MaxDate (InputArray) {
	var item = 0;  
	for (var i=0; i<InputArray.length; i++) 
	{
		if(item < Date.parse(InputArray[i])) {
			item = Date.parse(InputArray[i]);
			} 	
	}
return new Date(item);
}

console.log(MaxDate(['2015/02/01', '2015/02/02', '2015/01/03']));




//19.	Write a JavaScript function to split a string and convert it into an array of words

function SplitAStrings (String1) {
	var result = [];
	var begin = 0;
	for (var i=0; i < String1.length; i++)
	{
			if ((String1[i] == ' ') || (i == String1.length - 1))
			{
				result.push(String1.substr(begin, i - begin));
				begin = i + 1;
			}
	}
	return result;
}

firstString = 'Write a JavaScript function to split a string and convert it into an array of words';

console.log(firstString.split(' ')); 
console.log(SplitAStrings(firstString));


//20.	Write a JavaScript function to capitalize the first letter of a string

function capitalize (s) {
	
	return s[0].toUpperCase() + s.slice(1);
	
}
	
console.log (capitalize('it is a good idea'));


//22. Write a JavaScript function to find the highest value in an array

function theHighest (InputArray){
	var item = 0; 
	for (var i=0; i<InputArray.length; i++) 
	{
		if(item < InputArray[i]) {
			item = InputArray[i];
		} 	
	}
return item;
	
}

console.log(theHighest([1,2,7,4,9]));


//24. Write a JavaScript function to check whether a variable is numeric or not


function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}


console.log(isNumeric(7));



//25. Write a JavaScript function to calculate the sum of values in an array

function sum (InputArray) {
	var item = 0; 
	for (var i=0; i<InputArray.length; i++) 
		item=item+InputArray[i];

return item;
	
}

console.log(sum([1,2,7,4,9]));




//26. Write a JavaScript program to get the length of an JavaScript object


function getLength (InputArray) {
	return (InputArray.length);	
}


console.log(getLength([1,2,7,4,9]));


//27. Write a JavaScript program to list the properties of a JavaScript object


var menu = {
  first: 25,
  second: 13,
  third: 11
};

for (var key in menu) {
  
  console.log(key + " значение: " + menu[key] );
}







//12. Write a JavaScript function to sort the following array of objects by title value using ‘sort’ method

var library = [

{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},

{ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},

{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}

];

function compare(a,b) {
  if (a.title < b.title)
    return -1;
  if (a.title > b.title)
    return 1;
  return 0;
}

library.sort(compare);
console.log(library);



//21. Write a JavaScript function to convert a string into camel case

function camelize(str){
	return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '');
  return camelize;
}
	
console.log(camelize("Java Script"));










