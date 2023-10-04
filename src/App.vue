<template>
  <div id="app">
    <the-header></the-header>
    <main class="container">
      <div class="card">
        <the-sidebar></the-sidebar>
        <section class="view-wrapper">
          <router-view />
        </section>
      </div>
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
.container {
  width: 100%;
  padding: 0 0.9375rem 0.9375rem;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 1400px) {
    max-width: 1296px;
  }
}
.card {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 35.9375rem;
  background-color: #fdfdfd;
  border-radius: 0.625rem;
  box-shadow: 0px 0px 10px 0px #0000001a;

  @media (min-width: 1400px) {
    flex-direction: row;
  }

  .view-wrapper {
    flex: 1;
    padding: 1.25rem;
  }
}
</style>
