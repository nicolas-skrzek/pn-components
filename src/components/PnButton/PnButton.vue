<script setup lang="ts">
import { defineComponent } from 'vue'
import type { ButtonHTMLAttributes } from 'vue'
import type { SizeElement, TagetLink, PnColor } from '@/types'

export interface IButtonProps extends ButtonHTMLAttributes {
  disabled?: boolean;
  status?: PnColor | undefined;
  size?: SizeElement;
  target?: TagetLink | undefined;
}

defineComponent({ name: 'PnButton' })

const emits = defineEmits(['click'])

withDefaults(defineProps<IButtonProps>(), {
    disabled: false,
    status: 'primary',
    size: 'medium',
    target: undefined,
})

const onClick = (): void => emits('click')
</script>

<template>
  <button class="btn" :class="[status, size, { disabled }]" type="button" @click="onClick">
    <slot />
  </button>
</template>
