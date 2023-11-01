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
const mode = ref<PnMode>('light')
</script>

<template>
  <controls-view v-model:controls="props" v-model:mode="mode" :title="ROUTES.switch.label" has-mode>
    <pn-switch
      v-model="value"
      :disabled="(props[0].value as any)"
      :mode="mode"
    >
      Switch
    </pn-switch>
  </controls-view>
</template>
