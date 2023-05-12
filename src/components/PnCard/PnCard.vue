<script lang="ts" setup>
import { defineComponent } from 'vue'

defineComponent({ name: 'PnCard' })
</script>

<template>
  <div class="card">
    <div class="card-header">
      <div class="card-header-content">
        <slot name="header">
          <div class="card-title">
            <slot name="title" />
          </div>
          <div class="card-subtitle">
            <slot name="subtitle" />
          </div>
        </slot>
      </div>
      <div class="pn-card-action">
        <slot name="action" />
      </div>
    </div>
    <div class="card-content">
      <slot name="content" />
    </div>
  </div>
</template>
