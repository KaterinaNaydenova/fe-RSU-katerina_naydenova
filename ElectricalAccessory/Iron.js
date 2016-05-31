function Iron(name) {
    var heatingElement = new HeatingElement('Monitor', 1000);
    var powerCable = new PowerCable('PowerCable', 0);
    
    Complex.call(this, name, [
        heatingElement,
        powerCable
    ]);
}

Iron.prototype = Object.create(Complex.prototype);