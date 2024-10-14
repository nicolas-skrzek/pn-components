<script setup lang="ts">
import { ref } from 'vue'
import { ROUTES } from '@/router/routes.const'
import { PnSwitch } from '@/components'
import ControlsView from '@/view/controlsView.vue'
import type { PnMode } from '@/types'

const props = ref([
  { label: 'disabled', type: 'boolean', value: false },
])

const value = ref(false)
</script>

<template>
  <controls-view v-model:controls="props" :title="ROUTES.switch.label">
    <pn-switch
      v-model="value"
      :disabled="(props[0].value as any)"
    >
      Switch
    </pn-switch>
  </controls-view>
</template>
