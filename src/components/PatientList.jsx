//Componente que lista pacientes. Se suscribe al Observable
const PatientList = ({ patients }) => {
    return (

        <div className="card shadow-sm">
            <div className="card-body">
                <h5 className="card-title">Lista de pacientes</h5>
                <ul className="list-group"> {patients.map((p, index) => (
                    <li key={index} className="list-group-item">
                        <strong>{p.name}</strong>
                        ({p.species}, {p.age} años) <br />
                        <small className="text-muted"> Historial: {p.medicalHistory.join(', ')} </small>
                    </li> ))}
                </ul>
            </div>
        </div>
    );
};

export default PatientList;
