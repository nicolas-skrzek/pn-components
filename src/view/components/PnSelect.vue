<script setup lang="ts">
  import { ref } from 'vue'
  import PnSelect from '@/components/PnSelect/PnSelect.vue'
  import ControlsView from '@/view/controlsView.vue'
  import { COLOR_STATUS } from '@/const/colors.const'
  import { SIZE } from '@/const/size.const'

  const items = ref([
    {
      title: 'Item 1',
      disabled: false,
      link: true,
      value: 1,
    },
    {
      title: 'Item 2',
      disabled: false,
      link: true,
      value: 2,
    },
    {
      title: 'Not a link',
      disabled: false,
      link: false,
      value: 3,
    },
    {
      title: 'Item disable',
      disabled: true,
      link: true,
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
</script>
<template>
  <controls-view
    v-model:controls="props"
  >
    <pn-select
      :items="items"
      :disabled="(props[0].value as any)"
      :multiple="(props[1].value as any)"
      :placeholder="(props[2].value as any)"
      :size="(props[3].value as any)"
      :status="(props[4].value as any)"
    />
  </controls-view>
</template>
