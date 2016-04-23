function Calculator(leftOperand){
 this.leftOperand = leftOperand;
 this.multiply = function(firstOperand) {
	 result=leftOperand*firstOperand;
	 return result;
 }
 
 this.add = function(secondOperand) {
	 result=leftOperand+secondOperand;
	 return result;
 }
 
 this.subtract = function(thirdOperand) {
	 result=leftOperand-thirdOperand;
	 return result;
 }
 
 this.divide = function(fourthOperand) {
	 result=leftOperand/fourthOperand;
	 return result;
 }
}

var calc = new Calculator(12);
console.log(calc.multiply(3)); //36
console.log(calc.add(3)); //15
console.log(calc.subtract(1)); //11
console.log(calc.divide(2)); //6

