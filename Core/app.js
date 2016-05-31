function Application() {

}

Application.prototype.start = function () {
    var bathroom = new Bathroom();
    bathroom.showCapacity();
    bathroom.search('Washer');

    var hall = new Hall();
    hall.showCapacity();
    hall.search('Tele');

    var kitchen = new Kitchen();
    kitchen.showCapacity();
    kitchen.search('Refrigerator');
};