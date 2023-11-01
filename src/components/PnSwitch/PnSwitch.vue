<script setup lang="ts">
import { defineComponent, computed } from 'vue'
import type { PnMode } from '@/types'

export interface IPnTextField {
  disabled?: boolean;
  modelValue?: boolean;
  mode?: PnMode;
}

defineComponent({
  name: 'PnTextField',
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
  <label class="pn-switch" :class="[mode, { checked, disabled }]">
    <div class="pn-switch-control" tabindex="0">
      <div class="pn-switch-control-background" />
      <div class="pn-switch-control-input">
        <input type="checkbox" tabindex="-1" :disabled="disabled" :checked="checked" @change="toggoleCheck()" />
        <div class="pn-switch-control-action" />
      </div>
    </div>
    <span class="pn-switch-label">
      <slot />
    </span>
  </label>
</template>
