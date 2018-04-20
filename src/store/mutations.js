import {LOGIN_USER, REGISTER_USER, GET_PATIENTS, CHECK_DOCTOR} from "./mutation-types";
export const mutations = {

  [REGISTER_USER](state, payload) {
    localStorage.setItem("doctor", payload.token);
    state.token = payload.token;
    state.doctor = payload.doctor;
  },
  [LOGIN_USER](state, payload) {
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
  }
};
