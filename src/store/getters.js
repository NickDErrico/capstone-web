export const getters = {
  doctor: (state) => {
    return Object.keys(state.doctor).length !== 0 ? state.doctor : false;
  },

  patients: (state) => {
    return state.patients.length > 0 ? state.patients : false;
  }

};