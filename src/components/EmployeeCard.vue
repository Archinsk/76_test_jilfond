<template>
  <div class="employee-card" @click="$emit('click')">
    <img
      src="images/default-light.jpg"
      alt="employee photo"
      class="employee-photo"
    />
    <div class="employee-info">
      <div>
        <div class="bold">{{ name }}</div>
        <div class="muted">{{ email }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmployeeCard",
  props: {
    name: String,
    email: String,
  },
};
</script>

<style lang="scss" scoped>
.employee-card {
  display: flex;
  align-items: center;
  border-radius: 0.625rem;
  overflow: hidden;

  &:not(:last-child) {
    margin-bottom: 1.125rem;
  }

  &:not(.active) {
    box-shadow: 0 0 0.625rem 0 #0000001a;
  }

  &.active {
    background-color: #e0e0e0;
    border: solid 1px #e0e0e0;
  }

  .employee-photo {
    width: 4.4375rem;
    height: 4.375rem;
    border-right: solid 1px #e0e0e0;
  }

  .employee-info {
    margin-left: 0.9375rem;
    margin-right: 0.9375rem;
    display: flex;
    align-items: center;
    font-size: 0.875rem;

    .bold {
      font-family: "Montserrat SemiBold", serif;
    }

    .muted {
      color: #76787d;
      margin-top: 0.3125rem;
    }
  }
}
</style>
