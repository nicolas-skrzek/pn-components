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
  <div v-if="intOpen" class="pn-modal">
    <div class="pn-overlay" @click="close()" @keypress.esc="close()" />
    <div class="pn-modal-content" :class="[size]">
      <slot name="content">
        <pn-card>
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
