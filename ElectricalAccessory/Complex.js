function Complex(name, ElectricalAccessories) {
    this.ElectricalAccessories = ElectricalAccessories;
    ElectronicComponents.call(this, name, this.getCapacity());
}

Complex.prototype = Object.create(ElectronicComponents.prototype);

Complex.prototype.getCapacity = function () {
    var totalCapacity = 0;

    for (var i = 0; i < this.ElectricalAccessories.length; i++) {
        totalCapacity += this.ElectricalAccessories[i].getCapacity();
    }

    return totalCapacity;
};

Complex.prototype.showCapacity = function () {
    console.info('Weight of ' + this.getName() + ' is ' + this.getCapacity());
};

Complex.prototype.search = function (what) {
    this.checkIfHas(what);

    this.ElectricalAccessories.forEach(function (electricalAccessory) {
        electricalAccessory.checkIfHas(what);
    })
};