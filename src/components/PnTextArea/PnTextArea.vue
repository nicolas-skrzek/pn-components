<script setup lang="ts">
import { defineComponent, computed } from 'vue'
import PnInputDetail from '@/components/PnInputDetail/PnInputDetail.vue'

export interface IPnTextAreaProps {
  disabled?: boolean;
  displayDetails?: boolean;
  name?: string;
  noResize?: boolean;
  placeholder?: string;
  rows?: number;
  modelValue?: string;
}

defineComponent({
  name: 'PnTextArea',
})

const emits = defineEmits(['update:modelValue'])

const props = withDefaults(defineProps<IPnTextAreaProps>(), {
  disabled: false,
  displayDetails: false,
  name: undefined,
  noResize: false,
  placeholder: undefined,
  rows: 5,
  modelValue: '',
})

const counter = computed(() => props.modelValue.length || 0)

const text = computed({
  get: (): string => props.modelValue,
  set: (value: string) => emits('update:modelValue', value),
})
</script>

<template>
  <div class="flex flex-col">
    <div class=" rounded-lg py-1 px-2 text-slate-600 dark:text-slate-100 bg-stone-100 dark:bg-stone-600 hover:opacity-75 transition-shadow duration-150 delay-150">
      <textarea
        v-model="text"
        class="flex flex-wrap grow items-center w-full border-b border-solid border-slate-500 readonly:cursor-default disabled:cursor-not-allowed"
        :class="{'resize-none': noResize}"
        :placeholder="placeholder"
        :name="name"
        :rows="rows" />
    </div>
    <pn-input-detail v-if="displayDetails" :counter="counter" />
  </div>
</template>
