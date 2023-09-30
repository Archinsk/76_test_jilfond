<template>
  <div v-if="horizontal" :class="groupClass">
    <div class="form-group row">
      <slot></slot>
    </div>
  </div>
  <div v-else :class="groupClass"><slot></slot></div>
</template>

<script>
export default {
  name: "VbFormGroup",
  props: {
    additionalClasses: String,
    horizontal: Boolean,
  },
  computed: {
    groupClass: function () {
      let groupClass = "";
      if (!this.horizontal) {
        groupClass += "form-group d-flex flex-column justify-content-end";
      }
      if (this.additionalClasses) {
        groupClass += ` ${this.additionalClasses}`;
      } else {
        groupClass += " col";
      }
      return groupClass;
    },
  },
};
</script>
