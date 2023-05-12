<script setup lang="ts">
  import { ref } from 'vue'
  import ControlsView from '@/view/controlsView.vue'
  import PnTable from '@/components/PnTable/PnTable.vue'

  const items = ref([
    {
      name: 'Frozen Yogurt',
      calories: 159,
    },
    {
      name: 'Ice cream sandwich',
      calories: 237,
    },
    {
      name: 'Eclair',
      calories: 262,
    },
    {
      name: 'Cupcake',
      calories: 305,
    },
    {
      name: 'Gingerbread',
      calories: 356,
    },
    {
      name: 'Jelly bean',
      calories: 375,
    },
    {
      name: 'Lollipop',
      calories: 392,
    },
    {
      name: 'Honeycomb',
      calories: 408,
    },
    {
      name: 'Donut',
      calories: 452,
    },
    {
      name: 'KitKat',
      calories: 518,
    },
  ])

  const props = ref([
    { label: 'bordered', type: 'boolean', value: false },
    { label: 'headerFixed', type: 'boolean', value: false },
    {
      label: 'density', type: 'select', options: ['small', 'medium', 'large'], value: 'medium',
    },
  ])
</script>
<template>
  <controls-view v-model:controls="props">
    <pn-table :items="items" :bordered="(props[0].value as any)" :header-fixed="(props[1].value as any)" :density="(props[2].value as any)" />
  </controls-view>
</template>
