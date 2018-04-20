import {LOGIN_DOCTOR, REGISTER_DOCTOR, GET_PATIENTS, CHECK_DOCTOR, LOGOUT} from "./mutation-types";
const url = "http://localhost:8000";
import axios from "axios";
export const actions = {
  // Context is store itself and payload is the data
  [LOGIN_DOCTOR](context, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${url}/login`, payload)
        .then((result) => {
          context.commit(LOGIN_DOCTOR, result.data)
          resolve();
        }).catch((e) => {
          console.log(e);
        })
    })
  },

  [REGISTER_DOCTOR](context, payload) {
    return new Promise((resolve, reject) => {
      console.log("running");
      axios.post(`${url}/register`, payload)
        .then((result) => {
          context.commit(REGISTER_DOCTOR, result.data)
          resolve();
        }).catch(() => {
          console.log("failed");
        })
      })
  },

  [GET_PATIENTS](context) {
    return new Promise((resolve, reject) => {
      let token = localStorage.getItem("doctor");
      if(!token){
        reject();
      }
      axios.get(`${url}/patients?token=${token}`).then((result)=>{
        console.log(result);
        context.commit(GET_PATIENTS, result.data);
      })
      .catch(() => {
        reject();
      })
    })
  },

  [CHECK_DOCTOR](context, token) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/check?token=${token}`).then((result) => {
        context.commit(CHECK_DOCTOR, result.data);
        resolve();
      }).catch((err) => {
        console.log(err);
        reject()
      })
    })
  },

  [LOGOUT](context) {
    return new Promise((resolve, reject)=>{
      localStorage.removeItem("doctor");
      context.commit(LOGOUT);
      resolve();
    })
  }
};
