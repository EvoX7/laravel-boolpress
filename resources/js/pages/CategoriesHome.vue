<template>
  <div>
    <CategoriesIndex
      v-for="category in categories"
      :key="category.id"
      :category="category"
    />
  </div>
</template>

<script>
import CategoriesIndex from "../components/CategoriesIndex.vue";
import axios from 'axios';


export default {
  components: {
    CategoriesIndex,
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
    created() {
      this.getCategories();
    },
  },
};
</script>

<style>
</style>