<script setup lang="ts">
import { defineComponent, computed } from 'vue'

export interface IPnTextField {
  disabled?: boolean;
  modelValue?: string | number;
  placeholder?: string;
  readonly?: boolean;
}

defineComponent({
  name: 'PnTextField',
})

const emits = defineEmits(['update:modelValue'])

const props = withDefaults(defineProps<IPnTextField>(), {
  disabled: false,
  modelValue: '',
  placeholder: undefined,
  readonly: false,
})

const text = computed({
  get: (): any => props.modelValue,
  set: (value: string) => emits('update:modelValue', value),
})
</script>

<template>
  <div class="flex rounded-lg py-1 px-2 text-slate-600 dark:text-slate-100 bg-stone-100 dark:bg-stone-600 hover:opacity-75 transition-shadow duration-150 delay-150">
    <slot name="prepend" />
    <slot>
      <input v-model="text" class="flex flex-wrap grow items-center w-full border-b border-solid border-slate-500 readonly:cursor-default disabled:cursor-not-allowed" :placeholder="placeholder" type="text" :disabled="disabled" :readonly="readonly" />
    </slot>
    <slot name="append" />
  </div>
</template>
