<template>
  <div class="spinner">
    <div class="spinner-border" role="status"></div>
    <div v-if="comment">{{ comment }}</div>
  </div>
</template>

<script>
export default {
  name: "PreLoader",
  props: {
    comment: String,
  },
};
</script>

<style lang="scss" scoped>
.spinner {
  margin-top: 1.8125rem;
  display: flex;
  align-items: center;
  color: #76787d;

  @keyframes spinner-border {
    to {
      transform: rotate(360deg);
    }
  }

  .spinner-border {
    margin-right: 0.5rem;
    width: 1.5rem;
    height: 1.5rem;
    border: 0.25em solid currentcolor;
    border-right-color: transparent;
    border-radius: 50%;
    -webkit-animation: 0.75s linear infinite spinner-border;
    animation: 0.75s linear infinite spinner-border;
  }
}
</style>
