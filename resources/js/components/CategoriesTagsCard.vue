<template>
  <div>
   <div class="col-12">
      <div class="card mt-3">
        <div class="card-header">
          <h2>{{ cardEl.name }}</h2>
        </div>
        <div class="card-body">
          <router-link class="btn btn-dark" to="">  Click to see correlated posts.</router-link>
        </div>
      </div>
 </div>
  </div>
</template>

<script>
export default {
  name: "CategoriesTagsCard",
  props: {
    cardEl: Object,
  },
};
</script>

<style>
</style>