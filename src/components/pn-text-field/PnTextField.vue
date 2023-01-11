<script setup lang="ts">
defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'medium',
  },
  status: {
    type: String,
    default: 'prymary',
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
    <input class="form-input" :placeholder="placeholder" />
    <slot name="append" />
  </div>
</template>
<style lang="scss">
@import "../../assets/main.scss";
</style>
