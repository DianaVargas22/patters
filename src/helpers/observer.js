// Observer: notifica a la interfaz cuando se agrega un paciente
export class PatientObservable {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
    }

    notify(patient) {
        this.observers.forEach((fn) => fn(patient));
    }
}
