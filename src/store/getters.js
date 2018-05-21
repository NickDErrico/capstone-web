export const getters = {
  doctor: (state) => {
    return Object.keys(state.doctor).length !== 0 ? state.doctor : false;
  },

  patients: (state) => {
    return state.patients.length > 0 ? state.patients : false;
  },

  testResults: (state) => {
    return state.testResults.length > 0 ? state.testResults : false;
  },

  notes: (state) => {
    return state.notes.length > 0 ? state.notes : false;
  },

  getPatientName: (state) => id => {
    return state.patients.filter(patient => patient.id == id)[0]
  }
  
};
