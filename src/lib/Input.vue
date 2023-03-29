<template>
  <input
    class="gulu-input"
    :disabled="disabled"
    :readonly="readonly"
    :class="classes"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
<script lang="ts">
import { computed } from "vue";
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const { error } = props;
    const classes = computed(() => {
      return {
        [`gulu-input-${error}`]: error,
      };
    });
    return { classes };
  },
};
</script>
<style lang="scss">
.gulu-input {
  $h: 32px;
  $border-color: #d9d9d9;
  $color: #333;
  $blue: #40a9ff;
  $radius: 4px;
  $red: red;
  $grey: grey;
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: text;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;
  & + & {
    margin-left: 16px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  &:hover,
  &:focus {
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &[disabled] {
    cursor: not-allowed;
    user-select: none;
    color: $grey;
    &:hover {
      border-color: $grey;
    }
  }
  &[readonly] {
    background: rgb(235, 231, 231);
    &:hover {
      border-color: #d9d9d9;
    }
  }
  &.gulu-input-error {
    color: $red;
    border-color: $red;
  }
}
</style>
