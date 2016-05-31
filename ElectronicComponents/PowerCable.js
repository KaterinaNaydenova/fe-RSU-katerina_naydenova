function PowerCable(name, capacity) {
    ElectronicComponents.call(this, name, capacity);
}

PowerCable.prototype = Object.create(ElectronicComponents.prototype);