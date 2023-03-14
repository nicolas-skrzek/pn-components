<script setup lang="ts">
import { defineComponent } from 'vue'
import { sizeValidator, statusValidator } from '@/utils/validator.utils'
</script>

<script lang="ts">
export default defineComponent({
  name: 'PnTextField',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'medium',
      validator: sizeValidator,
    },
    status: {
      type: String,
      default: 'primary',
      validator: statusValidator,
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
})
</script>

<template>
  <div :class="['input-field', `input-field-${status}`]">
    <slot name="prepend" />
    <input class="form-input" :placeholder="placeholder" type="text" :disabled="disabled" :readonly="readonly" />
    <slot name="append" />
  </div>
</template>
<style lang="scss">
@import "../../assets/main.scss";
</style>
