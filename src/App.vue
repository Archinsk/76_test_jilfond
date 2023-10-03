<template>
  <div id="app">
    <div class="d-flex">
      <router-link to="/">Default</router-link> |
      <router-link to="/employee">Employment</router-link>
    </div>
    <the-header></the-header>
    <main class="main container">
      <the-sidebar></the-sidebar>
      <router-view />
    </main>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader";
import TheSidebar from "./components/TheSidebar";
export default {
  components: { TheSidebar, TheHeader },
};
</script>

<style lang="scss" scoped>
.main {
  background-color: #fdfdfd;
  border-radius: 0.625rem;
  box-shadow: 0px 0px 10px 0px #0000001a;

  display: flex;
}
</style>
