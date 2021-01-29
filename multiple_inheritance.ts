interface IBase {
    id: number;
    name: string;
}

interface IOtherBase {
    gender: string;
    printDetails(): string;
}

class DerivedClass implements IBase, IOtherBase {

    id: number;
    name: string;
    gender: string;

    constructor(id: number, name: string, gender: string) {
        this.id = id;
        this.name = name;
        this.gender = gender;
    }

    printDetails() {
        return `${this.name} is a ${this.gender}`;
    }
}

let derivedClass = new DerivedClass(2, "Isaac Obuya", "Male");
console.log(derivedClass.printDetails());