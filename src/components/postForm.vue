<template>
  <my-dialog :show="show" @apply="createPost" @cancel="hideForm">
    <form @submit.prevent>
      <h4>Create a new Post</h4>
      <my-input
             placeholder="Название:"
             v-model="post.title" />
      <my-input
             placeholder="Описание:"
             v-model="post.body" />
    </form>
  </my-dialog>
</template>

<script>
export default {
  props: {
    show: {type: Boolean, default: false},
  },
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.hideForm();
    },
    hideForm() {
      this.post = {
        title: "",
        body: ""
      };
      this.$emit('update:show', false);
    }
  }
}
</script>

<style scoped>
form{
  display: flex;
  flex-direction: column;
}
</style>