<template>
  <v-app>
    <!-- Навигационная панель -->
    <v-app-bar app class="app-bar-custom">
      <!-- Бургер-меню -->
      <v-app-bar-nav-icon @click="drawer = !drawer" class="nav-icon" />
      
      <!-- Текущий раздел -->
      <v-toolbar-title class="current-path">{{ currentPath }}</v-toolbar-title>
      
      <!-- Поле поиска -->
      <div class="search-wrapper" style="flex-grow: 1; display: flex; justify-content: flex-end;">
        <v-text-field
          v-model="search"
          hide-details
          placeholder="Найти пациента"
          class="search-field"
          prepend-icon="mdi-magnify mt-4"
          style="max-width: 300px;"
        />
      </div>
    </v-app-bar>

    <!-- Боковое меню -->
    <v-navigation-drawer v-model="drawer" temporary app>
      <v-list dense nav>
        <!-- Раздел Пациенты -->
        <v-list-group value="true">
          <template v-slot:activator="{ props }">
            <v-list-item
                v-bind="props"
                title="Пациенты"
                :class="['patients', 'menu-chapter']"
              />
          </template>
          <v-list-item
            class="menu-item"
            v-for="(item, i) in patientItems"
            :key="i"
            :value="item"
            @click="updatePath('Пациенты > ' + item.title)"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-group>

        <!-- Раздел Отчеты -->
        <v-list-group>
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Отчеты" class="menu-chapter" />
          </template>
          <v-list-item
            class="menu-item"
            v-for="(item, i) in reportItems"
            :key="i"
            :value="item"
            @click="updatePath('Отчеты > ' + item.title)"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-group>

        <!-- Раздел Справочники -->
        <v-list-group>
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Справочники" class="menu-chapter" />
          </template>
          <v-list-item
            class="menu-item"
            v-for="(item, i) in referenceItems"
            :key="i"
            :value="item"
            @click="updatePath('Справочники > ' + item.title)"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-group>

        <!-- Раздел Пользователь -->
        <v-list-group>
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Пользователь" class="menu-chapter" />
          </template>
          <v-list-item
            class="menu-item"
            v-for="(item, i) in userItems"
            :key="i"
            :value="item"
            @click="handleUserItem(item)"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <!-- Основное содержимое -->
    <v-main class="table">
      <v-container fluid>
        <!-- Заголовки колонок -->
        <v-row class="grid-header">
          <v-col cols="12" md="3">ФИО<br>Дата рождения, Звание</v-col>
          <v-col cols="6" md="2">Диагноз</v-col>
          <v-col cols="6" md="2">Врач</v-col>
          <v-col cols="6" md="2">Дата заболевания</v-col>
          <v-col cols="6" md="2">Дата выписки</v-col>
        </v-row>

        <!-- Строки с данными -->
        <v-row
          v-for="(patient, index) in filteredPatients"
          :key="patient.id"
          class="grid-row"
          :class="{ 'even-row': index % 2 === 0 }"
        >
          <v-col cols="12" md="3">
            <div>
              <div>{{ patient.fullName }}</div>
              <div>{{ patient.birthDate }}, {{ patient.rank }}</div>
            </div>
          </v-col>
          <v-col cols="6" md="2">
            {{ patient.diagnosis }}
          </v-col>
          <v-col cols="6" md="2">
            {{ patient.doctor }}
          </v-col>
          <v-col cols="6" md="2">
            {{ patient.startDate }}
          </v-col>
          <v-col cols="6" md="2">
            {{ patient.endDate }}
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
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
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

* {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: bold;
}

.nav-icon {
  transition: color 0.3s ease !important;
}

.nav-icon:hover {
  color: rgba(255, 0, 0, 0.4);
}

.nav-icon:active {
  color: rgba(255, 0, 0, 0.4);
}

.menu-chapter, .menu-item {
  transition: color 0.3s ease !important;
}

.menu-chapter:hover,
.menu-item:hover {
  color: rgba(255, 0, 0, 0.4);
}

.menu-chapter:active,
.menu-item:active {
  color: rgba(255, 0, 0, 0.4);
}

.table {
  overflow-x: hidden;
}

.grid-header {
  background-color: lightgray;
  border: 1px solid rgb(160, 159, 159);
}

.grid-row {
  border: 1px solid rgb(160, 159, 159);
  transition: background-color 0.3s;
}

.grid-row:hover {
  background-color: rgb(151, 150, 150);
}

.even-row {
  background-color: #eeecec;
}
</style>