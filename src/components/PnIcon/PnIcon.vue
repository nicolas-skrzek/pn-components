<script setup lang="ts">
import { defineComponent, computed } from 'vue'
import type { PnIconType } from './PnIcon.types'

export interface IPnIcon {
    name?: string;
    size?: number | string;
    type?: PnIconType;
}

defineComponent({ name: 'PnIcon' })

const props = withDefaults(defineProps<IPnIcon>(), {
  name: undefined,
  size: 16,
  type: 'filled',
})

const iconClass = computed(() => (props.type !== 'filled' ? `material-icons-${props.type}` : 'material-icons'))
</script>

<template>
  <span :class="[iconClass]" :style="{ fontSize: `${size}px` }">{{ name }}</span>
</template>
