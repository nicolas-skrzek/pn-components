<script setup lang="ts">
import { computed } from 'vue'
import type { TemplateTableColumns } from '@/types'

export interface IPnTable {
    columns?: TemplateTableColumns[];
    modelValue: any[];
  }

const props = withDefaults(defineProps<IPnTable>(), {
  modelValue: null,
})
</script>

<template>
  <div class="bg-white dark:bg-gray-900 overflow-hidden border border-gray-200 dark:border-gray-700 relative rounded-md min-w-full">
    <table class="table-fixed divide-y divide-gray-300 dark:divide-gray-700 min-w-full">
      <thead class="relative">
        <tr>
          <slot name="header" :columns="columns">
              <th v-for="col in columns" :key="col.key" class="text-left rtl:text-right px-4 py-3.5 text-slate-900 dark:text-white font-semibold text-sm" scope="col">
                <slot name="head" :column="col.key">
                  {{ col.label }}
                </slot>
              </th>
          </slot>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
        <tr v-for="(row, rowKey) in modelValue" :key="rowKey" class="hover:bg-slate-50 dark:hover:bg-slate-900">
          <slot name="row" :row="row">
            <td v-for="col in columns" :key="col.key" class="whitespace-nowrap px-4 py-4 text-slate-500 dark:text-slate-400 text-sm">
              <slot name="cell" :cell="col">
                {{ row[col.key] || col?.defaultValue }}
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
