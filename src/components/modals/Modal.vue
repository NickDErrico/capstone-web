<template>
  <v-container>
    <v-layout row justify-center>
      <v-flex xs12>
        <v-dialog v-model="dialog" persistent max-width="50%">
          <v-btn v-if="!hasAccount" color="primary" dark slot="activator">Register</v-btn>
          <v-btn v-if="hasAccount" color="primary" dark slot="activator">Log In</v-btn>
          <v-card>
            <v-card-title class="blue darken-3">
              <span v-if="hasAccount" class="headline white--text">Log In</span>
              <span v-if="!hasAccount" class="headline white--text">Register</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-form>
                  <v-flex v-if="!hasAccount" xs12 sm6 md6>
                    <v-text-field label="first name" v-model="registerDoctor.first_name" required></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md6 v-if="!hasAccount">
                    <v-text-field label="last name" v-model="registerDoctor.last_name" required></v-text-field>
                  </v-flex>
                  <v-flex xs12 v-if="!hasAccount">
                    <v-text-field label="Email" v-model="registerDoctor.email" required></v-text-field>
                  </v-flex>
                  <v-flex xs12 v-if="!hasAccount">
                    <v-text-field label="Password" type="password" v-model="registerDoctor.password" required></v-text-field>
                  <v-flex xs12 v-if="!hasAccount">
                    <v-text-field label="Confirm Password" type="password" v-model="registerDoctor.confirmPassword" required></v-text-field>
                  </v-flex>
                  <v-alert type="error" :value="registerFormError.show">{{registerFormError.message}}</v-alert>
                  </v-flex>
                  <v-flex xs12 v-if="hasAccount">
                    <v-text-field label="Email" v-model="loginDoctor.email" required></v-text-field>
                  </v-flex>
                  <v-flex xs12 v-if="hasAccount">
                    <v-text-field label="Password" type="password" v-model="loginDoctor.password" required></v-text-field>
                  </v-flex>
                  <v-alert type="error" :value="loginFormError.show">{{loginFormError.message}}</v-alert>
                </v-form>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click.native="dialog = false">Cancel</v-btn>
              <v-btn color="blue darken-1" dark @click.native="submit">Submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-flex>
    </v-layout>
      <v-layout row justify-center>
        <v-flex xs12>
          <a v-if="!hasAccount" @click="hasAccount = true">Already a member? click to login</a>
          <a v-if="hasAccount" @click="hasAccount = false">Not a member? click to register</a>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
  import axios from "axios";
  import { LOGIN_DOCTOR, REGISTER_DOCTOR } from "../../store/mutation-types";
  export default {
    data: () => ({
      dialog: false,
      hasAccount: true,
      registerDoctor: {
        email: "",
        password: "",
        confirmPassword: "",
        first_name: "",
        last_name: "",
      },
      loginDoctor: {
        email: "",
        password: ""
      },
      registerFormError: {
        show: false,
        message: "passwords do not match"
      },
      loginFormError: {
        show: false,
        message: "invalid password"
      }
    }),
    methods: {
      login:function() {
        this.$store.store.dispatch(LOGIN_DOCTOR, this.loginDoctor).then(() => {
          this.dialog = false;
          this.$router.push("/patients");
        });
      },
      register: function() {
        this.$store.store.dispatch(REGISTER_DOCTOR, this.registerDoctor).then(() => {
          this.dialog = false;
          this.$router.push("/patients");
        });
      },
      submit: function(e) {
        e.preventDefault()
        if(!this.hasAccount) {
          if(this.registerDoctor.password === this.registerDoctor.confirmPassword) {
            this.register(this.registerDoctor)
          }
          else {
            this.registerFormError.show = true;
          }
        }else {
            this.login(this.loginDoctor)
        }
      }
    },
    computed: {
      matchPassword: function () {
        return this.password === this.confirmPassword
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
