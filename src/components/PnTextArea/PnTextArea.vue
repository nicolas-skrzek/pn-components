<script setup lang="ts">
import { defineComponent, computed } from 'vue'
import type { PnColor, SizeElement } from '@/types'
import PnInputDetail from '@/components/PnInputDetail/PnInputDetail.vue'

export interface IPnTextAreaProps {
  disabled?: boolean;
  displayDetails?: boolean;
  name?: string;
  noResize?: boolean;
  placeholder?: string;
  rows?: number;
  size?: SizeElement;
  status?: PnColor | undefined;
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
  status: 'primary',
  size: 'medium',
  modelValue: '',
})

const counter = computed(() => props.modelValue.length || 0)

const text = computed({
  get: (): string => props.modelValue,
  set: (value: string) => emits('update:modelValue', value),
})
</script>

<template>
  <div class="pn-text-area">
    <div class="input-field" :class="[status]">
      <textarea v-model="text" class="form-input" :placeholder="placeholder" :name="name" :rows="rows" />
    </div>
    <pn-input-detail v-if="displayDetails" :counter="counter" />
  </div>
</template>
