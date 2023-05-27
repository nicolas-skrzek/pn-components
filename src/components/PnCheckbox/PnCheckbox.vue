<script setup lang="ts">
import { defineComponent, computed } from 'vue'
import PnIcon from '@/components/PnIcon/PnIcon.vue'
import type { PnMode } from '@/types'

export interface IPnTextField {
  disabled?: boolean;
  intermediate?: boolean;
  modelValue?: boolean;
  mode?: PnMode;
}

defineComponent({
  name: 'PnCheckbox',
})

const emits = defineEmits(['update:modelValue'])

const props = withDefaults(defineProps<IPnTextField>(), {
    disabled: false,
    intermediate: false,
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
  <label class="pn-checkbox" :class="[mode, { disabled }]" @click="toggoleCheck()" @keypress.space="toggoleCheck()">
    <input v-model="checked" type="checkbox" tabindex="-1" :disabled="disabled" @change="toggoleCheck()" />
    <pn-icon v-if="checked && !intermediate" name="check_box" :size="20" />
    <pn-icon v-else-if="!checked && intermediate" name="indeterminate_check_box" :size="20" />
    <pn-icon v-else name="check_box_outline_blank" :size="20" />
    <span class="pn-checkbox-label">
      <slot />
    </span>
  </label>
</template>
