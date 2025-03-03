<template>
  <div v-if="posts.length > 0">
    <h4>Posts list</h4>
    <post-item v-for="post in posts" :post="post" :key="post.id" @remove="$emit('remove', post)"/>
  </div>
  <div v-else style="color: red">
    <h4>Posts list is empty</h4>
  </div>

</template>

<script>
import postItem from "@/components/postItem";

export default {
  components: {postItem},
  props: {
    posts: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>
</style>