<script lang="ts" setup>
import { defineComponent } from 'vue'

defineComponent({ name: 'PnCard' })
</script>

<template>
  <div class="border shadow bg-stone-50 rounded-lg py-4 px-6">
    <div class="card-header flex justify-between">
      <div class="card-header-content">
        <slot name="header">
          <div class="card-title font-semibold text-xl tracking-wide whitespace-nowrap break-normal break-words">
            <slot name="title" />
          </div>
          <div class="card-subtitle text-sm font-normal tracking-widest">
            <slot name="subtitle" />
          </div>
        </slot>
      </div>
      <div class="card-action">
        <slot name="action" />
      </div>
    </div>
    <div class="card-content mt-2">
      <slot name="content" />
    </div>
  </div>
</template>
