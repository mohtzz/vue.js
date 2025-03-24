<template>
  <v-app>
    <AppBar
      :drawer="drawer"
      @toggle-drawer="drawer = !drawer"
      v-model:search="search"
      :current-path="currentPath"
    />
    
    <NavigationDrawer
      :drawer="drawer"
      :current-path="currentPath"
      @update-path="updatePath"
      @logout="logout"
    />
    
    <v-main class="table">
      <PatientsTable :patients="filteredPatients" />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar'
import NavigationDrawer from './components/NavigationDrawer'
import PatientsTable from './components/PatientsTable'

export default {
  components: {
    AppBar,
    NavigationDrawer,
    PatientsTable
  },
  data() {
    return {
      drawer: false,
      currentPath: 'Пациенты > Амбулаторное лечение',
      search: '',
      patientItems: [
        { title: 'Амбулаторное лечение' },
        { title: 'Лазарет' },
        { title: 'Госпиталь' },
        { title: 'Новый пациент' },
      ],
      reportItems: [
        { title: 'Годовой' }
      ],
      referenceItems: [
        { title: 'Персонал' },
        { title: 'Подразделения' }
      ],
      userItems: [
        { title: 'Информация' },
        { title: 'Выйти' }
      ],
      patients: [
        {
          id: 1,
          fullName: 'Иванов Иван Иванович',
          birthDate: '25/02/1995',
          rank: 'Майор',
          diagnosis: 'ОРВИ',
          doctor: 'Преображенский Ф.Ф.',
          startDate: '25/02/2025',
          endDate: '01/03/2025'
        },
        {
          id: 2,
          fullName: 'Петров Петр Петрович',
          birthDate: '02/03/2001',
          rank: 'Ст. лейтенант',
          diagnosis: 'Насморк',
          doctor: 'Борменталь И.А.',
          startDate: '05/01/2025',
          endDate: ''
        },
        {
          id: 3,
          fullName: 'Иванов Иван Иванович',
          birthDate: '25/02/1995',
          rank: 'Майор',
          diagnosis: 'ОРВИ',
          doctor: 'Преображенский Ф.Ф.',
          startDate: '25/02/2025',
          endDate: ''
        },
        {
          id: 4,
          fullName: 'Петров Петр Петрович',
          birthDate: '02/03/2001',
          rank: 'Ст. лейтенант',
          diagnosis: 'Насморк',
          doctor: 'Борменталь И.А.',
          startDate: '05/01/2025',
          endDate: '08/03/2025'
        },
        {
          id: 5,
          fullName: 'Иванов Иван Иванович',
          birthDate: '25/02/1995',
          rank: 'Майор',
          diagnosis: 'ОРВИ',
          doctor: 'Преображенский Ф.Ф.',
          startDate: '25/02/2025',
          endDate: ''
        },
        {
          id: 6,
          fullName: 'Петров Петр Петрович',
          birthDate: '02/03/2001',
          rank: 'Ст. лейтенант',
          diagnosis: 'Насморк',
          doctor: 'Борменталь И.А.',
          startDate: '05/01/2025',
          endDate: ''
        },
      ]
    }
  },
  computed: {
    filteredPatients() {
      return this.patients.filter(patient => 
        patient.fullName.toLowerCase().includes(this.search.toLowerCase()) ||
        patient.diagnosis.toLowerCase().includes(this.search.toLowerCase())
      )
    }
  },
  methods: {
    updatePath(newPath) {
      this.currentPath = newPath
      this.drawer = false
    },
    logout() {
      // Логика выхода
      console.log('Выход из системы')
    },
    handleUserItem(item) {
      if (item.title === 'Выйти') {
        this.logout();
      } else {
        this.updatePath('Пользователь > ' + item.title);
      }
    }
  }
}
</script>

<style>
* {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: bold;
}

.table {
  overflow-x: hidden;
}

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');
</style>