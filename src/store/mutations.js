import {
  LOGIN_DOCTOR,
  REGISTER_DOCTOR,
  CHECK_DOCTOR,
  LOGOUT,
  GET_PATIENTS,
  ADD_PATIENT,
  UPDATE_PATIENT,
  REMOVE_PATIENT,
  GET_TEST_RESULTS,
  ADD_TEST_RESULT,
  UPDATE_TEST_RESULT,
  REMOVE_TEST_RESULT,
  GET_NOTES,
  ADD_NOTE,
  UPDATE_NOTE,
  REMOVE_NOTE
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

  // PATIENTS :
  [GET_PATIENTS](state, payload) {
    state.patients = payload;
  },

  [ADD_PATIENT](state, payload) {
    state.token = localStorage.getItem("doctor");
    state.patients.push(payload);
  },

  [UPDATE_PATIENT](state, payload) {

  },

  [REMOVE_PATIENT](state) {
    state.token = localStorage.getItem("doctor");
    state.patients.splice(payload, 1)
  },

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // TEST RESULTS :
  [GET_TEST_RESULTS](state, payload) {
    state.testResults = payload;
  },

  [ADD_TEST_RESULT](state, payload) {
    state.token = localStorage.getItem("doctor");
    state.testResults.push(payload);
  },

  [UPDATE_TEST_RESULT](state, payload) {

  },

  [REMOVE_TEST_RESULT](state) {
    if(state.testResults.id === req.params.id) {
      state.testResults[req.params.id] = {};
    }
  },


  // NOTES :
  [GET_NOTES](state, payload) {
    state.notes = payload;
  },

  [ADD_NOTE](state, payload) {
    state.token = localStorage.getItem("doctor");
    state.notes.push(payload);
  },

  [UPDATE_NOTE](state, payload) {

  },

  [REMOVE_NOTE](state) {
    if(state.notes.id === req.params.id) {
      state.notes[req.params.id] = {};
    }
  },
};
