<template>
  <div>
    <h1 class="text-center mt-5 mb-5">Categories List</h1>
    <div class="container d-flex justify-content-center">
      <div class="row flex-column w-50 text-center">
        <CategoriesCard 
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
import CategoriesCard from "../components/CategoriesCard.vue";

export default {
  name: "CategoriesHome",
  components: {
    CategoriesCard,
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