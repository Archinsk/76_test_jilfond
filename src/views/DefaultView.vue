<template>
  <div id="home-view">
    <img src="images/default.jpg" alt="employee photo" />
    <div class="content">
      <h2>Home Page</h2>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DefaultView",
};
</script>

<style lang="scss" scoped>
#home-view {
  color: #76787d;
  font-size: 0.875rem;

  img {
    float: left;
    margin-right: 3.75rem;
    margin-bottom: 1.25rem;
  }

  .content {
    h2 {
      font-family: "Montserrat SemiBold", serif;
      color: #000;
      font-size: 1rem;
      margin: 0;
    }

    & > :not(:first-child) {
      margin-top: 0.625rem;
    }
  }
}
</style>
