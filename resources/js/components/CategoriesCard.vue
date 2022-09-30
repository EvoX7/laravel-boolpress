<template>
  <div>
   <div class="col-12">
      <div class="card mt-3">
        <div class="card-header" :style="'background-color:' + cardEl.color">
          <h2 class="text-white">{{ cardEl.name }}</h2>
        </div>
        <div class="card-body">
          <router-link class="btn btn-dark" :to="'categories/' +  cardEl.id">Click to see related posts.</router-link>
        </div>
      </div>
 </div>
  </div>
</template>

<script>
export default {
  name: "CategoriesCard",
  props: {
    cardEl: Object,
  },
};
</script>

<style>
</style>