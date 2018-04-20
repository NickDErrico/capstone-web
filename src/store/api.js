import axios from 'axios';
import router from 'vue-router';

//Define API request URL and request process

const url = 'http://localhost:8000'

export default {
  methods: {
    login: function(loginDoctor) {
      axios.post(`${url}/login`, loginDoctor)
        .then((result) => {
          console.log(result);
          this.dialog = false;
          localStorage.setItem("token", result.data.token);
          // window.location.href = '/profile'
        }).catch((e) => {
          console.log(e);
        })
    },

    register: function(registerDoctor) {
      axios.post(`${url}/register`, registerDoctor)
        .then((result) => {
          console.log(result);
          this.dialog = false;
          localStorage.setItem("token", result.data.token);
          router.forward('/profile')
        }).catch(() => {
          console.log("failed");
        })
    }
  }

}
