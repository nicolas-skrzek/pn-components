<script setup lang="ts">
import {
  computed,
  defineComponent,
  onBeforeMount,
  onUnmounted,
  ref,
} from 'vue'

import type { Ref } from 'vue'

export interface IPnMenuProps {
  disabled?: boolean;
  closeOnClickActivator?: boolean;
  closeOnClickContent?: boolean;
  modelValue: boolean;
}

defineComponent({
  name: 'PnMenu',
})

const props = withDefaults(defineProps<IPnMenuProps>(), {
  disabled: false,
  closeOnClickActivator: true,
  closeOnClickContent: true,
  modelValue: false,
})

const emits = defineEmits(['update:modelValue'])

const open = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emits('update:modelValue', value),
})

const menuActivator: Ref<HTMLElement | null> = ref(null)
const menuContent: Ref<HTMLElement | null> = ref(null)

const eventCloseContent = (): void => {
  if (open.value) {
    open.value = false
  }
}

const clickEvent = (event: MouseEvent) => {
  if (props.disabled) {
    return
  }

  const target = event.target as HTMLElement

  if (!open.value && !props.disabled && menuActivator?.value?.contains(target)) {
    open.value = true
  }

  if (
    open.value
    && (
      (props.closeOnClickContent && (menuContent?.value?.contains(target) && !menuActivator?.value?.contains(target)))
      || (props.closeOnClickActivator && (!menuContent?.value?.contains(target) && menuActivator?.value?.contains(target)))
      || (!menuContent?.value?.contains(target) && !menuActivator?.value?.contains(target))
    )
  ) {
    open.value = false
  }
}

onBeforeMount(() => {
  document.addEventListener('click', clickEvent)
})

onUnmounted(() => {
  document.removeEventListener('click', clickEvent)
})
</script>

<template>
  <div class="pn-menu">
    <div
      ref="menuActivator"
      class="pn-menu-activator"
      aria-hidden="true"
      @keyup.esc="eventCloseContent()"
    >
      <slot name="activator" />
    </div>
    <div
      v-if="open"
      ref="menuContent"
      class="pn-menu-content"
      aria-hidden="true"
      @keyup.enter="eventCloseContent()"
    >
      <slot name="content" />
    </div>
  </div>
</template>
