<script setup lang="ts">
import { ref } from 'vue'
import { ROUTES } from '@/router/routes.const'
import { PnCheckbox } from '@/components'
import ControlsView from '@/view/controlsView.vue'
import type { PnMode } from '@/types'

const props = ref([
  { label: 'disabled', type: 'boolean', value: false },
  { label: 'intermediate', type: 'boolean', value: false },
])

const value = ref(false)
</script>

<template>
  <controls-view v-model:controls="props" :title="ROUTES.checkbox.label">
    <pn-checkbox
      v-model="value"
      :disabled="(props[0].value as any)"
      :intermediate="(props[1].value as any)"
      :mode="mode"
    >
      checkbox
    </pn-checkbox>
  </controls-view>
</template>
