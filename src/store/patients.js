const state = {
  patients: [

  ]
};

const mutations = {
  'SET_PATIENTS' (state, patients) {
    state.patients = patients;
  }
};

const actions = {
  selectPatient({ commit }, patient) => {
    commit();
  },
  setPatients({ commit }) => {
    commit('SET_PATIENTS')
  }
};
