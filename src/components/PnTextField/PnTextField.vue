<script setup lang="ts">
import { defineComponent, computed } from 'vue'

export interface IPnTextField {
  disabled?: boolean;
  modelValue?: string;
  placeholder?: string;
  readonly?: boolean;
  size?: string;
  status?: string;
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
    status: 'primary',
    size: 'medium',
})

const text = computed({
  get: (): string => props.modelValue,
  set: (value: string) => emits('update:modelValue', value),
})
</script>

<template>
  <div :class="['input-field', `input-field-${status}`]">
    <slot name="prepend" />
    <input v-model="text" class="form-input" :placeholder="placeholder" type="text" :disabled="disabled" :readonly="readonly" />
    <slot name="append" />
  </div>
</template>
<style lang="scss">
@import "../../assets/main.scss";
</style>
