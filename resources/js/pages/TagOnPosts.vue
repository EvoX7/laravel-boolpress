<template>
  <div>
    <h1>All posts from a tag</h1>
    <h1 class="text-center mt-5 mb-5"></h1>
    <div class="container">
      <div class="row justify-content-center">
        <PostCard v-for="post in tag.posts" :key="post.id" :post="post" />
      </div>
    </div>
  </div>
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
      tag: {
        post: "",
      },
    };
  },

  methods: {
    getTag() {
      const id = this.$route.params.id;
      axios
        .get(`/api/tags/${id}`)

        .then((response) => {
          console.log(response.data.results.tag);
          this.tag = response.data.results.tag;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getTag();
  },
};
</script>

<style>
</style>