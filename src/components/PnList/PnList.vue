<script setup lang="ts">
import { defineComponent } from 'vue'
import type { IPnListItemProps } from '@/types'
import PnListItem from '@/components/PnListItem/PnListItem.vue'

export interface IPnListProps {
  disabled?: boolean;
  items?: IPnListItemProps[];
}

defineComponent({
  name: 'PnList',
})

withDefaults(defineProps<IPnListProps>(), {
  disabled: false,
  items: () => [],
})
</script>

<template>
  <div class="list">
    <slot class="list-header" name="header" />
    <div class="list-content">
      <slot>
        <template v-for="(item, i) in items" :key="`item-${i}`">
          <pn-list-item :link="item.link" :title="item.title" :selected="item.selected" :disabled="item.disabled || disabled" />
        </template>
      </slot>
    </div>
    <slot name="footer" />
  </div>
</template>
