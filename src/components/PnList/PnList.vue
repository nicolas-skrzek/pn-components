<script setup lang="ts">
import type { PropType } from 'vue'

import type { listItem } from "./../PnListItem/PnListItem.vue";

defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  items: Array as PropType<listItem[]>,
})
</script>

<script lang="ts">
import { defineComponent } from 'vue'
import PnListItem from './../PnListItem/PnListItem.vue';

export default defineComponent({
  name: 'PnList',
  components: { PnListItem }
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
