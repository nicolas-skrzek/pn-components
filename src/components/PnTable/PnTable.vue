<script setup lang="ts">
import { computed } from 'vue'
import type { TPnDensity } from '@/types'
import { getKeysOfArrayObject } from '@/utils/common.utils'

export interface IPnTable {
    items: any[];
  }

const props = withDefaults(defineProps<IPnTable>(), {})
const getValue = (array: any[]) => array.map((item) => Object.values(item))

const headerItems = computed(() => getKeysOfArrayObject(props.items))

const internalItems = computed(() => getValue(props.items))
</script>

<template>
  <div
    class="pn-table-overlayborder-b-0 not-prose bg-white dark:bg-gray-900 overflow-hidden flex border border-gray-200 dark:border-gray-700 relative rounded-t-md">
    <table class="border-collapse min-w-full table-fixed divide-y divide-gray-300 dark:divide-gray-700">
      <thead class="pn-table-head relative">
        <tr>
          <slot name="header" :columns="headerItems">
            <template v-for="item in headerItems" :key="item">
              <th class="pn-table-cell text-left rtl:text-right px-4 py-3.5 text-gray-900 dark:text-white font-semibold text-sm">
                <slot name="head" :column="item">
                  {{ item }}
                </slot>
              </th>
            </template>
          </slot>
        </tr>
      </thead>
      <tbody class="pn-table-body divide-y divide-gray-200 dark:divide-gray-800">
        <tr
          v-for="(row, r) in internalItems"
          :key="r"
        >
          <slot name="row" :row="row">
            <td
              v-for="(cell, c) in row"
              :key="`${r}_${c}`"
              class="pn-table-cell whitespace-nowrap px-4 py-4 text-gray-500 dark:text-gray-400 text-sm"
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
