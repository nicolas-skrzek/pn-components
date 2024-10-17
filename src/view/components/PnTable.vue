<script setup lang="ts">
import { ref } from 'vue'
import { ROUTES } from '@/router/routes.const'
import { PnTable } from '@/components'
import ControlsView from '@/view/controlsView.vue'
import type { TemplateTableColumns } from '@/types'

const columns = ref([
  {
    key: 'name',
    label: 'Name'
  },
  {
    key: 'calories',
    label: 'Calories'
  },
])
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
</script>
<template>
  <controls-view v-model:controls="props" :title="ROUTES.table.label">
    <pn-table v-model="items" :columns="columns" />
  </controls-view>
</template>
