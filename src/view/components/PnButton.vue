<script setup lang="ts">
import { ref } from 'vue'
import { ROUTES } from '@/router/routes.const'
import { PnButton } from '@/components'
import ControlsView from '@/view/controlsView.vue'
import { COLOR_STATUS } from '@/const/colors.const'
import { SIZE } from '@/const/size.const'

const props = ref([
  { label: 'disabled', type: 'boolean', value: false },
  {
    label: 'status', type: 'select', options: COLOR_STATUS, value: 'primary',
  },
  {
    label: 'size', type: 'select', options: SIZE, value: 'medium',
  },
])
</script>

<template>
  <controls-view v-model:controls="props" :title="ROUTES.button.label">
    <pn-button :disabled="(props[0].value as any)" :status="(props[1].value as any)" :size="(props[2].value as any)">
      button
    </pn-button>
  </controls-view>
</template>
