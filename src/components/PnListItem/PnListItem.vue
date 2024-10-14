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
  <div class="py-1 px-4 items-center min-h-9 bg-stone-50"
    :class="{
      'cursor-not-allowed': disabled,
      'text-stone-400': disabled,
      'hover:bg-inherit': disabled,
      'cursor-pointer': link,
      'hover:bg-stone-200': link && !disabled,
      'bg-stone-200': selected
      }">
    <slot>
      {{ title }}
    </slot>
  </div>
</template>
