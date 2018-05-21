import Home from './components/home/Home.vue';
import Patients from './components/patients/Patients.vue';
import Notes from './components/notes/notes.vue';
import Appointments from './components/appointments/Appointments.vue';
import LabsTable from './components/labs/LabsTable.vue';
import Charts from './components/charts/Charts.vue';

export const routes = [
  {path: '/', component: Home},
  {path: '/patients', component: Patients},
  {path: '/patients/:id', component: Patients},
  {path: '/notes', component: Notes},
  {path: '/appointments', component: Appointments},
  {path: '/appointments', component: Appointments},
  {path: '/labstable', component: LabsTable},
  {path: '/labstable/:id', component: LabsTable},
  {path: '/charts/:id', component: Charts},
]
