<template>
    <v-navigation-drawer v-model="model" temporary app>
      <v-list dense nav>
        <!-- Раздел Пациенты -->
        <v-list-group value="true">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              title="Пациенты"
              class="menu-chapter"
            />
          </template>
          <v-list-item
            v-for="(item, i) in patientItems"
            :key="'patient-' + i"
            :value="item"
            :active-class="'custom-selected'"
            class="menu-item"
            @click="$emit('update-path', 'Пациенты > ' + item.title)"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-group>
  
        <!-- Раздел Отчеты -->
        <v-list-group>
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              title="Отчеты"
              class="menu-chapter"
            />
          </template>
          <v-list-item
            v-for="(item, i) in reportItems"
            :key="'report-' + i"
            :value="item"
            :active-class="'custom-selected'"
            class="menu-item"
            @click="$emit('update-path', 'Отчеты > ' + item.title)"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-group>
  
        <!-- Раздел Справочники -->
        <v-list-group>
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              title="Справочники"
              class="menu-chapter"
            />
          </template>
          <v-list-item
            v-for="(item, i) in referenceItems"
            :key="'reference-' + i"
            :value="item"
            :active-class="'custom-selected'"
            class="menu-item"
            @click="$emit('update-path', 'Справочники > ' + item.title)"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-group>
  
        <!-- Раздел Пользователь -->
        <v-list-group>
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              title="Пользователь"
              class="menu-chapter"
            />
          </template>
          <v-list-item
            v-for="(item, i) in userItems"
            :key="'user-' + i"
            :value="item"
            :active-class="'custom-selected'"
            class="menu-item"
            @click="handleItemClick(item)"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
</template>
  
<script>
  export default {
    props: {
      drawer: Boolean
    },
    emits: ['update-path', 'logout', 'update:drawer'],
    data() {
      return {
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
        ]
      }
    },
    computed: {
      model: {
        get() { return this.drawer },
        set(value) { this.$emit('update:drawer', value) }
      }
    },
    methods: {
      handleItemClick(item) {
        if (item.title === 'Выйти') {
          this.$emit('logout')
        } else {
          this.$emit('update-path', 'Пользователь > ' + item.title)
        }
      }
    }
  }
</script>
  
<style scoped>
.menu-chapter,
.menu-item {
  transition: color 0.3s ease !important;
}

.menu-chapter:hover,
.menu-item:hover {
  color: rgba(255, 0, 0, 0.4) !important;
}

.menu-chapter:active,
.menu-item:active {
  color: rgba(255, 0, 0, 0.4) !important;
}

.custom-selected {
  color: rgba(255, 0, 0, 0.6) !important;
}
</style>