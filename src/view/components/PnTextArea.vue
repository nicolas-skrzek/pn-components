<script setup lang="ts">
import { ref } from 'vue'
import { PnTextArea } from '@/components'
import ControlsView from '@/view/controlsView.vue'
import { COLOR_STATUS } from '@/const/colors.const'
import { SIZE } from '@/const/size.const'

const props = ref([
  { label: 'disabled', type: 'boolean', value: false },
  { label: 'displayDetails', type: 'boolean', value: false },
  { label: 'name', type: 'text', value: 'textarea' },
  { label: 'noResize', type: 'boolean', value: false },
  { label: 'placeholder', type: 'text', value: 'Write somesing' },
  { label: 'rows', type: 'number', value: 10 },
  {
    label: 'size', type: 'select', options: SIZE, value: 'medium',
  },
  {
    label: 'status', type: 'select', options: COLOR_STATUS, value: 'primary',
  },
])

const text = ref('')
</script>

<template>
  <controls-view v-model:controls="props">
    <pn-text-area
      v-model="text"
      :disabled="(props[0].value as any)"
      :display-details="(props[1].value as any)"
      :name="(props[2].value as any)"
      :no-resize="(props[3].value as any)"
      :placeholder="(props[4].value as any)"
      :rows="(props[5].value as any)"
      :size="(props[6].value as any)"
      :status="(props[7].value as any)"
    />
  </controls-view>
</template>
