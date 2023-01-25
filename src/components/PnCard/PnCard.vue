<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PnCard',
})
</script>

<template>
  <div class="card">
    <div class="card-header">
      <slot name="header">
        <div class="card-title">
          <slot name="title" />
        </div>
        <div class="card-subtitle">
          <slot name="subtitle" />
        </div>
      </slot>
    </div>
    <div class="card-content">
      <slot name="content" />
    </div>
  </div>
</template>
