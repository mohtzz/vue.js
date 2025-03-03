<template>
  <div class="dialog" v-if="show" @click="closeDialog">
    <div class="dialog-content" @click.stop>
      <div>
        <slot></slot>
      </div>
      <div class="dialog-btns">
        <my-button style="border:none; margin-right: 15px" @click="closeDialog">Cancel</my-button>
        <my-button style="margin-right: 15px" @click="applyChanges">Apply</my-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-dialog",
  props: {
    show: {type: Boolean, default: false},
  },
  methods: {
    closeDialog() {
      this.$emit('cancel');
    },
    applyChanges() {
      this.$emit('apply');
    }
  }
}
</script>

<style scoped>
.dialog {
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}
.dialog-content {
  margin: auto;
  background: #fff;
  border-radius: 5px;
  min-height: 50px;
  min-width: 350px;
  padding: 20px;
}
.dialog-btns {
  display:flex;
  flex-direction: row;
  justify-content: right;
  margin-top: 15px;
}
</style>