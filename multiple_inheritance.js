var DerivedClass = /** @class */ (function () {
    function DerivedClass(id, name, gender) {
        this.id = id;
        this.name = name;
        this.gender = gender;
    }
    DerivedClass.prototype.printDetails = function () {
        return this.name + " is a " + this.gender;
    };
    return DerivedClass;
}());
var derivedClass = new DerivedClass(2, "Isaac Obuya", "Male");
console.log(derivedClass.printDetails());
