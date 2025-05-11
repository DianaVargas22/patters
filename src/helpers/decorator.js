// Decorator: extiende la funcionalidad del paciente agregando un historial médico.
export function withMedicalHistory(patient, history = []) {
    return {
        ...patient,
        medicalHistory: history,
        addRecord(record) {
            this.medicalHistory.push(record);
        },
    };
}
