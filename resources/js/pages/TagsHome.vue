<template>
  <div>
    <h1 class="text-center mt-5 mb-5">Tags List</h1>
    <div class="container d-flex justify-content-center">
      <div class="row flex-column w-50 text-center">
        <TagsCard v-for="tag in tags" 
        :key="tag.id" 
        :tagsCardEl="tag" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TagsCard from "../components/TagsCard.vue";

export default {
  name: "TagsHome",
  components: {
    TagsCard,
  },

  data: function () {
    return {
      tags: [],
    };
  },

  methods: {
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
    this.getTags();
  },
};
</script>

<style>
</style>