<script setup lang="ts">
import { defineComponent } from 'vue'

export interface IPnListItemProps {
  disabled?: boolean;
  link?: boolean;
  title?: string | undefined;
}

defineComponent({
  name: 'PnListItem',
})

withDefaults(defineProps<IPnListItemProps>(), {
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
