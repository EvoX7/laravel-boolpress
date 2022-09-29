<template>
  <div>
    
    <HeaderHome />
    <h1>Hello</h1>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>


  import PostCard from "../components/PostCard.vue";
  import HeaderHome from "../components/HeaderHome.vue"

export default {
  components: {
    HeaderHome,
    PostCard,
  }
}

</script>

<style lang="scss">


</style>
