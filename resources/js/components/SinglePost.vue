<template>
  <main>
    <div class="container">
      <div class="row justify-content-center">
        <PostCard :key="post.id" :post="post" />
      </div>
    </div>
  </main>
</template>

<script>
import PostCard from "../components/PostCard.vue";
import axios from "axios";

export default {
  components: {
    PostCard,
  },

  data: function () {
    return {
      post: {},
    };
  },

  methods: {
    getPost() {
      const id = this.$route.params.id;
      axios
        .get(`api/posts/${id}`)

        .then((response) => {
          console.log(response.data.results);
          this.post = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>