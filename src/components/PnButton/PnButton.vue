<script setup lang="ts">
import { defineComponent } from 'vue'
import type { ButtonHTMLAttributes } from 'vue'

export interface IButtonProps extends /* @vue-ignore */ ButtonHTMLAttributes {
  disabled?: boolean;
}

defineComponent({ name: 'PnButton' })

const emits = defineEmits(['click'])

withDefaults(defineProps<IButtonProps>(), {
  disabled: false,
})

const onClick = (): void => emits('click')
</script>

<template>
  <button
    class="inline-flex items-center text-center px-3.5 py-2.5 rounded-md text-sm
      text-gray-900 shadow-sm shadow-gray-300 dark:text-white
      hover:not:disabled:bg-gray-100 cursor-pointer
      disabled:bg-gray-100 disabled:opacity-75 disabled:cursor-not-allowed"
    type="button"
    @click="onClick">
    <slot />
  </button>
</template>
