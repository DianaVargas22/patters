import React, { useState } from 'react';
import { PatientFactory } from '../helpers/factory';
import { withMedicalHistory } from '../helpers/decorator';

// Formulario para agregar pacientes. Usa el patrón Factory para crear pacientes y el patrón Decorator para agregar historial médico

const PatientForm = ({ onNewPatient }) => {
    const [name, setName] = useState('');
    const [species, setSpecies] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let patient = PatientFactory.createPatient(name, species, parseInt(age));
        patient = withMedicalHistory(patient);
        patient.addRecord('Consulta inicial registrada');
        onNewPatient(patient);
        setName('');
        setSpecies('');
        setAge('');
    };

    return (
        <div className="card shadow-sm mb-4">
            <div className="card-body">
                <h3 className="card-title">Agregar nuevo paciente</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nombre del paciente"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Especie (perro, gato...)"
                            value={species}
                            onChange={(e) => setSpecies(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Edad"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            required
                            min={0}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                        Guardar paciente
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PatientForm;
