<script setup lang="ts">
import { ref } from 'vue'
import { ROUTES } from '@/router/routes.const'
import { PnButton } from '@/components'
import ControlsView from '@/view/controlsView.vue'

const props = ref([
  { label: 'disabled', type: 'boolean', value: false },
])
</script>

<template>
  <controls-view v-model:controls="props" :title="ROUTES.button.label">
    <pn-button :disabled="(props[0].value as any)">
      button
    </pn-button>
  </controls-view>
</template>
