// Declare two variables and show them
var Name = "Katerina";
var Surname = "Naydenova";

console.log (Name);
console.log (Surname);

//Write a function that can find triangle's area
function Triangle (a,h) {
	return a*h/2
};

var result=Triangle(5,7);
console.log(result);

//Write a function that reverse the given array using three kind of loops
var fruits=["apple", "orange", "lemon"];
for(var i = 0; i < fruits.length; i++){
      console.log(fruits[i]);
  };

//Explain the difference between ++i and i++ with example
var a = 10;
for (var i = 0; i < 5; i++) {
    b=a++; 
}
console.log(b);

var a=10;
for (var i = 0; i < 5; i++) {
    c=(++a); 
}
console.log(c); 

//Write a function that checks if the given arguments is positive number or negative number or is 0
function Check(a) {
	if (a>0) {console.log("This is positive number")}
		else if (a<0) {
			console.log("This is negative number")
		}
	else {console.log("This is zero")}	
}

Check (50);

//Write a function that calculates factorial

function Fuctorial(a) {
	var result=1;
	for (var i = 1; i <= a; i++) {
	result = result*i;
	}
	return result;
}

res=Fuctorial(5);
console.log(res);









