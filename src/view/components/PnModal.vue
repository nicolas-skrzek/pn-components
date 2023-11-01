<script setup lang="ts">
import { ref } from 'vue'
import { ROUTES } from '@/router/routes.const'
import { PnModal, PnButton } from '@/components'
import ControlsView from '@/view/controlsView.vue'
import { SIZE } from '@/const/size.const'

const open = ref(false)

const props = ref([
  { label: 'hideClose', type: 'boolean', value: false },
  {
    label: 'size', type: 'select', options: SIZE, value: 'medium',
  },
])
</script>

<template>
  <controls-view v-model:controls="props" :title="ROUTES.modal.label">
    <pn-button @click="() => open = !open">
      open
    </pn-button>
    <pn-modal v-model:open="open" :hide-close="(props[0].value as any)" :size="(props[1].value as any)">
      <template #card-title>
        Card title
      </template>

      <template #card-subtitle>
        Card subtitle
      </template>

      <template #card-content>
        <div>Card content</div>
      </template>
    </pn-modal>
  </controls-view>
</template>
