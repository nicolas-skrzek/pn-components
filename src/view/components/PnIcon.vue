<script setup lang="ts">
import { ref } from 'vue'
import { ROUTES } from '@/router/routes.const'
import { PnIcon } from '@/components'
import ControlsView from '@/view/controlsView.vue'

const props = ref([
  { label: 'size', type: 'number', value: 16 },
  {
    label: 'type', type: 'select', options: ['filled', 'outlined'], value: 'filled',
  },
])
</script>

<template>
  <controls-view v-model:controls="props" :title="ROUTES.icon.label">
    <pn-icon
      :size="(props[0].value as any)"
      :type="(props[1].value as any)"
      name="info"
    />
    <pn-icon
      :size="(props[0].value as any)"
      :type="(props[1].value as any)"
      name="shopping_cart"
    />
  </controls-view>
</template>
