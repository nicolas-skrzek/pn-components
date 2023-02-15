<script lang="ts">
import { defineComponent } from 'vue'

export interface listItem {
  disabled?: boolean,
  link?: boolean,
  title: string,
  value?: string | number,
}

export default defineComponent({
  name: 'PnList',
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
