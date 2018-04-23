import {LOGIN_DOCTOR, REGISTER_DOCTOR, GET_PATIENTS, CHECK_DOCTOR, LOGOUT_DOCTOR, LOGOUT, GET_TEST_RESULTS} from "./mutation-types";
export const mutations = {

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
  [GET_PATIENTS](state, payload) {
    state.patients = payload;
  },
  [GET_TEST_RESULTS](state, payload) {
    state.testResults = payload;
  },
  [LOGOUT](state) {
    state.loggedIn = false
    state.doctor = {};
    localStorage.removeItem('doctor')
  }
};
