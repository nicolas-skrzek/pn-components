<script setup lang="ts">
import { sizeValidator, statusValidator } from './../../utils/validator.utils'

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
  computed: {
    buttonClasses() {
      return [
        'btn',
        `btn-${this.status}`,
        `size-${this.size}`,
        {
          disabled: this.disabled,
        }
      ]
    }
  },
  methods: {
    onClick() {
      this.$emit('cick')
    }
  }
})
</script>

<template>
  <a v-if="href" :class="buttonClasses" href="{{href}}" role="button" target="{{target}}" @click="onClick">
    <slot />
  </a>
  <button v-else :class="buttonClasses" @click="onClick">
    <slot />
  </button>
</template>
