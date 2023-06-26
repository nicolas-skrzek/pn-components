<script setup lang="ts">
import { computed, defineComponent } from 'vue'

export interface IPnMenuProps {
  disabled?: boolean;
  closeOnClickContent?: boolean;
  modelValue: boolean;
}

defineComponent({
  name: 'PnMenu',
})

const props = withDefaults(defineProps<IPnMenuProps>(), {
  disabled: false,
  closeOnClickContent: true,
  modelValue: false,
})

const emits = defineEmits(['update:modelValue'])

const open = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emits('update:modelValue', value),
})

const eventOpenContent = (): void => {
  if (!props.disabled) {
    open.value = true
  }
}

const eventCloseContent = (): void => {
  if (!props.disabled && props.closeOnClickContent) {
    open.value = false
  }
}
</script>

<template>
  <div class="pn-menu">
    <div
      v-click-outside="() => eventCloseContent()"
      class="pn-menu-activator"
      aria-hidden="true"
      @click="eventOpenContent()"
      @keyup.enter="eventOpenContent()"
      @keyup.esc="eventCloseContent()"
    >
      <slot name="activator" />
    </div>
    <div
      v-if="open"
      class="pn-menu-content"
      aria-hidden="true"
      @click="eventCloseContent()"
      @keyup.enter="eventCloseContent()"
    >
      <slot name="content" />
    </div>
  </div>
</template>
