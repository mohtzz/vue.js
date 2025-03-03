<template>
  <my-select v-model="selectedSort" :options="sortOptions" @change="changeSort">

  </my-select>
</template>

<script>
export default {
  props: {
    modelValue: {type:String}
  },
  data() {
    return {
      sortOptions: [
        {value: 'title', name: 'Title'},
        {value: 'body', name: 'Descriptions'},
      ],
      selectedSort: '',
    };
  },
  methods: {
    changeSort() {
      this.$emit('update:modelValue', this.selectedSort);
    }
  }
}
</script>

<style scoped>

</style>