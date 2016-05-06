function Calculator(leftOperand) {
	this.leftOperand = leftOperand;
	
	this.multiply = function(firstOperand) {
		leftOperand *= firstOperand;
		return this;
	}

	this.add = function(secondOperand) {
		leftOperand += secondOperand;
		return this;
	}
	
	this.toString = function() {
		return leftOperand;
	}
}

var calc = new Calculator(12);
alert(calc.multiply(2).add(3).multiply(2)); // 27