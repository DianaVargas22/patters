import { useEffect, useState } from "react";
import PatientForm from "./components/PatientForm";
import PatientList from "./components/PatientList";
import { PatientObservable } from "./helpers/observer";

const observable = new PatientObservable();

const App = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        const handler = (newPatient) => {
            setPatients((prev) => [...prev, newPatient]);
        };
        // Se suscribe al Observable

        observable.subscribe(handler);

        return () => {
            observable.observers = observable.observers.filter((fn) => fn !== handler);
        };
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Gestión de Pacientes Veterinaria 🐾</h1>
            <PatientForm onNewPatient={(p) => observable.notify(p)} />
            <PatientList patients={patients} />
        </div>
    );
};

export default App
