function Heater(name) {
    var heatingElement = new HeatingElement('Monitor', 1000);
    var powerCable = new PowerCable('PowerCable', 0);
    
    Complex.call(this, name, [
        heatingElement,
        powerCable
    ]);
}

Heater.prototype = Object.create(Complex.prototype);