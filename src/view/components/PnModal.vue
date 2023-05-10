<script setup lang="ts">
  import { ref } from 'vue'
  import PnModal from '@/components/PnModal/PnModal.vue'
  import PnButton from '@/components/PnButton/PnButton.vue'
  import ControlsView from '@/view/controlsView.vue'

  const open = ref(false)
</script>

<template>
  <controls-view>
    <pn-button @click="() => open = !open">
      open
    </pn-button>
    <pn-modal :open="open">
      <template #card-title>
        Card title
      </template>

      <template #card-subtitle>
        Card subtitle
      </template>

      <template #card-content>
        <div>Card content</div>
      </template>
    </pn-modal>
  </controls-view>
</template>
