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