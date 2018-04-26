<template>
  <v-container>
    <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent max-width="500px">
        <v-btn color="primary" dark slot="activator">Add Patient</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">Patient Info</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="First Name" v-model="patientInfo.first_name" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Last Name" v-model="patientInfo.last_name" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Email" v-model="patientInfo.email" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Password" type="password" v-model="patientInfo.password" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Confirm Password" type="password" v-model="patientInfo.confirmPassword" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Doctor ID" required v-model="patientInfo.doctor_id"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-text-field label="Age" required v-model="patientInfo.age"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-text-field label="Height In Inches" required v-model="patientInfo.height"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-text-field label="Weight" required v-model="patientInfo.weight"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-select
                    label="Eye Color"
                    :items="['Blue', 'Brown', 'Green']"
                    v-model="patientInfo.eye_color"
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-select
                    label="Hair Color"
                    :items="['Black', 'Brown', 'Blonde', 'Red', 'Gray', 'Bald']"
                    v-model="patientInfo.hair_color"
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-select
                    label="Sex"
                    :items="['male', 'female']"
                    v-model="patientInfo.sex"
                  ></v-select>
                </v-flex>
              </v-layout>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1"  @click.native="addPatient(patientInfo)">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios';
import { ADD_PATIENT, UPDATE_PATIENT } from '../../store/mutation-types';
  export default {
    data: () => ({
      dialog: false,
      patientInfo: {
        age: "",
        doctor_id: "",
        email: "",
        eye_color: "",
        first_name: "",
        hair_color: "",
        height: "",
        last_name: "",
        password: "",
        sex: "",
        weight: "",
        confirmPassword: "",
      }
    }),
    methods: {
      addPatient: function(patientInfo) {
        this.$store.store.dispatch(ADD_PATIENT, this.patientInfo).then(() => {
          this.dialog = false;
          this.$router.push("/patients");
        })
      },
      updatePatient: function(patientInfo) {
        this.$store.store.dispatch(UPDATE_PATIENT, this.patientInfo).then(() => {
          this.dialog = false;
        })
      }
    }
  }
</script>
