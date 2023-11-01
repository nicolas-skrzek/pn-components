<script setup lang="ts">
import { defineComponent, computed } from 'vue'

export interface IPnTextField {
  disabled?: boolean;
  modelValue?: string | number;
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
  get: (): any => props.modelValue,
  set: (value: string) => emits('update:modelValue', value),
})
</script>

<template>
  <div class="input-field" :class="[status]">
    <slot name="prepend" />
    <slot>
      <input v-model="text" class="form-input" :placeholder="placeholder" type="text" :disabled="disabled" :readonly="readonly" />
    </slot>
    <slot name="append" />
  </div>
</template>
