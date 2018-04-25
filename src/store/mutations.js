import {
  LOGIN_DOCTOR,
  REGISTER_DOCTOR,
  CHECK_DOCTOR,
  LOGOUT,
  GET_PATIENTS,
  GET_TEST_RESULTS,
  GET_NOTES,
  REMOVE_PATIENT,
  REMOVE_TEST_RESULT,
  REMOVE_NOTE,
  ADD_PATIENT,
  ADD_TEST_RESULT,
  ADD_NOTE,
  UPDATE_PATIENT,
  UPDATE_TEST_RESULT,
  UPDATE_NOTE
} from "./mutation-types";
export const mutations = {

  // LOGIN/LOGOUT :
  [REGISTER_DOCTOR](state, payload) {
    localStorage.setItem("doctor", payload.token);
    state.token = payload.token;
    state.doctor = payload.doctor;
  },

  [LOGIN_DOCTOR](state, payload) {
    localStorage.setItem("doctor", payload.token);
    state.token = payload.token;
    state.doctor = payload.doctor;
  },

  [CHECK_DOCTOR](state, payload) {
    state.token = localStorage.getItem("doctor");
    state.doctor = payload.doctor;
  },

  [LOGOUT](state) {
    state.loggedIn = false
    state.doctor = {};
    localStorage.removeItem('doctor')
  },

  // GET :
  [GET_PATIENTS](state, payload) {
    state.patients = payload;
  },

  [GET_TEST_RESULTS](state, payload) {
    state.testResults = payload;
  },

  [GET_NOTES](state, payload) {
    state.notes = payload;
  },

  // REMOVE :
  [REMOVE_PATIENT](state) {
    if(state.patient.id === req.params.id) {
      state.patient[req.params.id] = {};
    }
  },

  [REMOVE_TEST_RESULT](state) {
    if(state.testResults.id === req.params.id) {
      state.testResults[req.params.id] = {};
    }
  },

  [REMOVE_NOTE](state) {
    if(state.notes.id === req.params.id) {
      state.notes[req.params.id] = {};
    }
  },


  // CREATE :
  [ADD_PATIENT](state, payload) {

  },

  [ADD_TEST_RESULT](state, payload) {

  },

  [ADD_NOTE](state, payload) {

  },


  //UPDATE :
  [UPDATE_PATIENT](state, payload) {

  },

  [UPDATE_TEST_RESULT](state, payload) {

  },

  [UPDATE_NOTE](state, payload) {

  },
};
