function Kitchen() {
    Bathroom.call(this);

    var refrigerator = new Refrigerator('Refrigerator');
    var mixer = new Mixer('Mixer');

    this.name = 'Kitchen';
    this.ElectricalAccessories = this.ElectricalAccessories.concat([refrigerator, mixer]);
}

Kitchen.prototype = Object.create(Bathroom.prototype);