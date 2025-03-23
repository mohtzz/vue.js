<template>
    <v-row class="grid-row" :class="{ 'even-row': index % 2 === 0 }">
      <v-col cols="12" md="3">
        <div class="patient-info">
          <div class="full-name">{{ patient.fullName }}</div>
          <div class="details">{{ patient.birthDate }}, {{ patient.rank }}</div>
        </div>
      </v-col>
      <v-col cols="6" md="2">{{ patient.diagnosis }}</v-col>
      <v-col cols="6" md="2">{{ patient.doctor }}</v-col>
      <v-col cols="6" md="2">{{ patient.startDate }}</v-col>
      <v-col cols="6" md="2">{{ patient.endDate || '—' }}</v-col>
    </v-row>
</template>
  
<script>
  export default {
    props: {
      patient: {
        type: Object,
        required: true
      },
      index: {
        type: Number,
        required: true
      }
    }
  }
</script>
  
<style scoped>
.grid-row {
  border: 1px solid rgb(160, 159, 159);
  transition: background-color 0.3s;
}

.grid-row:hover {
  background-color: rgb(151, 150, 150) !important;
}

.even-row {
  background-color: #eeecec;
}
</style>