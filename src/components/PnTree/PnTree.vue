<script setup lang="ts">
import { defineComponent } from 'vue'
import type { IPnTreeNodeProps } from '@/types'
import PnTreeNode from '@/components/PnTreeNode/PnTreeNode.vue'

export interface IPnTreeProps {
    data: IPnTreeNodeProps[],
}

defineComponent({
  name: 'PnTree',
})

defineProps<IPnTreeProps>()

</script>

<template>
  <div class="tree">
    <ul class="tree-list">
      <PnTreeNode v-for="(elem, i) in data" :key="i" :label="elem.label" :children="elem?.children" />
    </ul>
  </div>
</template>
