<script setup lang="ts">
import { ref } from 'vue'
import { PnSelect } from '@/components'
import ControlsView from '@/view/controlsView.vue'
import { COLOR_STATUS } from '@/const/colors.const'
import { SIZE } from '@/const/size.const'

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
  { label: 'disabled', type: 'boolean', value: false },
  { label: 'multiple', type: 'boolean', value: false },
  { label: 'placeholder', type: 'text', value: 'Select an item' },
  {
    label: 'size', type: 'select', options: SIZE, value: 'medium',
  },
  {
    label: 'status', type: 'select', options: COLOR_STATUS, value: 'primary',
  },
])

const selectedOpt = ref(2)
</script>
<template>
  <controls-view
    v-model:controls="props"
  >
    <div class="flex flex-grow">
      <pn-select
        v-model="selectedOpt"
        :items="items"
        :disabled="(props[0].value as any)"
        :multiple="(props[1].value as any)"
        :placeholder="(props[2].value as any)"
        :size="(props[3].value as any)"
        :status="(props[4].value as any)"
      />
    </div>
  </controls-view>
</template>
