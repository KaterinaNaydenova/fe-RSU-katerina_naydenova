function Washer(name) {
    var heatingElement = new HeatingElement('Monitor', 1000);
    var powerCable = new PowerCable('PowerCable', 0);
	var electromotor = new Electromotor('Electromotor', 400);
    
    Complex.call(this, name, [
        heatingElement,
        powerCable,
		electromotor        
    ]);
}

Washer.prototype = Object.create(Complex.prototype);