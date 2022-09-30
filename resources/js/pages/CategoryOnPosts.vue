<template>
  <div>
    <h1>dfdgdg</h1>
    <h1 class="text-center mt-5 mb-5"></h1>
    <div class="container">
      <div class="row justify-content-center">
        <PostCard v-for="post in category.posts" :key="post.id" :post="post" />
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
      category: [],

    };
  },

  methods: {
    getCategory() {
      const id = this.$route.params.id;
      axios
        .get(`/api/categories/${id}`)

        .then((response) => {
          console.log(response.data.results.category);
          this.pcategory = response.data.results.category;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getCategory();

  }
};
</script>

<style>
</style>