<template>
  <div>
    <h1>Posts page</h1>
    <div class="app_btns">
      <my-button @click="showDialog">Add post</my-button>
      <post-sort v-model="sortOrder"/>
    </div>
    <post-form @create="createPost" v-model:show="dialogVisible" />
    <post-list v-if="!dataLoading" :posts="posts" @remove="removePost"/>
    <div v-else><h1>Data loading...</h1></div>
  </div>
</template>
<script>
import postForm from "@/components/postForm";
import postList from "@/components/postList";
import postSort from "@/components/postSort";
//import axios from "axios";
import axios from "@/services/api";

export default {
  components: { postForm, postList, postSort },
  data () {
    return {
      posts:[],
      sortOrder: '',
      dialogVisible: false,
      dataLoading: false
    }
  },
  methods: {
    createPost (post) {
      this.posts.push(post);
    },
    removePost (post) {
      this.posts = this.posts.filter(p => p.id !== post.id);
    },
    changeSort () {
      console.log('New sorting -> ' + this.sortOrder);
    },
    showDialog () {
      this.dialogVisible = true;
    },
    async fetchPosts () {
      try {
        this.dataLoading = true;
          const response = await axios.get('');
          this.posts = response.data;
          this.dataLoading = false;
      } catch (e) {
        console.error(e);
        alert(`An error occurred: ${e}`);
      } finally {
        //this.dataLoading = false;
      }
    }
  },
  mounted (){
    this.fetchPosts();
  },
  watch: {
    sortOrder (newValue, oldValue) {
      console.log('On sorting -> ' + this.sortOrder + ': ' + oldValue + ' -> ' + newValue);
    }
  }
}
</script>
<style>
.app_btns {
  display: flex;
  justify-content: space-between;
}
</style>
