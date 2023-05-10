<script setup lang="ts">
  import { ref } from 'vue'
  import PnList from '@/components/PnList/PnList.vue'
  import ControlsView from '@/view/controlsView.vue'

    const props = ref([
      { label: 'disabled', type: 'boolean', value: false },
    ])

    const items = ref([
      {
        disabled: false,
        link: true,
        title: 'Item 1',
      },
      {
        disabled: false,
        link: true,
        title: 'Item 2',
      },
      {
        disabled: false,
        link: false,
        title: 'Not a link',
      },
      {
        disabled: true,
        link: true,
        title: 'Item disable',
      },
    ])
</script>

<template>
  <controls-view v-model:controls="props">
    <pn-list :items="items" :disabled="(props[0].value as any)" />
  </controls-view>
</template>
