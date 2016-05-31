function HeatingElement(name, capacity) {
    ElectronicComponents.call(this, name, capacity);
}

HeatingElement.prototype = Object.create(ElectronicComponents.prototype);