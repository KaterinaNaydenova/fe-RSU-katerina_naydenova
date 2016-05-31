function Compressor(name, capacity) {
    ElectronicComponents.call(this, name, capacity);
}

Compressor.prototype = Object.create(ElectronicComponents.prototype);