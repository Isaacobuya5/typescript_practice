"use strict";
exports.__esModule = true;
exports.Trainee = exports.addNumbers = void 0;
function addNumbers(num1, num2) {
    return num1 + num2;
}
exports.addNumbers = addNumbers;
var Trainee = /** @class */ (function () {
    function Trainee(id, full_names, course) {
        var _this = this;
        this.printTraineeDetails = function () { return "id: " + _this.id + ", full_names: " + _this.full_names + ", course: " + _this.course; };
        this.id = id;
        this.full_names = full_names;
        this.course = course;
    }
    return Trainee;
}());
exports.Trainee = Trainee;
