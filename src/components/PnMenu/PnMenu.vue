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

const toggleOpen = (): void => {
  if (!props.disabled) {
    open.value = !open.value
  }
}

const eventCloseClickOnContent = (): void => {
  if (props.closeOnClickContent) {
    toggleOpen()
  }
}
</script>

<template>
  <div class="pn-menu">
    <div
      class="pn-menu-activator"
      aria-hidden="true"
      @click="toggleOpen()"
      @keyup.enter="toggleOpen()"
    >
      <slot name="activator" />
    </div>
    <div
      v-if="open"
      class="pn-menu-content"
      aria-hidden="true"
      @click="eventCloseClickOnContent()"
      @keyup.enter="eventCloseClickOnContent()"
    >
      <slot name="content" />
    </div>
  </div>
</template>
