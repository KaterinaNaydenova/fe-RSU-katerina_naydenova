function Refrigerator(name) {
    var compressor = new Compressor('Monitor', 800);
    var powerCable = new PowerCable('PowerCable', 0);
    
    Complex.call(this, name, [
        compressor,
        powerCable
    ]);
}

Refrigerator.prototype = Object.create(Complex.prototype);