<template>
  <aside class="sidebar">
    <div>Поиск сотрудников</div>
    <input-search />
    <pre-loader v-if="loading" comment="Поиск сотрудников..." />
    <template v-else>
      <div>Результаты</div>
      <template v-if="employees.length">
        <employee-card
          v-for="employee of employees"
          :key="employee.id"
          :class="employee.id === activeEmployeeId ? 'active' : ''"
          @click="setActiveEmployee(employee.id)"
        />
      </template>
      <div v-else>{{ searchResultText }}</div>
      <!--      <employee-card class="active" />-->
    </template>
  </aside>
</template>

<script>
import EmployeeCard from "./EmployeeCard";
import InputSearch from "./InputSearch";
import PreLoader from "./PreLoader";
export default {
  name: "TheSidebar",
  components: { PreLoader, InputSearch, EmployeeCard },
  computed: {
    loading() {
      return this.$store.state.loader.loading;
    },
    searchResultText() {
      return this.$store.getters.searchResultText;
    },
    employees() {
      return this.$store.state.employees;
    },
    activeEmployeeId() {
      return this.$store.state.activeEmployeeId;
    },
  },
  methods: {
    setActiveEmployee(id) {
      console.log("push");
      this.$router.push("/employee");
      this.$store.commit("setActiveEmployeeId", id);
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  padding: 1.25rem;
  border-right: solid 1px #e0e0e0;
}
</style>
