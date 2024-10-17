<script setup lang="ts">
import { ref } from 'vue'
import { ROUTES } from '@/router/routes.const'
import { PnButton } from '@/components'
import ControlsView from '@/view/controlsView.vue'

const props = ref([
  { label: 'disabled', type: 'boolean', value: false },
])
</script>

<template>
  <controls-view v-model:controls="props" :title="ROUTES.button.label">
    <div class="flex gap-4">
      <pn-button :disabled="(props[0].value as any)">
        button
      </pn-button>
      <pn-button as="a" type="a" href='#/button' :disabled="(props[0].value as any)">
        link
      </pn-button>
    </div>
  </controls-view>
</template>
