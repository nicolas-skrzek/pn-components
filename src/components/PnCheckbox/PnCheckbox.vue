<script setup lang="ts">
import { defineComponent, computed } from 'vue'
import PnIcon from '@/components/PnIcon/PnIcon.vue'
import type { PnMode } from '@/types'

export interface IPnTextField {
  disabled?: boolean;
  modelValue?: boolean;
}

defineComponent({
  name: 'PnCheckbox',
})

const emits = defineEmits(['update:modelValue'])

const props = withDefaults(defineProps<IPnTextField>(), {
  disabled: false,
  modelValue: false,
})

const checked = computed({
  get: (): boolean => props.modelValue,
  set: (value: boolean) => emits('update:modelValue', value),
})

const toggoleCheck = () => {
  if (!props.disabled) {
    checked.value = !checked.value
  }
}
</script>

<template>
  <label class="checkbox flex items-center" :class="{ 'cursor-pointer': !disabled, 'cursor-not-allowed': disabled, 'opacity-50': disabled }">
    <input
      v-model="checked"
      class="h-4 w-4 cursor-pointer bg-white inline-block shrink-0 p-0 rounded ring-1 ring-gray-300 checked:ring-gray-500 checked:bg-gray-500 disabled:cursor-not-allowed"
      type="checkbox"
      :disabled="disabled"
      @click="toggoleCheck()" />
    <span class="checkbox-label ml-2">
      <slot />
    </span>
  </label>
</template>
