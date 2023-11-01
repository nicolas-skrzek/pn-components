<script setup lang="ts">
import { ROUTES } from '@/router/routes.const'
import { PnCard } from '@/components'
import ControlsView from '@/view/controlsView.vue'
</script>

<template>
  <controls-view :title="ROUTES.card.label">
    <pn-card>
      <template #title>
        Card title
      </template>

      <template #subtitle>
        Card subtitle
      </template>

      <template #content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Curabitur pharetra lacus vel quam lobortis aliquam.
          Vivamus fringilla felis sagittis nibh malesuada auctor.
          Integer nec arcu risus. Nunc ornare eros vel scelerisque malesuada.
          Curabitur at quam quis tortor pretium pretium non non lacus.
        </p>
      </template>
    </pn-card>
  </controls-view>
</template>
