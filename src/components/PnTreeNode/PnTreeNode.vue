<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PnTreeNode',
  props: {
    options: {
      type: Object,
      required: true,
    },
  },
})
</script>

<template>
  <li class="tree-node">
    <span class="tree-node-label">{{ options.label }}</span>
    <ul v-if="options.children && options.children.length" class="tree-node-children">
      <PnTreeNode v-for="(child, i) in options.children" :key="i" :options="child" />
    </ul>
  </li>
</template>
