<template>
  <div>
    <h1 class="text-center mt-5 mb-5">Categories List</h1>
    <div class="container d-flex justify-content-center">
      <div class="row flex-column w-50 text-center">
        <CategoriesTagsCard 
          v-for="category in categories"
          :key="category.id"
          :cardEl="category"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CategoriesTagsCard from "../components/CategoriesTagsCard.vue";

export default {
  name: "CategoriesHome",
  components: {
    CategoriesTagsCard,
  },

  data: function () {
    return {
      categories: [],
    };
  },

  methods: {
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
  },
  created() {
    this.getCategories();
  },
};
</script>

<style>
</style>