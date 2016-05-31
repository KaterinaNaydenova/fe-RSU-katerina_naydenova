var Closures = new (function() {
    this.test = function () {
        //console.log(this.is_Array(undefined));
        //console.log(this.is_Array('qwe'));
        //console.log(this.is_Array([1,3,6]));
        //console.log(this.arrayClone([1,[1,3,6],6]));
        //console.log(this.mostFrequent([1,2,1,3,6,6]));
            //var library = [
            //{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
            //{ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
            //{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
            //];
        //library.sort(compare)
        //console.log(this.library);
        //console.log(this.merge([1,2,4,3],[1,9,8,5]));
		//console.log(this.remove([1,2,3,4,5,6],3));
        //console.log(this.random([1,2,3,4,5,6]));
        //console.log(this.SplitAStrings('This is String '));
        //console.log(this.capitalize('it is a good idea'));
        //console.log(this.camelize("Java Script"));
        //console.log(this.iterateArray([1,2,3,4,5,6]));
        //console.log(this.arraymove([1,2,3,4,5],1,3));
        
    }
    
    
    //1. Write a JavaScript function to check whether an `input` is an array or not. 
    this.is_Array = function(input) {
        return input instanceof Array;
    }
    
    //2.Write a JavaScript function to deep clone an array using recursion
    this.arrayClone = function (arr) {
        if (Array.isArray(arr)) {
            var copy = arr.slice(0);
            for (var i = 0; i < copy.length; i++) {
                copy[i] = this.arrayClone(copy[i]);
            }
            return copy;
        } else if(typeof arr === 'object' ) {
            throw 'Cannot clone array containing an object!';
        } else {
            return arr;
        }
    }
    
    //3.	Write a JavaScript function to find the most frequent item of an array.
    this.mostFrequent = function(arr) {
        var mf = 1; 
        var m = 0;  
        var item; 
        for (var i = 0; i < arr.length; i++)  
        {
            m=0;   
            for (var j = i; j<arr.length; j++)   
            {
                if (arr[i] == arr[j]) {    
                    m++;		
                }
                if (mf < m) {   
                    mf = m;     
                    item = arr[i];   
                }
            }
        }	
        return item;
    }    

//6.Write a JavaScript function to sort the following array of objects by title value using ‘sort’ method


this.compare = function(a,b) {
  if (a.title < b.title)
    return -1;
  if (a.title > b.title)
    return 1;
  return 0;
};


//7.Write a JavaScript function to merge two arrays and removes all duplicates elements
this.merge = function (InputArray1, InputArray2) {
	var ArrayResult = [];
	for(var i = 0; i < InputArray1.length; i++) {
        ArrayResult.push(InputArray1[i]);
	}	
	for(var j = 0; j < InputArray2.length; j++){
		if (!(InputArray2[j] in ArrayResult))
            ArrayResult.push(InputArray2[j]);
    }
	return ArrayResult;
};

//8.Write a JavaScript function to remove a specific element from an array

this.remove = function (InpArr, x){
	var index = InpArr.indexOf(x);
	if (index > -1) {
    InpArr.splice(index, 1);
}	
 };

//9.	Write a JavaScript function to get a random item from an array
    this.random = function (InputArray){
    var randomId = Math.floor((Math.random()*InputArray.length));
	var randomItem = InputArray[randomId];
	
	return randomItem;
        
    };
    
    

//10.	Write a JavaScript function to move an array element from one position to another

this.arraymove = function (arr, fromIndex, toIndex) {
	var elements = [];
    
        function clone (InputArray) {
	        var xArrayResult =[];
	        for(var i = 0; i < InputArray.length; i++){
		    xArrayResult.push(InputArray[i]);
	        };	
	    return xArrayResult;
        };
    
	var ArrayResult = clone (arr);
	
	ArrayResult[fromIndex]=arr[toIndex];
	ArrayResult[toIndex]=arr[fromIndex];
	    
	return ArrayResult;
}


//11.	Write a JavaScript function to split a string and convert it into an array of words
    this.SplitAStrings = function (String1) {
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
        
    };

//12.	Write a JavaScript function to capitalize the first letter of a string
this.capitalize = function (s) {
	return s[0].toUpperCase() + s.slice(1);
};


//13.	Write a JavaScript function to convert a string into camel case

this.camelize = function (str){
	return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '');
    return camelize;
};



//14.	Write a JavaScript function that accepts two arguments: array and function. The function iterate the entire array and calls the given function with the current array element.
    this.iterateArray = function (array){
        var callback = 0;
	for (var i=0; i<array.length; i++) 
		callback=callback+array[i];

return callback;      
    };


///////// end of module
})();



Closures.test();