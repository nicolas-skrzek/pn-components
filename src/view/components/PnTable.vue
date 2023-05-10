<script setup lang="ts">
  import { ref } from 'vue'
  import ControlsView from '@/view/controlsView.vue'

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
    <div
      :style="{
        height: props[1].value ? '300px' : 'auto',
        overflow: 'auto',
      }"
    >
      <table
        :class="[
          'pn-table',
          `density-${props[2].value}`,
          {
            'header-fixed': props[1].value,
            bordered: props[0].value,
          },
        ]"
      >
        <thead class="pn-table-head">
          <tr>
            <th class="pn-table-cell text-left">
              Name
            </th>
            <th class="pn-table-cell text-left">
              Calories
            </th>
          </tr>
        </thead>
        <tbody class="pn-table-body">
          <tr
            v-for="item in items"
            :key="item.name"
          >
            <td class="pn-table-cell">
              {{ item.name }}
            </td>
            <td class="pn-table-cell">
              {{ item.calories }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </controls-view>
</template>
