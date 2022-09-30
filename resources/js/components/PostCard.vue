<template>
  <div>
    <div class="card mx-5 mt-5">
      <img class="card-img-top" :src="post.post_img" alt="Image" />
      <div class="card-body">
        <h5 class="card-title font-weight-bold">
          <router-link :to="'posts/' +  post.id"> {{ post.title }}</router-link>
        </h5>
        <p class="card-text">{{ post.post_content }}</p>

        <h6 class="card-text">
          <strong>Category: </strong>{{ post.category.name }} <span>{{ post.category.color }} </span>
        </h6>

        <div>
          <h6 class="card-text">
            <strong>Tags: </strong
            ><span class="card-text" v-for="tag in post.tags" :key="tag.id">
              #{{ tag.name }}
            </span>
          </h6>
        </div>
        <p class="card-subtitle mt-2">
          <strong>Post date: </strong> {{ post.post_date }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
  },
};
</script>

<style scoped>
.card {
  width: 25rem;
  height: 50rem;
}
</style>