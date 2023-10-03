<template>
  <div class="spinner">
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
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
  text-align: center;
}
</style>
