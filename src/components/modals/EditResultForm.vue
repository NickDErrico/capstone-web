<template>
  <v-container>
    <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent max-width="500px">
        <v-btn color="primary" dark slot="activator">Add Test Results</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">Test Info</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Date" placeholder="Year/Month/Day" v-model="testResultInfo.date" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Doctor ID" v-model="testResultInfo.doctor_id" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Patient ID" v-model="testResultInfo.patient_id" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Test ID" v-model="testResultInfo.ranges_id" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Test Result" v-model="testResultInfo.results" required></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1"  @click.native="addTestResult(testResultInfo)">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios';
import { ADD_TEST_RESULT, UPDATE_TEST_RESULT } from '../../store/mutation-types';
  export default {
    data: () => ({
      dialog: false,
      testResultInfo: {
        date: "",
        doctor_id: "",
        patient_id: "",
        ranges_id: "",
        results: ""
      }
    }),
    methods: {
      addTestResult: function(testResultInfo) {
        console.log('definitely running here')
        this.$store.store.dispatch(ADD_TEST_RESULT, testResultInfo).then(() => {
          this.dialog = false;
        })
      },
      updateTestResult: function(testResultInfo) {
        this.$store.store.dispatch(UPDATE_TEST_RESULT, testResultInfo).then(() => {
          this.dialog = false;
        })
      }
    }
  }
</script>
