<script setup lang="ts">
import { defineComponent } from 'vue'

export interface IPnTreeNodeProps {
  label: string,
  children?: IPnTreeNodeProps[],
}

defineComponent({
  name: 'PnTreeNode',
})

defineProps<IPnTreeNodeProps>()

</script>

<template>
  <li class="tree-node">
    <span class="tree-node-label">{{ label }}</span>
    <ul v-if="children && children.length" class="tree-node-children">
      <PnTreeNode v-for="(child, i) in children" :key="i" :label="child.label" :children="child?.children" />
    </ul>
  </li>
</template>
