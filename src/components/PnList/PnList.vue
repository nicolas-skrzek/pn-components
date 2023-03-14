<script setup lang="ts">
import type { PropType } from 'vue'

import { defineComponent } from 'vue'
import type { PnListItemType } from '@/components/PnListItem/PnListItem.type'
</script>

<script lang="ts">
import PnListItem from '@/components/PnListItem/PnListItem.vue'

export default defineComponent({
  name: 'PnList',
  components: { PnListItem },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array as PropType<PnListItemType[]>,
      required: true,
    },
  },
})
</script>

<template>
  <div class="list">
    <slot class="list-header" name="header" />
    <div class="list-content">
      <slot :items="items">
        <template v-for="(item, i) in items" :key="`item-${i}`">
          <PnListItem v-bind="item.value" :link="item.link" :title="item.title" :disabled="item.disabled || disabled" />
        </template>
      </slot>
    </div>
    <slot name="footer" />
  </div>
</template>
