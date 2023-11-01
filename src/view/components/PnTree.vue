<script setup lang="ts">
import { ref } from 'vue'
import { ROUTES } from '@/router/routes.const'
import { PnTree } from '@/components'
import ControlsView from '@/view/controlsView.vue'

const list = ref([
  {
    label: 'A cool folder',
    children: [
      {
        label: 'A cool sub-folder 1',
        children: [
          { label: 'A cool sub-sub-folder 1' },
          { label: 'A cool sub-sub-folder 2' },
        ],
      },
      { label: 'This one is not that cool' },
    ],
  },
  {
    label: 'A cool folder',
    children: [
      {
        label: 'A cool sub-folder 1',
        children: [
          { label: 'A cool sub-sub-folder 1' },
          { label: 'A cool sub-sub-folder 2' },
        ],
      },
      { label: 'This one is not that cool' },
    ],
  },
])
</script>

<template>
  <controls-view :title="ROUTES.tree.label">
    <pn-tree :data="list" />
  </controls-view>
</template>
