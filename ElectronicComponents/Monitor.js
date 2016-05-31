function Monitor(name, capacity) {
    ElectronicComponents.call(this, name, capacity);
}

Monitor.prototype = Object.create(ElectronicComponents.prototype);