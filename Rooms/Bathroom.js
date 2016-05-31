function Bathroom() {
    var washer = new Washer('Washer');
    var heater = new Heater('Heater');
    

    Room.call(this, 'Bathroom', [washer]);
    
    this.ElectricalAccessories = this.ElectricalAccessories.concat([washer, heater]);
}

Bathroom.prototype = Object.create(Room.prototype);