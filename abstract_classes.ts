abstract class AbstractEmployees {
    public id: number;
    public name: string;

    abstract getDetails(): string;

    public printDetails() {
        console.log(this.getDetails());
    }
}

class NewEmployee extends AbstractEmployees {
    getDetails(): string {
        return `id: ${this.id}, name: ${this.name}`;
    }
}

class NewManager extends NewEmployee {
    // additional property
    public Employees: NewEmployee[];

    getDetails(): string {
        return super.getDetails() + ` , Employee count: ${this.Employees.length}`
    }
}

let employee1 = new NewEmployee();
employee1.id = 1;
employee1.name = "Isaac Obuya";
employee1.printDetails();

let manager = new NewManager();
manager.id = 2;
manager.name = "John Doe";
manager.Employees = new Array(employee1);
manager.printDetails();