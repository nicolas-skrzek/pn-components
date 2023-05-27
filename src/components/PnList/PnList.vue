<script setup lang="ts">
import { defineComponent } from 'vue'
import type { IPnListItemProps } from '@/types'
import PnListItem from '@/components/PnListItem/PnListItem.vue'

export interface IPnListProps {
  disabled?: boolean;
  items: IPnListItemProps[];
}

defineComponent({
  name: 'PnList',
})

withDefaults(defineProps<IPnListProps>(), {
  disabled: false,
})
</script>

<template>
  <div class="list">
    <slot class="list-header" name="header" />
    <div class="list-content">
      <slot :items="items">
        <template v-for="(item, i) in items" :key="`item-${i}`">
          <PnListItem :link="item.link" :title="item.title" :disabled="item.disabled || disabled" />
        </template>
      </slot>
    </div>
    <slot name="footer" />
  </div>
</template>
