<template>
  <v-layout row justify-center>
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
              </v-flex>
              <v-flex xs12 v-if="hasAccount">
                <v-text-field label="Email" v-model="loginDoctor.email" required></v-text-field>
              </v-flex>
              <v-flex xs12 v-if="hasAccount">
                <v-text-field label="Password" type="password" v-model="loginDoctor.password" required></v-text-field>
              </v-flex>
            </v-form>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog = !dialog">Cancel</v-btn>
          <v-btn color="blue darken-1" flat @click.native="() => !hasAccount ? register(registerDoctor) : login(loginDoctor)">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
      <a v-if="!hasAccount" @click="hasAccount = true">Already a member? click to login</a>
      <a v-if="hasAccount" @click="hasAccount = false">Not a member? click to register</a>
  </v-layout>
</template>

<script>
  import axios from "axios";
  import api from '../store/api';
  export default {
    data: () => ({
      dialog: false,
      hasAccount: true,
      registerDoctor: {
        email: "",
        password: "",
        first_name: "",
        last_name: "",
      },
      loginDoctor: {
        email: "",
        password: ""
      }
    }),
    mixins: [api]
  }
</script>

<style lang="scss" scoped>
  a {
    display: block;
  }
</style>
