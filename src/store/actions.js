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
const url = "https://pacific-citadel-59194.herokuapp.com";
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
    return new Promise((resolve, reject) => {
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
      axios.get(`${url}/patients?token=${token}`).then((result) => {
        context.commit(GET_PATIENTS, result.data);
      })
      .catch((err) => {
        console.log(err)
        reject();
      })
    })
  },

  [ADD_PATIENT](context, payload) {
    return new Promise((resolve, reject) => {
      let token = localStorage.getItem("doctor");
      if(!token){
        reject();
      }
      axios.post(`${url}/patients`, {'payload': payload, 'token': token}).then((result) => {
        context.commit(ADD_PATIENT, result.data[0]);
        resolve();
      }).catch((err) => {
        console.log(err);
        reject();
      })
    })
  },

  [REMOVE_PATIENT](context, payload) {
    return new Promise((resolve, reject) => {
      let token = localStorage.getItem("doctor");
      if (!token) {
        reject();
      }
      axios.delete(`${url}/patients/${payload.id}?token=${token}`, {
        'payload': payload,
        'token': token
      }).then((result) => {
        context.commit(REMOVE_PATIENT, result.data);
        resolve();
      }).catch((err) => {
        console.log(err);
        reject();
      })
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
        let sortedResult = result.data.sort((a,b) => a.id - b.id)
        context.commit(GET_TEST_RESULTS, sortedResult);
      })
      .catch((err) => {
        console.log(err);
        reject();
      })
    })
  },

  [ADD_TEST_RESULT](context, payload) {
    return new Promise((resolve, reject) => {
      let token = localStorage.getItem("doctor");
      if(!token) {
        reject();
      }
      axios.post(`${url}/results`, {'payload': payload, 'token': token}).then((result) => {
        console.log(payload)
        context.commit(ADD_TEST_RESULT, result.data[0]);
        resolve();
      }).catch((err) => {
        console.log(err);
        reject();
      })
    })
  },

  [REMOVE_TEST_RESULT](context, payload) {
    return new Promise((resolve, reject) => {
      let token = localStorage.getItem("doctor");
      if (!token) {
        reject();
      }
      axios.delete(`${url}/results/${payload.id}?token=${token}`, {
        'payload': payload,
        'token': token
      }).then((result) => {
        context.commit(REMOVE_TEST_RESULT, result.data);
        resolve();
      }).catch((err) => {
        console.log(err);
        reject();
      })
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

  [ADD_NOTE](context, payload) {
    return new Promise((resolve, reject) => {
      let token = localStorage.getItem("doctor");
      if(!token){
        reject();
      }
      axios.post(`${url}/notes`, {'payload': payload, 'token': token}).then((result) => {
        context.commit(ADD_NOTE, result.data);
        resolve();
      }).catch((err) => {
        console.log(err);
        reject();
      })
    })
  },

  [REMOVE_NOTE](context, payload) {
    return new Promise((resolve, reject) => {
      let token = localStorage.getItem("doctor");
      if(!token){
        reject();
      }
      axios.delete(`${url}/notes/${payload.id}?token=${token}`, {'payload': payload, 'token': token}).then((result) => {
        context.commit(REMOVE_NOTE, result.data);
        resolve();
      }).catch((err) => {
        console.log(err);
        reject();
      })
    })
  },

};
