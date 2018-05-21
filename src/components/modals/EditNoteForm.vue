<template>
  <v-container>
    <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent max-width="500px">
        <v-btn color="primary" dark slot="activator">Add Note</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">New Note</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="date" placeholder="Year-Month-Day" v-model="noteInfo.date"></v-text-field>
                </v-flex>
                <v-flex xs12 sm12 md12>
                  <v-text-field box multi-line label="Notes" v-model="noteInfo.detail"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Doctor ID" v-model="noteInfo.doctor_id"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Patient ID" v-model="noteInfo.patient_id"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" @click.native="addNote(noteInfo)">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios';
import { ADD_NOTE, UPDATE_NOTE } from '../../store/mutation-types';
  export default {
    data: () => ({
      dialog: false,
      noteInfo: {
        date: "",
        detail: "",
        doctor_id: "",
        patient_id: "",
        testInfo: []
      },
    }),
    methods: {
      addNote: function(noteInfo) {
        this.$store.store.dispatch(ADD_NOTE, this.noteInfo).then(() => {
          this.dialog = false;
          this.$router.push("/notes");
        })
      },
      updateNote: function() {
        this.$store.store.dispatch(UPDATE_NOTE, this.noteInfo).then(() => {
          this.dialog = false;
        })
      }
    }
  }
</script>
