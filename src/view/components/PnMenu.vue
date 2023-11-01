<script setup lang="ts">
import { ref } from 'vue'
import { ROUTES } from '@/router/routes.const'
import { PnMenu, PnButton, PnList } from '@/components'
import ControlsView from '@/view/controlsView.vue'

const props = ref([
  { label: 'disabled', type: 'boolean', value: false },
  { label: 'closeOnClickActivator', type: 'boolean', value: true },
  { label: 'closeOnClickContent', type: 'boolean', value: true },
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
const menuValue = ref(undefined)
</script>

<template>
  <controls-view v-model:controls="props" :title="ROUTES.menu.label">
    <pn-menu v-model="menuValue" :disabled="(props[0].value as any)" :close-on-click-activator="(props[1].value as any)" :close-on-click-content="(props[2].value as any)">
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
