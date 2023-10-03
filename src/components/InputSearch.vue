<template>
  <input type="text" v-model.trim="inputValue" @input="changeInput" />
</template>

<script>
export default {
  name: "InputSearch",

  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    changeInput() {
      this.$store.dispatch("changeInput", this.inputValue);
    },
  },
};
</script>
