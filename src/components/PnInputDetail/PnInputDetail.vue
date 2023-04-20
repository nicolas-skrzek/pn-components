<script lang="ts" setup>
import { defineComponent } from 'vue'
import type { PnColor } from '@/types'

export interface PnInputDetailProps {
  status?: PnColor | undefined;
  message?: string;
  counter?: number;
}

defineComponent({
  name: 'PnInputDetail',
})

const props = withDefaults(defineProps<PnInputDetailProps>(), {
    status: undefined,
    message: undefined,
    counter: 0,
})

const statusClass = (): string => (props.status ? `text-${props.status}` : '')
</script>

<template>
  <div class="input-detail">
    <span :class="['input-message', 'flex-auto', statusClass]">{{ message }}</span>
    <span class="input-counter flex-initial">{{ counter }}</span>
  </div>
</template>
