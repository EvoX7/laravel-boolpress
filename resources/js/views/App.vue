<template>
  <div>
    <HeaderHome />

    <router-view></router-view>
  </div>
</template>

<script>
import HeaderHome from "../components/HeaderHome.vue";

export default {
  components: {
    HeaderHome,
   
  },
};
</script>

<style lang="scss">
</style>
