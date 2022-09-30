<template>
  <div>
   <div class="col-12">
      <div class="card mt-3">
        <div class="card-header">
          <h2 class="text-dark">{{ tagsCardEl.name }}</h2>
        </div>
        <div class="card-body">
          <router-link class="btn btn-dark" to="">Click to see related posts.</router-link>
        </div>
      </div>
 </div>
  </div>
</template>

<script>
export default {
 name: "TagsCard",
  props: {
    tagsCardEl: Object,
  },
};
</script>

<style>
</style>