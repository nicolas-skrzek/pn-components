<script setup lang="ts">
import { defineComponent, computed } from 'vue'
import type { ButtonHTMLAttributes } from 'vue'
import type { SizeElement, TagetLink, PnColor } from '@/types'

export interface ButtonProps extends ButtonHTMLAttributes {
  disabled?: boolean;
  status?: PnColor | undefined;
  size?: SizeElement;
  target?: TagetLink | undefined;
}

defineComponent({ name: 'PnButton' })

const emits = defineEmits(['click'])

const props = withDefaults(defineProps<ButtonProps>(), {
    disabled: false,
    status: 'primary',
    size: 'medium',
    target: undefined,
})

const buttonClasses = computed(() => ([
  'btn',
  `btn-${props.status}`,
  `size-${props.size}`,
  {
    disabled: props.disabled,
  },
]))

const onClick = (): void => emits('click')
</script>

<template>
  <button :class="buttonClasses" type="button" @click="onClick">
    <slot />
  </button>
</template>
