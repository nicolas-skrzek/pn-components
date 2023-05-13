<script setup lang="ts">
  import { ref } from 'vue'
  import PnCheckbox from '@/components/PnCheckbox/PnCheckbox.vue'
  import ControlsView from '@/view/controlsView.vue'
  import type { PnMode } from '@/types'

  const props = ref([
    { label: 'disabled', type: 'boolean', value: false },
  ])

  const value = ref(false)
  const mode = ref<PnMode>('light')
</script>

<template>
  <controls-view v-model:controls="props" v-model:mode="mode" has-mode>
    <pn-checkbox
      v-model="value"
      :disabled="(props[0].value as any)"
      :mode="mode"
    >
      checkbox
    </pn-checkbox>
  </controls-view>
</template>
