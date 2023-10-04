<template>
  <div class="container-xxl">
    <div class="brand">Жилфонд</div>
    <div>Пользователь</div>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style lang="scss" scoped>
.container-xxl {
  width: 100%;
  padding: 1.875rem 0.9375rem 2.875rem;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1400px) {
    max-width: 1296px;
  }

  .brand {
    font-family: "Montserrat Bold", serif;
    font-weight: 700;
    font-size: 2rem;
    color: #e31f24;
  }
}
</style>
