<script setup lang="ts">
defineProps({
  open: {
    type: Boolean,
    default: false,
  },
})
</script>

<script lang="ts">
import { defineComponent } from 'vue'
import PnCard from '@/components/PnCard/PnCard.vue';

export default defineComponent({
  name: 'PnModal',
  components: { PnCard },
})
</script>

<template>
    <div class="pn-modal">
      <div class="pn-overlay"></div>
      <div class="pn-modal-content">
        <slot name="content">
          <pn-card>
            <template #title>
              <slot name="card-title" />
            </template>

            <template #subtitle>
              <slot name="card-subtitle" />
            </template>

            <template #content>
              <slot name="card-content" />
            </template>
          </pn-card>
        </slot>
      </div>
    </div>
</template>
