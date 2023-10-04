<template>
  <aside class="sidebar">
    <div class="title">Поиск сотрудников</div>
    <input-search />
    <pre-loader v-if="loading" comment="Поиск сотрудников..." />
    <template v-else>
      <div class="title">Результаты</div>
      <template v-if="employees.length">
        <employee-card
          v-for="employee of employees"
          :key="employee.id"
          :name="employee.name"
          :email="employee.email"
          :class="employee.id === activeEmployeeId ? 'active' : ''"
          @click="setActiveEmployee(employee.id)"
        />
      </template>
      <div v-else class="small-text">{{ searchResultText }}</div>
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
      this.$store.commit("setActiveEmployeeId", id);
      if (this.$route.path !== "/employee") {
        this.$router.push("/employee");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  box-sizing: border-box;
  min-width: 18.1875rem;
  padding: 1.25rem;
  border-bottom: solid 1px #e0e0e0;
  border-right: none;
  display: flex;
  flex-direction: column;

  @media (min-width: 1400px) {
    border-bottom: none;
    border-right: solid 1px #e0e0e0;
  }

  .title {
    font-family: "Montserrat SemiBold", serif;
    margin-bottom: 1rem;

    &:not(:first-child) {
      margin-top: 1.8125rem;
    }
  }

  .small-text {
    color: #76787d;
    font-size: 0.875rem;
  }
}
</style>
