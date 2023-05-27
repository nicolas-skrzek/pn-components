<script lang="ts" setup>
import { defineComponent } from 'vue'

defineComponent({ name: 'PnCard' })
</script>

<template>
  <div class="pn-card">
    <div class="pn-card-header">
      <div class="pn-card-header-content">
        <slot name="header">
          <div class="pn-card-title">
            <slot name="title" />
          </div>
          <div class="pn-card-subtitle">
            <slot name="subtitle" />
          </div>
        </slot>
      </div>
      <div class="pn-pn-card-action">
        <slot name="action" />
      </div>
    </div>
    <div class="pn-card-content">
      <slot name="content" />
    </div>
  </div>
</template>
