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
        // Добавьте больше тестовых данных по необходимости
      ]
    }
  },
  created() {
    this.handleKeycloakRedirect();
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
    async handleKeycloakRedirect() {
      // Проверяем наличие параметров авторизации в URL
      if (window.location.hash.includes('code=')) {
        try {
          // Парсим параметры из URL
          const hashParams = new URLSearchParams(
            window.location.hash.substring(1)
          );
          
          // Извлекаем нужные параметры
          const code = hashParams.get('code');
          const state = hashParams.get('state');
          const error = hashParams.get('error');

          // Проверка на ошибки авторизации
          if (error) {
            throw new Error(`Authorization failed: ${error}`);
          }

          // Валидация state (пример)
          const savedState = localStorage.getItem('oauth_state');
          if (state !== savedState) {
            throw new Error('Invalid state parameter');
          }

          // Обмен authorization code на токены (пример через axios)
          const response = await this.$axios.post('/auth/token', {
            code,
            state,
            redirect_uri: window.location.origin
          });

          // Сохраняем токены (пример для Vuex)
          this.$store.commit('auth/setTokens', {
            accessToken: response.data.access_token,
            refreshToken: response.data.refresh_token
          });

          // Очищаем URL БЕЗ перезагрузки страницы
          window.history.replaceState(
            {},
            document.title,
            window.location.pathname
          );

          // Перенаправляем на главную страницу
          this.$router.replace('/');
        } catch (error) {
          console.error('Auth error:', error);
          this.$router.replace('/login?error=auth_failed');
        }
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
}

.app-bar-custom {
  border-bottom: 10px solid rgba(0,0,0,0.1);
  box-shadow: none !important;
}

.nav-icon {
  color: #444;
  transform: scale(1.2);
  margin-left: 12px;
}

.nav-icon:hover {
  background-color: #f5f5f5;
}

.current-path {
  color: #444;
  font-weight: 600;
  font-size: 1.4rem;
  letter-spacing: 0.5px;
}

.search-wrapper {
  background: rgba(255,255,255,0.95);
  border-radius: 28px;
  padding: 6px 16px;
  width: 320px;
}

.search-field .v-input__control {
  min-height: 48px;
}

.search-field .v-field__prepend-inner {
  padding-right: 12px;
}

.search-field .v-icon {
  color: #666;
  font-size: 1.5rem;
}

.patient-table {
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  font-size: 0.95rem;
}

.patient-table .v-data-table__tr:nth-child(even) {
  background-color: #fafafa;
}

.patient-table .v-data-table__tr:nth-child(odd) {
  background-color: #ffffff;
}

.patient-table .v-data-table__tr:hover {
  background-color: #f5f5f5;
}

/* Кликабельные элементы */
.v-list-item--active .v-list-item__content,
.v-list-item:hover .v-list-item__content {
  color: #666;
}

.v-list-item__title {
  color: #444;
  font-weight: 500;
  font-size: 1rem;
}

.v-list-item--active {
  background-color: #fff0f0;
}

/* Иконки меню */
.v-list-group__items .v-list-item {
  padding-left: 40px;
}

.patients:hover {
  background-color: #f5f5f5;
}
</style>