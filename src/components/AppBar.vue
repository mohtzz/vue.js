<template>
    <v-app-bar app class="app-bar-custom">
      <v-app-bar-nav-icon 
        @click="$emit('toggle-drawer')" 
        class="nav-icon"
      />
      
      <v-toolbar-title class="current-path">{{ currentPath }}</v-toolbar-title>
      
      <div class="search-wrapper">
        <v-text-field
          :model-value="search"
          @update:modelValue="$emit('update:search', $event)"
          hide-details
          placeholder="Найти пациента"
          class="search-field"
          prepend-icon="mdi-magnify mt-4"
        />
      </div>
    </v-app-bar>
</template>
  
<script>
  export default {
    props: {
      currentPath: String,
      search: String,
      drawer: Boolean
    },
    emits: ['toggle-drawer', 'update:search']
  }
</script>

<style scoped>
.app-bar-custom {
  background-color: white !important;
}

.nav-icon {
  transition: color 0.3s ease;
}

.nav-icon:hover {
  color: rgba(255, 0, 0, 0.4) !important;
}

.current-path {
  font-weight: 700;
  margin-left: 16px;
}

.search-wrapper {
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
}

.search-field {
  max-width: 300px;
}
</style><style scoped>
.app-bar-custom {
  background-color: white !important;
}

.nav-icon {
  transition: color 0.3s ease;
}

.nav-icon:hover {
  color: rgba(255, 0, 0, 0.4) !important;
}

.current-path {
  font-weight: 700;
  margin-left: 16px;
}

.search-wrapper {
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
}

.search-field {
  max-width: 300px;
}
</style>