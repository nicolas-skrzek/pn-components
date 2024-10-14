<script setup lang="ts">
import { ref } from 'vue'
import { ROUTES } from '@/router/routes.const'
import { PnSelect } from '@/components'
import ControlsView from '@/view/controlsView.vue'
import { COLOR_STATUS } from '@/const/colors.const'
import { SIZE } from '@/const/size.const'
import type { PnMode } from '@/types'

const items = ref([
  {
    label: 'Item 1',
    value: 1,
  },
  {
    label: 'Item 2',
    value: 2,
  },
  {
    label: 'Not a link',
    value: 3,
  },
  {
    label: 'Item disable',
    value: 4,
  },
])
const props = ref([
  { label: 'clearable', type: 'boolean', value: false },
  { label: 'disabled', type: 'boolean', value: false },
  { label: 'multiple', type: 'boolean', value: false },
  { label: 'placeholder', type: 'text', value: 'Select an item' },
])

const selectedOpt = ref(undefined)
</script>
<template>
  <controls-view
    v-model:controls="props"
    :title="ROUTES.select.label"
  >
    <pn-select
      v-model="selectedOpt"
      class="mx-24"
      :items="items"
      :clearable="(props[0].value as any)"
      :disabled="(props[1].value as any)"
      :multiple="(props[2].value as any)"
      :placeholder="(props[3].value as any)"
    />
  </controls-view>
</template>
