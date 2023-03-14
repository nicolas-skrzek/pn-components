<script setup lang="ts">
import { defineComponent } from 'vue'
import { sizeValidator, statusValidator } from '../../utils/validator.utils'
</script>

<script lang="ts">
export default defineComponent({
  name: 'PnButton',
  props: {
    disabled: {
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
    href: {
      type: String,
      default: '',
    },
    target: {
      type: String,
      default: '',
    },
  },
  emits: ['click'],
  computed: {
    buttonClasses() {
      return [
        'btn',
        `btn-${this.status}`,
        `size-${this.size}`,
        {
          disabled: this.disabled,
        },
      ]
    },
  },
  methods: {
    onClick() {
      this.$emit('click')
    },
  },
})
</script>

<template>
  <a v-if="href" :class="buttonClasses" href="{{href}}" role="button" target="{{target}}" @click="onClick">
    <slot />
  </a>
  <button v-else :class="buttonClasses" type="button" @click="onClick">
    <slot />
  </button>
</template>
