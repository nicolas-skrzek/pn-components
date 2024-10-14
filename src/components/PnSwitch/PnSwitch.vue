<script setup lang="ts">
import { defineComponent, computed } from 'vue'

export interface IPnTextField {
  disabled?: boolean;
  modelValue?: boolean;
}

defineComponent({
  name: 'PnTextField',
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
  <label class="pn-switch flex items-center cursor-pointer" :class="{'cursor-not-allowed': disabled, 'opacity-40': disabled }">
    <div class="pn-switch-control inline-flex items-center justify-center relative" tabindex="0">
      <div class="pn-switch-control-background rounded-lg w-9 h-3.5" :class="{'bg-gray-400': !checked, 'bg-blue-500': checked}" />
      <div
        class="pn-switch-control-input flex items-center justify-center absolute rounded-full transition-transform"
        :class="{'-translate-x-2.5': !checked, 'translate-x-2.5': checked}"
      >
        <input class="opacity-0 w-0 h-0 absolute top-0 left-0" type="checkbox" tabindex="-1" :disabled="disabled" :checked="checked" @change="toggoleCheck()" />
        <div class="pn-switch-control-action bg-gray-50 rounded-full w-5 h-5 shadow-md" />
      </div>
    </div>
    <span class="pn-switch-label pl-4 text-gray-600 dark:text-gray-50">
      <slot />
    </span>
  </label>
</template>
