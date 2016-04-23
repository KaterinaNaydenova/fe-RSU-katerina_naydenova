function Calculator(leftOperand){
  this.leftOperand = leftOperand;
  this.multiply = function() {
	 var s=1;
	  for(var i=0; i<arguments.length; i++) s = s*arguments[i]
	  result=s*leftOperand;
	 return result;
 }
 
 this.add = function() {
	 var s=0;
	  for(var i=0; i<arguments.length; i++) s = s+arguments[i]
	  result=s+leftOperand;
	 return result;
 }
 
  this.subtract = function() {
	 var s=0;
	  for(var i=0; i<arguments.length; i++) s = s-arguments[i]
	  result=leftOperand+s;
	 return result;
 }
 
   this.divide = function() {
	 var s=1;
	  for(var i=0; i<arguments.length; i++) s = s*arguments[i]
	  result=leftOperand/s;
	 return result;
 }
}

var calc = new Calculator(12);

//Various number of arguments
console.log(calc.multiply(2, 2, 5, 4)); //192
console.log(calc.add(3, 1, 2)); //18
console.log(calc.subtract(1, 4, 2, 1)); //4
console.log(calc.divide(2, 6)); //1