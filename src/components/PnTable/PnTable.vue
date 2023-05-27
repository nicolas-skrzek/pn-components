<script setup lang="ts">
import { computed } from 'vue'
import type { TPnDensity } from '@/types'
import { getKeysOfArrayObject } from '@/utils/common.utils'

export interface IPnTable {
    bordered?: boolean;
    density?: TPnDensity;
    headerFixed?: boolean;
    items: any[];
  }

const props = withDefaults(defineProps<IPnTable>(), {
  bordered: false,
  density: 'medium',
  headerFixed: false,
})
const getValue = (array: any[]) => array.map((item) => Object.values(item))

const headerItems = computed(() => getKeysOfArrayObject(props.items))

const internalItems = computed(() => getValue(props.items))
</script>

<template>
  <div
    class="pn-table-overlay"
    :style="{
      height: headerFixed ? '300px' : 'auto',
    }"
  >
    <table
      :class="[
        'pn-table',
        `density-${density}`,
        {
          headerFixed,
          bordered,
        },
      ]"
    >
      <thead class="pn-table-head">
        <tr>
          <slot name="header" :columns="headerItems">
            <template v-for="item in headerItems" :key="item">
              <th class="pn-table-cell text-left">
                <slot name="head" :column="item">
                  {{ item }}
                </slot>
              </th>
            </template>
          </slot>
        </tr>
      </thead>
      <tbody class="pn-table-body">
        <tr
          v-for="(row, r) in internalItems"
          :key="r"
        >
          <slot name="row" :row="row">
            <td
              v-for="(cell, c) in row"
              :key="`${r}_${c}`"
              class="pn-table-cell"
            >
              <slot name="cell" :cell="cell">
                {{ cell }}
              </slot>
            </td>
          </slot>
        </tr>
        <slot name="append" />
      </tbody>
    </table>
    <slot name="bottom" />
  </div>
</template>
