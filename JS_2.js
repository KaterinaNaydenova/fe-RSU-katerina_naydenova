function Calculator(leftOperand) {
	 this.leftOperand = leftOperand;
 this.multiply = function(firstOperand) {
	 firstResult=leftOperand*firstOperand;
	 return this;
 }
 
 this.add = function(secondOperand) {
	 result=firstResult+secondOperand;
	 return result;
 }
}

var calc = new Calculator(12);
console.log(calc.multiply(2).add(3)); // 27