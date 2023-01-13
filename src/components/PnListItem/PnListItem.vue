<script setup lang="ts">
export interface listItem {
  disabled?: boolean,
  link?: boolean,
  title: string,
  value?: string | number,
}

defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  link: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    default: null,
  },
  value: [String, Number]
})
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PnList',
  emits: {
    click: (e: MouseEvent | KeyboardEvent) => true,
  }
})
</script>

<template>
  <div :class="[
    'list-item',
    {
      'list-item-disabled': disabled,
      'list-item-link': link,
    },
    ]">
    <slot>
      {{ title }}
    </slot>
  </div>
</template>
