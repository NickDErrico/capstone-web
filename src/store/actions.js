import {
  LOGIN_DOCTOR,
  REGISTER_DOCTOR,
  CHECK_DOCTOR,
  LOGOUT,
  GET_PATIENTS,
  GET_SINGLE_PATIENT,
  ADD_PATIENT,
  UPDATE_PATIENT,
  REMOVE_PATIENT,
  GET_TEST_RESULTS,
  GET_SINGLE_PATIENT_TEST_RESULTS,
  ADD_TEST_RESULT,
  UPDATE_TEST_RESULT,
  REMOVE_TEST_RESULT,
  GET_NOTES,
  ADD_NOTE,
  UPDATE_NOTE,
  REMOVE_NOTE
} from "./mutation-types";
const url = "http://localhost:8000";
import axios from "axios";
export const actions = {
  // Context is store itself and payload is the data

  // LOGIN/LOGUT :
  [LOGIN_DOCTOR](context, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${url}/login`, payload)
        .then((result) => {
          context.commit(LOGIN_DOCTOR, result.data);
          resolve();
        }).catch((err) => {
          console.log(err);
          reject();
        })
    })
  },

  [REGISTER_DOCTOR](context, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${url}/register`, payload)
        .then((result) => {
          context.commit(REGISTER_DOCTOR, result.data);
          resolve();
        }).catch((err) => {
          console.log(err);
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
        reject();
      })
    })
  },

  [LOGOUT](context) {
    return new Promise((resolve, reject)=>{
      localStorage.removeItem("doctor");
      context.commit(LOGOUT);
      resolve();
    }).catch((err) => {
      console.log(err);
      reject();
    })
  },

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // PATIENTS :
  [GET_PATIENTS](context) {
    return new Promise((resolve, reject) => {
      let token = localStorage.getItem("doctor");
      if(!token){
        reject();
      }
      axios.get(`${url}/patients?token=${token}`).then((result)=>{
        context.commit(GET_PATIENTS, result.data);
      })
      .catch((err) => {
        console.log(err)
        reject();
      })
    })
  },

  [GET_SINGLE_PATIENT](context) {
    return new Promise((resolve, reject) => {
      let token = localStorage.getItem("doctor");
      if(!token){
        reject();
      }
      axios.get(`${url}/patients/:id?token=${token}`).then((result)=>{
        context.commit(GET_PATIENTS, result.data);
      })
      .catch((err) => {
        console.log(err)
        reject();
      })
    })
  },

  [REMOVE_PATIENT](context) {
    return new Promise((resolve, reject)=>{
      context.commit(REMOVE_PATIENT);
      resolve();
    }).catch((err) => {
      console.log(err);
      reject();
    })
  },

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // TEST RESULTS :
  [GET_TEST_RESULTS](context) {
    return new Promise((resolve, reject) => {
      let token = localStorage.getItem("doctor");
      if(!token){
        reject();
      }
      axios.get(`${url}/results?token=${token}`).then((result)=>{
        context.commit(GET_TEST_RESULTS, result.data);
      })
      .catch((err) => {
        console.log(err);
        reject();
      })
    })
  },

  [GET_SINGLE_PATIENT_TEST_RESULTS](context) {
    return new Promise((resolve, reject) => {
      let token = localStorage.getItem("doctor");
      if(!token){
        reject();
      }
      axios.get(`${url}/results/:id?token=${token}`).then((result)=>{
        context.commit(GET_TEST_RESULTS, result.data);
      })
      .catch((err) => {
        console.log(err);
        reject();
      })
    })
  },

  [REMOVE_TEST_RESULT](context) {
    return new Promise((resolve, reject)=>{
      context.commit(REMOVE_TEST_RESULT);
      resolve();
    }).catch((err) => {
      console.log(err);
      reject();
    })
  },

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // NOTES :
  [GET_NOTES](context) {
    return new Promise((resolve, reject) => {
      let token = localStorage.getItem("doctor");
      if(!token){
        reject();
      }
      axios.get(`${url}/notes?token=${token}`).then((result)=>{
        context.commit(GET_NOTES, result.data);
      })
      .catch((err) => {
        console.log(err)
        reject();
      })
    })
  },

  [ADD_NOTE](context, payload){
    return new Promise((resolve, reject)=>{
      const token = localStorage.getItem("doctor");
      if(token){
        axios.post("notes", {token:token, note: payload}, {emulateJSON:true})
          .then((res)=>{
            context.dispatch(GET_TEAMS);
            resolve()
          })
          .catch((err)=>{
            reject(err);
          })
      }else{
        reject();
      }
    })
  },

  [REMOVE_NOTE](context) {
    return new Promise((resolve, reject)=>{
      context.commit(REMOVE_NOTE);
      resolve();
    }).catch((err) => {
      console.log(err);
      reject();
    })
  }
};
