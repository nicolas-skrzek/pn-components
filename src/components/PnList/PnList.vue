<script setup lang="ts">
import type { PropType } from 'vue'

import { defineComponent } from 'vue'
import type { listItem } from '../PnListItem/PnListItem.vue'
</script>

<script lang="ts">
import PnListItem from '../PnListItem/PnListItem.vue'

export default defineComponent({
  name: 'PnList',
  components: { PnListItem },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array as PropType<listItem[]>,
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
          <PnListItem v-bind="item" :disabled="item.disabled || disabled" />
        </template>
      </slot>
    </div>
    <slot name="footer" />
  </div>
</template>
