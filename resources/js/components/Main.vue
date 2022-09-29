<template>
  <main>
    <h1 class="text-center mt-5 mb-5">Today's Posts</h1>
    <div class="container">
      <div class="row justify-content-center">
        <PostCard v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </div>
  </main>
</template>

<script>
import PostCard from "./PostCard.vue";

export default {
  components: {
    PostCard,
  },

  data: function () {
    return {
      posts: [],
      categories: [],
      tags: [],
    };
  },

  methods: {
    getAllPosts() {
      axios
        .get("/api/posts")

        .then((response) => {
          console.log(response.data.results);
          this.posts = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getCategories() {
      axios
        .get("/api/categories")

        .then((response) => {
          console.log(response.data.results);
          this.categories = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getTags() {
      axios
        .get("/api/tags")

        .then((response) => {
          console.log(response.data.results);
          this.tags = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getAllPosts();
    this.getCategories();
    this.getTags();
  },
};
</script>

<style>
</style>