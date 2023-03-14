<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PnListItem',
  props: {
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
    value: {
      type: [String, Number],
      required: true,
    },
  },
  emits: ['click'],
})
</script>

<template>
  <div
    :class="[
      'list-item',
      {
        'list-item-disabled': disabled,
        'list-item-link': link,
      },
    ]"
  >
    <slot>
      {{ title }}
    </slot>
  </div>
</template>
