<script setup lang="ts">
import { defineComponent, computed } from 'vue'
import PnCard from '@/components/PnCard/PnCard.vue'
import type { TPnDensity } from '@/types'

export interface IPnModalProps {
    open?: boolean;
    hideClose?: boolean;
    size?: TPnDensity;
}

defineComponent({
  name: 'PnModal',
})

const props = withDefaults(defineProps<IPnModalProps>(), {
  open: false,
  hideClose: false,
  size: 'medium',
})

const emits = defineEmits(['update:open'])

const intOpen = computed({
  get: () => props.open,
  set: (value: boolean) => emits('update:open', value),
})

const close = () => {
  intOpen.value = false
}
</script>
<template>
  <div v-if="intOpen" class="pn-modal flex content-center items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-40">
    <div class="pn-overlay h-full w-full absolute top-0 left-0 bg-slate-900 opacity-30" @click="close()" @keypress.esc="close()" />
    <div class="pn-modal-content absolute mx-auto" :class="{'w-1/4': size === 'small', 'w-2/4': size === 'medium', 'w-3/4': size === 'large'}">
      <slot name="content">
        <pn-card class="overflow-y-auto">
          <template #title>
            <slot name="card-title" />
          </template>

          <template #subtitle>
            <slot name="card-subtitle" />
          </template>
          <template #action>
            <div v-if="!hideClose" class="pn-modal-action-close" @click="close()" @keypress.esc="close()">
              x
            </div>
          </template>

          <template #content>
            <slot name="card-content" />
          </template>
        </pn-card>
      </slot>
    </div>
  </div>
</template>
