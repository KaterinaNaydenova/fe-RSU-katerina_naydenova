function Electromotor(name, capacity) {
    ElectronicComponents.call(this, name, capacity);
}

Electromotor.prototype = Object.create(ElectronicComponents.prototype);