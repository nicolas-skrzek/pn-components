<script setup lang="ts">
import { sizeValidator, statusValidator } from "./../utils/validator.utils";

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
    default: 'prymary',
    validator: statusValidator
  },
  href: {
    type: String,
    default: '',
  },
  target: {
    type: String,
    default: '',
  },
})
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PnButton',
  methods: {
    onClick() {
      this.$emit('cick')
    }
  }
})
</script>

<template>
  <a v-if="href" class="btn" href="{{href}}" role="button" target="{{target}}" @click="onClick">
    <slot />
  </a>
  <button v-else class="btn" @click="onClick">
    <slot />
  </button>
</template>

<style lang="scss">
@import "../../assets/main.scss";
</style>
