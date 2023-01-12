<script setup lang="ts">
defineProps({
  status: {
    type: String,
    default: '',
  },
  message: {
    type: String,
    default: '',
  },
  counter: {
    type: Number,
    default: 0,
  },
})
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PnInputDetail',
  computed: {
    statusClass() {
      if (!this.status) {
        return;
      }

      return `text-${this.status}`
    }
  }
})
</script>

<template>
  <div class="input-detail">
    <span :class="['input-message', 'flex-auto', statusClass]">{{ message }}</span>
    <span class="input-counter flex-initial">{{ counter }}</span>
  </div>
</template>
