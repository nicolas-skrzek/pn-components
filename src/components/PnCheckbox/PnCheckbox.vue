<script setup lang="ts">
import { defineComponent, computed } from 'vue'
import type { PnMode } from '@/types'

export interface IPnTextField {
  disabled?: boolean;
  modelValue?: boolean;
  mode?: PnMode;
}

defineComponent({
  name: 'PnCheckbox',
})

const emits = defineEmits(['update:modelValue'])

const props = withDefaults(defineProps<IPnTextField>(), {
    disabled: false,
    modelValue: false,
    mode: 'light',
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
  <label class="pn-checkbox" :class="[mode, { disabled }]">
    <input type="checkbox" tabindex="-1" :disabled="disabled" :checked="checked" @change="toggoleCheck()" />
    <div class="pn-checkbox-input" tabindex="0" :class="{ checked }" @click="toggoleCheck()" @keypress.space="toggoleCheck()">
      <div v-show="checked" class="pn-checkbox-inner" />
    </div>
    <span class="pn-checkbox-label">
      <slot />
    </span>
  </label>
</template>
