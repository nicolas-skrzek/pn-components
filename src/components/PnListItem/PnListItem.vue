<script setup lang="ts">
import { defineComponent } from 'vue'

export interface IPnListItemProps {
  disabled?: boolean;
  link?: boolean;
  selected?: boolean;
  title?: string | undefined;
}

defineComponent({
  name: 'PnListItem',
})

withDefaults(defineProps<IPnListItemProps>(), {
  disabled: false,
  link: false,
  selected: false,
  title: undefined,
})
</script>

<template>
  <div class="list-item" :class="{ disabled, link, selected }">
    <slot>
      {{ title }}
    </slot>
  </div>
</template>
