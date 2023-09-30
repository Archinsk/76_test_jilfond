<template>
  <vb-form-group
    :additional-classes="
      additionalClasses?.group ? additionalClasses.group : ''
    "
    :horizontal="horizontal"
  >
    <label v-if="label" :for="id" :class="labelClass"
      >{{ label }} <span v-if="required" class="text-danger">*</span></label
    >
    <template v-if="focusable">
      <div v-if="horizontal" :class="fieldClass">
        <input
          :type="type"
          class="form-control"
          :id="id"
          :value="value"
          :required="required"
          :disabled="disabled"
          :readonly="readonly"
          :placeholder="placeholder"
          v-model="inputValue"
          @input="$emit('input', inputValue)"
          @focus="$emit('focus')"
          @blur="$emit('blur')"
        />
      </div>
      <input
        v-else
        :type="type"
        class="form-control"
        :id="id"
        :value="value"
        :required="required"
        :disabled="disabled"
        :readonly="readonly"
        :placeholder="placeholder"
        v-model="inputValue"
        @input="$emit('input', inputValue)"
        @focus="$emit('focus')"
        @blur="$emit('blur')"
      />
    </template>
    <template v-else>
      <div v-if="horizontal" :class="fieldClass">
        <input
          :type="type"
          class="form-control"
          :id="id"
          :value="value"
          :required="required"
          :disabled="disabled"
          :readonly="readonly"
          :placeholder="placeholder"
          v-model="inputValue"
          @input="$emit('input', inputValue)"
        />
      </div>
      <input
        v-else
        :type="type"
        class="form-control"
        :id="id"
        :value="value"
        :required="required"
        :disabled="disabled"
        :readonly="readonly"
        :placeholder="placeholder"
        v-model="inputValue"
        @input="$emit('input', inputValue)"
      />
    </template>
  </vb-form-group>
</template>

<script>
import VbFormGroup from "./BS46FormGroup";
import flatpickr from "flatpickr";
import { Russian } from "flatpickr/dist/l10n/ru.js";
export default {
  name: "VbInput",
  components: { VbFormGroup },
  props: {
    id: String,
    label: String,
    type: String,
    value: String,
    required: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    additionalClasses: Object,
    horizontal: Boolean,
    placeholder: String,
    focusable: Boolean,
    flatpickr: Object,
  },
  data() {
    return {
      inputValue: "",
    };
  },
  computed: {
    labelClass: function () {
      let labelClass = "";
      if (!this.horizontal) {
        labelClass += "form-label";
      } else {
        if (this.additionalClasses?.label) {
          labelClass += this.additionalClasses.label;
        } else {
          labelClass += " col";
        }
      }
      return labelClass;
    },
    fieldClass: function () {
      let fieldClass = "";
      if (this.additionalClasses?.field) {
        fieldClass += this.additionalClasses.field;
      } else {
        fieldClass += "col";
      }
      return fieldClass;
    },
  },
  created() {
    this.inputValue = this.value;
  },
  mounted() {
    if (
      (this.type === "date" || this.type === "datetime-local") &&
      this.flatpickr
    ) {
      flatpickr.localize(Russian);
      let options = this.flatpickr;
      if (this.type === "datetime-local") {
        options.enableTime = true;
        options.dateFormat = "Y-m-dTH:i";
      }
      var pickr = flatpickr(`#${this.id}`, options);
      console.log(pickr);
    }
  },
  watch: {
    value: function () {
      this.inputValue = this.value;
      if (this.pickr && !this.value) {
        this.pickr.clear();
      }
    },
  },
};
</script>
