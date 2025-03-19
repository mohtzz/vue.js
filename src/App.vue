<template>
  <v-app>
    <!-- Навигационная панель -->
    <v-app-bar app class="app-bar-custom">
      <!-- Бургер-меню -->
      <v-app-bar-nav-icon @click="drawer = !drawer" class="nav-icon" />
      
      <!-- Текущий раздел -->
      <v-toolbar-title class="current-path ml-4">{{ currentPath }}</v-toolbar-title>
      
      <!-- Поле поиска -->
      <v-spacer />
      <div class="search-wrapper">
        <v-text-field
          v-model="search"
          flat
          hide-details
          placeholder="Найти пациента"
          class="search-field"
          prepend-icon="mdi-magnify mt-4"
        />
      </div>
    </v-app-bar>

    <!-- Боковое меню -->
    <v-navigation-drawer v-model="drawer" temporary app width="280">
      <v-list dense nav>
        <!-- Раздел Пациенты -->
        <v-list-group value="true">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Пациенты" class="patients" />
          </template>
          <v-list-item
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
            <v-list-item v-bind="props" title="Отчеты" />
          </template>
          <v-list-item
            title="Годовой"
            @click="updatePath('Отчеты > Годовой')"
          />
        </v-list-group>

        <!-- Раздел Справочники -->
        <v-list-group>
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Справочники" />
          </template>
          <v-list-item
            title="Персонал"
            @click="updatePath('Справочники > Персонал')"
          />
          <v-list-item
            title="Подразделения"
            @click="updatePath('Справочники > Подразделения')"
          />
        </v-list-group>

        <!-- Раздел Пользователь -->
        <v-list-group>
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Пользователь" />
          </template>
          <v-list-item
            title="Информация"
            @click="updatePath('Пользователь > Информация')"
          />
          <v-list-item title="Выйти" @click="logout" />
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <!-- Основное содержимое -->
    <v-main>
      <v-data-table
        :headers="headers"
        :items="patients"
        :search="search"
        item-key="id"
        class="patient-table"
      >
        <!-- Шаблон для столбца с ФИО -->
        <template v-slot:item.name="{ item }">
          <div>
            <strong>{{ item.name }}</strong><br>
            {{ item.birthDate }}<br>
            {{ item.rank }}
          </div>
        </template>
      </v-data-table>
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
      headers: [
        { 
          title: 'ФИО, Дата рождения, Звание',
          key: 'name',
          width: '25%'
        },
        { title: 'Диагноз', key: 'diagnosis' },
        { title: 'Лечащий врач', key: 'doctor' },
        { title: 'Дата заболевания', key: 'startDate' },
        { title: 'Дата выписки', key: 'endDate' },
      ],
      patients: [
        {
          id: 1,
          name: 'Иванов И.И.',
          birthDate: '15.05.1980',
          rank: 'капитан',
          diagnosis: 'ОРВИ',
          doctor: 'Петрова А.С.',
          startDate: '10.01.2023',
          endDate: '15.01.2023'
        },
        {
          id: 2,
          name: 'Иванов И.И.',
          birthDate: '15.05.1980',
          rank: 'капитан',
          diagnosis: 'тахикардия',
          doctor: 'Петрова А.С.',
          startDate: '10.01.2023',
          endDate: '15.01.2023'
        },
        {
          id: 3,
          name: 'Иванов И.И.',
          birthDate: '15.05.1980',
          rank: 'капитан',
          diagnosis: 'дурак',
          doctor: 'Петрова А.С.',
          startDate: '10.01.2023',
          endDate: '15.01.2023'
        },
        {
          id: 4,
          name: 'Иванов И.И.',
          birthDate: '15.05.1980',
          rank: 'капитан',
          diagnosis: 'ОРВИ',
          doctor: 'Петрова А.С.',
          startDate: '10.01.2023',
          endDate: '15.01.2023'
        },
        {
          id: 5,
          name: 'Иванов И.И.',
          birthDate: '15.05.1980',
          rank: 'капитан',
          diagnosis: 'ОРВИ',
          doctor: 'Петрова А.С.',
          startDate: '10.01.2023',
          endDate: '15.01.2023'
        },
        {
          id: 6,
          name: 'Иванов И.И.',
          birthDate: '15.05.1980',
          rank: 'капитан',
          diagnosis: 'ОРВИ',
          doctor: 'Петрова А.С.',
          startDate: '10.01.2023',
          endDate: '15.01.2023'
        },
        {
          id: 7,
          name: 'Иванов И.И.',
          birthDate: '15.05.1980',
          rank: 'капитан',
          diagnosis: 'ОРВИ',
          doctor: 'Петрова А.С.',
          startDate: '10.01.2023',
          endDate: '15.01.2023'
        },
        {
          id: 8,
          name: 'Иванов И.И.',
          birthDate: '15.05.1980',
          rank: 'капитан',
          diagnosis: 'ОРВИ',
          doctor: 'Петрова А.С.',
          startDate: '10.01.2023',
          endDate: '15.01.2023'
        },
      ]
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
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

* {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
}

.search-wrapper {
  width: 320px;
}

.patient-table {
  border: 2px solid #e0e0e0;
  overflow: hidden;
}

.patient-table .v-data-table__tr:nth-child(even) {
  background-color: #fafafa;
}

.patient-table .v-data-table__tr:nth-child(odd) {
  background-color: #F3F6F4;
}

.patient-table .v-data-table__tr:hover {
  background-color: #EEEEEE;
}

.v-btn--variant-text .v-btn__overlay {
    background: red !important;
}

/* .v-btn,
.v-list-item,
.v-icon {
  color: blue !important;
} */
</style>