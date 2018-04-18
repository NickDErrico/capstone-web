import axios from 'axios'

//Define API request URL and request process

const url = 'localhost:8000'

export default {
  getPatients: function (state, cb) {
    axios.get(`http://${url}/patients`)
      .then((res) => {
        if(res.status >= 200 && res.status < 300) {
          console.log("ello ",res)
          cb(res.data)
        }
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },

}
