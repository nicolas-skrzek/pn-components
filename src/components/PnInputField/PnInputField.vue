<script setup lang="ts">
import { defineComponent, computed } from 'vue'
import PnInputDetail from '@/components/PnInputDetail/PnInputDetail.vue'

export interface IInputField {
  disabled?: boolean;
  displayDetails?: boolean;
  labelText?: string;
  modelValue?: string | number | null;
  resize?: boolean;
  placeholder?: string;
  readonly?: boolean;
  rows?: number;
  type?: string;
}

defineComponent({
  name: 'PnInputField',
})

const emits = defineEmits(['update:modelValue'])

const props = withDefaults(defineProps<IInputField>(), {
  disabled: false,
  displayDetails: false,
  labelText: undefined,
  modelValue: '',
  resize: true,
  placeholder: undefined,
  readonly: false,
  rows: 5,
  type: 'text',
})

const counter = computed(() => props.modelValue.length || 0)

const value = computed({
  get: (): any => props.modelValue,
  set: (value: string) => emits('update:modelValue', value),
})
</script>
<template>
  <label class="block">
    <span class="text-slate-700 dark:text-slate-100 font-semibold">{{ labelText }}</span>
    <div class="mt-1 rounded ring-1 ring-slate-300 dark:ring-slate-700 dark:bg-slate-900 dark:text-slate-100">
      <textarea
        v-if="type === 'textarea'"
        v-model="value"
        class="block w-full h-full py-2 px-4 disabled:bg-slate-200 readonly:bg-slate-200 dark:disabled:bg-slate-800 dark:disabled:text-slate-400 dark:readonly:bg-slate-800"
        :class="{'resize-none': !resize}"
        :rows="rows"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly" />
      <select
        v-else-if="type === 'select'"
        v-model="value"
        class="block w-full py-2 px-4 disabled:bg-slate-200 readonly:bg-slate-200 dark:disabled:bg-slate-800 dark:disabled:text-slate-400 dark:readonly:bg-slate-800"
        :disabled="disabled"
        :readonly="readonly">
        <slot name="options" />
      </select>
      <input
        v-else
        v-model="value"
        class="w-full h-10 py-2 px-4 placeholder-slate-400 dark:placeholder-slate-500 disabled:bg-slate-200 readonly:bg-slate-200 dark:disabled:bg-slate-800 dark:disabled:text-slate-400 dark:readonly:bg-slate-800"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly">
    </div>
    <pn-input-detail v-if="displayDetails" :counter="counter" />
  </label>
</template>
