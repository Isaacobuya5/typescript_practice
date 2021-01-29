class BaseClass {
    protected id: number;

    public getID(): number {
        return this.id;
    }
}

class ExampleClass extends BaseClass {

    constructor() {
        super();
        this.id = 0;
    }

 
}

let exampleClass = new ExampleClass();
// cannot be accessed here, only accessable within the class
// exampleClass.id = 3;