<script setup lang="ts">
import { ref } from 'vue'
import { PnMenu, PnButton, PnList } from '@/components'
import ControlsView from '@/view/controlsView.vue'

const props = ref([
  { label: 'disabled', type: 'boolean', value: false },
  { label: 'closeOnClickContent', type: 'boolean', value: false },
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
    <pn-menu :disabled="(props[0].value as any)" :close-on-click-content="(props[1].value as any)">
      <template #activator>
        <pn-button>
          open
        </pn-button>
      </template>
      <template #content>
        <pn-list :items="items" />
      </template>
    </pn-menu>
  </controls-view>
</template>
