function Hall() {
    var pc = new PC('MyPersonalComputer');
    Room.call(this, 'Hall', [pc]);
}

Hall.prototype = Object.create(Room.prototype);