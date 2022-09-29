<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary container">
      <h2><router-link class="font-weight-bold text-white text-decoration-none mx-4" to="/home"
              >BoolPress</router-link
            ></h2>
      <!-- <img
        src="/docs/4.6/assets/brand/bootstrap-solid.svg"
        width="30"
        height="30"
        class="d-inline-block align-top"
        alt="logo"
      /> -->

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link font-weight-bold text-white" to="/home"
              >Home</router-link
            >
            <li class="nav-item">
            <router-link class="nav-link font-weight-bold text-white" to="/categories"
              >Categories</router-link
            >
            <li class="nav-item">
            <router-link class="nav-link font-weight-bold text-white" to="/tags"
              >Tags</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link font-weight-bold text-white" to="/contacts"
              >Contacts</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link font-weight-bold text-white" to="/about"
              >About</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

header {
  background-color: #3490dc;
}

.nav-link:hover {
  // to force color over bootstrap rules
color: black !important;  
}

</style>