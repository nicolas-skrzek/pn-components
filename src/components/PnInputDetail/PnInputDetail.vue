<script lang="ts" setup>
import { defineComponent } from 'vue'
import type { PnColor } from '@/types'

export interface IPnInputDetailProps {
  message?: string;
  counter?: number;
}

defineComponent({
  name: 'PnInputDetail',
})

const props = withDefaults(defineProps<IPnInputDetailProps>(), {
  message: undefined,
  counter: 0,
})
</script>

<template>
  <div class="input-detail flex justify-between px-3">
    <span class="input-message flex-auto">{{ message }}</span>
    <span class="input-counter flex-initial text-slate-400 text-xs">{{ counter }}</span>
  </div>
</template>
