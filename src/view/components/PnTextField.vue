<script setup lang="ts">
import { ref } from 'vue'
import { ROUTES } from '@/router/routes.const'
import { PnTextField } from '@/components'
import ControlsView from '@/view/controlsView.vue'
import { COLOR_STATUS } from '@/const/colors.const'
import { SIZE } from '@/const/size.const'

const props = ref([
  { label: 'prepend', type: 'boolean', value: false },
  { label: 'append', type: 'boolean', value: false },
  { label: 'disabled', type: 'boolean', value: false },
  { label: 'placeholder', type: 'text', value: 'Write somesing' },
  { label: 'readonly', type: 'boolean', value: false },
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
  <controls-view v-model:controls="props" :title="ROUTES.textfield.label">
    <pn-text-field
      v-model="text"
      :disabled="(props[2].value as any)"
      :placeholder="(props[3].value as any)"
      :readonly="(props[4].value as any)"
      :size="(props[5].value as any)"
      :status="(props[6].value as any)"
    >
      <template v-if="(props[0].value as any)" #prepend>
        <button type="button">
          pre
        </button>
      </template>

      <template v-if="(props[1].value as any)" #append>
        <button type="button">
          ap
        </button>
      </template>
    </pn-text-field>
  </controls-view>
</template>
