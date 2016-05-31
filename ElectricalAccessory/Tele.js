function Tele(name) {
    var monitor = new Monitor('Monitor', 100);
    var powerCable = new PowerCable('PowerCable', 0);
    
    Complex.call(this, name, [
        monitor,
        powerCable
    ]);
}

Tele.prototype = Object.create(Complex.prototype);