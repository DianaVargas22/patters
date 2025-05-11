//Factory: permite crear objetos pacientes sin acoplar directamente al constructor.
export class Patient {
    constructor(name, species, age) {
        this.name = name;
        this.species = species;
        this.age = age;
    }
}

export class PatientFactory {
    static createPatient(name, species, age) {
        return new Patient(name, species, age);
    }
}
