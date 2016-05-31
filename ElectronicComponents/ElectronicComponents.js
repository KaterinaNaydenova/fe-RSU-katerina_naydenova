function ElectronicComponents(name, capacity) {
    this.name = name;
    this.capacity = capacity;
}

ElectronicComponents.prototype.getName = function () {
    return this.name;
};

ElectronicComponents.prototype.getCapacity = function () {
    return this.capacity;
};

ElectronicComponents.prototype.checkIfHas = function (what) {
    if (this.getName().toLowerCase().indexOf(what.toLowerCase()) >= 0) {
        console.info('"' + what + '" has been found in "' + this.getName() + '"');
    }
};