<script setup lang="ts">
import { sizeValidator, statusValidator } from "./../../utils/validator.utils";

defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'medium',
    validator: sizeValidator
  },
  status: {
    type: String,
    default: 'primary',
    validator: statusValidator
  },
  placeholder: {
    type: String,
    default: '',
  },
})
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PnTextField',
})
</script>

<template>
  <div :class="['input-field', `input-field-${status}`]">
    <slot name="prepend" />
    <input class="form-input" :placeholder="placeholder" type="text" />
    <slot name="append" />
  </div>
</template>
<style lang="scss">
@import "../../assets/main.scss";
</style>
