function Mixer(name) {
    var electromotor = new Electromotor('Monitor', 800);
    var powerCable = new PowerCable('PowerCable', 0);
    
    Complex.call(this, name, [
        electromotor,
        powerCable
    ]);
}

Mixer.prototype = Object.create(Complex.prototype);