var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AbstractEmployees = /** @class */ (function () {
    function AbstractEmployees() {
    }
    AbstractEmployees.prototype.printDetails = function () {
        console.log(this.getDetails());
    };
    return AbstractEmployees;
}());
var NewEmployee = /** @class */ (function (_super) {
    __extends(NewEmployee, _super);
    function NewEmployee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewEmployee.prototype.getDetails = function () {
        return "id: " + this.id + ", name: " + this.name;
    };
    return NewEmployee;
}(AbstractEmployees));
var NewManager = /** @class */ (function (_super) {
    __extends(NewManager, _super);
    function NewManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewManager.prototype.getDetails = function () {
        return _super.prototype.getDetails.call(this) + (" , Employee count: " + this.Employees.length);
    };
    return NewManager;
}(NewEmployee));
var employee1 = new NewEmployee();
employee1.id = 1;
employee1.name = "Isaac Obuya";
employee1.printDetails();
var manager = new NewManager();
manager.id = 2;
manager.name = "John Doe";
manager.Employees = new Array(employee1);
manager.printDetails();
