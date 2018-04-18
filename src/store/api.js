import axios from 'axios'

//Define API request URL and request process

const url = 'localhost:8000'

export default {
  getPatientss: function (state, cb) {
    axios.get(`${url}/patients`)
      .then((res) => {
        if(res.status >= 200 && res.status < 300) {
          cb(res.data.data.children)
        }
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },

}
