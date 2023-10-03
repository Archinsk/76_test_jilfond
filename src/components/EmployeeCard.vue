<template>
  <div class="employee-card" @click="$emit('click')">
    <img src="images/default.jpg" alt="employee photo" class="employee-photo" />
    <div class="employee-info">
      <div>Erwin Howell</div>
      <div>email: Shanna@melissa.tv</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmployeeCard",
};
</script>

<style lang="scss" scoped>
.employee-card {
  width: 15rem;
  display: flex;
  align-items: center;
  border-radius: 0.625rem;
  overflow: hidden;

  &:not(.active) {
    box-shadow: 0 0 0.625rem 0 #0000001a;
  }

  &:not(first-child) {
    margin-top: 1rem;
  }

  .employee-photo {
    width: 4.4375rem;
    height: 4.375rem;
    border-right: solid 1px #e0e0e0;
  }
}
</style>
