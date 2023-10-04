<template>
  <div id="employee-view">
    <template v-if="employee">
      <img src="images/default.jpg" alt="employee photo" />
      <h2>{{ employee.name }}</h2>
      <div><span class="title">email:</span> {{ employee.email }}</div>
      <div><span class="title">phone:</span> {{ employee.phone }}</div>
      <h3>О себе</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </template>
    <router-link to="/">На главную</router-link>
  </div>
</template>
<script>
export default {
  name: "EmployeeView",
  computed: {
    employees() {
      return this.$store.state.employees;
    },
    activeEmployeeId() {
      return this.$store.state.activeEmployeeId;
    },
    employee() {
      if (this.employees.length) {
        return this.employees.find((item) => item.id === this.activeEmployeeId);
      }
      return null;
    },
  },
};
</script>

<style lang="scss" scoped>
#employee-view {
  color: #76787d;
  font-size: 0.875rem;

  img {
    margin-right: 3.75rem;
    margin-bottom: 1.25rem;

    @media (min-width: 1400px) {
      float: left;
    }
  }

  h2,
  h3,
  .title {
    color: #333;
    font-family: "Montserrat SemiBold", serif;
  }

  h2 {
    color: #000;
    font-size: 1rem;
    margin: 0;
  }

  h3 {
    color: #333;
    font-size: 1rem;
    margin-bottom: 0;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }

  & > :not(:first-child) {
    margin-top: 0.625rem;
  }

  & > :last-child {
    display: inline-block;
    margin-top: 1.25rem;
  }
}
</style>
