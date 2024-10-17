<script setup lang="ts">
import { ref } from 'vue'
import { ROUTES } from '@/router/routes.const'
import { PnBadge } from '@/components'
import ControlsView from '@/view/controlsView.vue'
</script>
<template>
  <controls-view :title="ROUTES.badge.label">
    <div class="flex gap-1">
      <pn-badge>Badge 1</pn-badge>
      <pn-badge>Badge 2</pn-badge>
      <pn-badge>Badge 3</pn-badge>
    </div>
  </controls-view>
</template>
