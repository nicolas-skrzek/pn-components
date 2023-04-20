<script setup lang="ts">
import { defineComponent } from 'vue'

export interface PnListItemProps {
  disabled?: boolean;
  link?: boolean;
  title?: string | undefined;
  value: string | number;
}

defineComponent({
  name: 'PnListItem',
})

withDefaults(defineProps<PnListItemProps>(), {
    disabled: false,
    link: false,
    title: undefined,
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
