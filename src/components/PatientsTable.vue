<template>
    <v-container fluid>
      <!-- Колонки -->
      <v-row class="grid-header">
        <v-col cols="12" md="3">ФИО<br>Дата рождения, Звание</v-col>
        <v-col cols="6" md="2">Диагноз</v-col>
        <v-col cols="6" md="2">Врач</v-col>
        <v-col cols="6" md="2">Дата заболевания</v-col>
        <v-col cols="6" md="2">Дата выписки</v-col>
      </v-row>
  
      <!-- Строки с пациентами -->
      <patient-row
        v-for="(patient, index) in patients"
        :key="patient.id"
        :patient="patient"
        :index="index"
      />
    </v-container>
</template>
  
<script>
  import PatientRow from './PatientRow.vue'
  
  export default {
    components: { PatientRow },
    props: {
      patients: {
        type: Array,
        required: true
      }
    }
  }
</script>
  
<style scoped>
.grid-header {
  background-color: lightgray;
  border: 1px solid rgb(160, 159, 159);
}

.table {
  overflow-x: hidden;
}
</style>