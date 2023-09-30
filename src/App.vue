<template>
  <div id="app">
    <the-header></the-header>
    <the-sidebar></the-sidebar>
    <router-view />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader";
import TheSidebar from "./components/TheSidebar";
export default {
  components: { TheSidebar, TheHeader },
};
</script>
