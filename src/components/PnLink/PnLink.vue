<script setup lang="ts">
import { defineComponent } from 'vue'
import type { LinkTypes } from '@/types'

export interface ILinkProps {
  as?: string;
  disabled?: boolean;
  readonly?: boolean;
  to?: string;
  type?: LinkTypes;

}

defineComponent({ name: 'PnLink' })

const emits = defineEmits(['click'])

withDefaults(defineProps<ILinkProps>(), {
  as: 'button',
  disabled: false,
  readonly: false,
  type: 'button',
})

const onClick = (): void => emits('click')
</script>

<template>
  <component
    v-if="!to"
    :is="as"
    :type="type"
    :disabled="disabled"
    :readonly="readonly"
    v-bind="$attrs"
    @click="onClick">
    <slot />
  </component>
  <NuxtLink v-else
    :to="to"
    v-bind="$attrs"
    >
    <slot />
  </NuxtLink>
</template>
