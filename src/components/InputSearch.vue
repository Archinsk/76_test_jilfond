<template>
  <input
    type="text"
    v-model.trim="inputValue"
    @input="changeInput"
    placeholder="Введите имя"
  />
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

<style lang="scss" scoped>
input {
  color: #76787d;
  font-size: 0.875rem;
  line-height: inherit;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  border: solid 1.5px #e9ecef;

  &:focus,
  :focus-visible {
    outline: #e9ecef auto 1px;
    outline-offset: 4px;
  }
}
</style>
