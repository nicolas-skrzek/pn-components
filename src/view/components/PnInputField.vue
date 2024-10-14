<script setup lang="ts">
import { ref } from 'vue'
import { ROUTES } from '@/router/routes.const'
import { PnInputField } from '@/components'
import ControlsView from '@/view/controlsView.vue'

const props = ref([
  { label: 'Disabled', type: 'boolean', value: false },
  { label: 'Readonly', type: 'boolean', value: false },
  { label: 'LabelText', type: 'text', value: 'Label' },
  { label: 'Placeholder', type: 'text', value: 'placeholder text' },
  { label: 'Type', type: 'select', options: [
    {
      name: 'Text',
      value:'text',
    },
    {
      name: 'Textarea',
      value:'textarea',
    },
    {
      name: 'Select',
      value:'select',
    },
    {
      name: 'Date',
      value:'date',
    },
    {
      name: 'Number',
      value:'number',
    },
  ], value: 'text' },
])

const options = ref([
  {
    label: 'Option 1',
    value: 1,
  },
  {
    label: 'Option 2',
    value: 2,
  },
  {
    label: 'Option 3',
    value: 3,
  },
  {
    label: 'Option 4',
    value: 4,
  },
])

const inputModel = ref('')
</script>

<template>
  <controls-view v-model:controls="props" :title="ROUTES.inputfield.label">
    <pn-input-field v-model="inputModel" :labelText="(props[2].value as any)" :placeholder="(props[3].value as any)" :type="(props[4].value as any)" :disabled="(props[0].value as any)" :readonly="(props[1].value as any)">
      <template #options>
          <option v-for="option in options" :key="option.value" :value="option.value">{{ option.label }}</option>
        </template>
    </pn-input-field>
  </controls-view>
</template>
