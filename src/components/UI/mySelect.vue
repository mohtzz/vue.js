<template>
  <select :value="modelValue" @change="selectOption">
    <option disabled value="" >Please select from the list</option>
    <option v-for="item in options" :key="item.value" :value="item.value">{{ item.name }}</option>
  </select>
</template>

<script>
export default {
  name: 'my-select',
  props: {
    modelValue: {type: String},
    options: {type: Array, default: () => []}
  },
  methods: {
    selectOption (event){
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style scoped>

</style>