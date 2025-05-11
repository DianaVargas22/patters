
import React, { useState } from 'react';

export default function AppWithNoPatterns() {
    const [patients, setPatients] = useState([]);

    const handleAddPatient = (e) => {
        e.preventDefault();

        const name = e.target.name.value.trim();
        const species = e.target.species.value.trim();
        const age = e.target.age.value.trim();

        if (!name || !species || !age) {
            alert("Todos los campos son obligatorios.");
            return;
        }
        const newPatient = {
            name,
            species,
            age,
            history: [],
        };

        setPatients([...patients, newPatient]);

        e.target.reset();
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Gestión de Pacientes Veterinaria</h1>

            <form onSubmit={handleAddPatient}>
                <div className="mb-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre del paciente"
                        required
                    />
                </div>
                <div className="mb-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Especie (perro, gato...)"
                        required
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Edad"
                        min={0}
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                    Guardar paciente
                </button>
            </form>

            <h2>Lista de Pacientes</h2>
            <ul>
                {patients.map((p, idx) => (
                    <li key={idx}>
                        <strong>{p.name}</strong> ({p.species}, {p.age} años)
                        <ul>
                            {p.history.length === 0 ? (
                                <li>Sin historial médico</li>
                            ) : (
                                p.history.map((h, i) => <li key={i}>{h}</li>)
                            )}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}
