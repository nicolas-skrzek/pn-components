<script setup lang="ts">
import { defineComponent, ref } from 'vue'

export interface IPnMenuProps {
  disabled?: boolean;
  closeOnClickContent?: boolean;
}

defineComponent({
  name: 'PnMenu',
})

const props = withDefaults(defineProps<IPnMenuProps>(), {
    disabled: false,
    closeOnClickContent: true,
})

const emits = defineEmits(['open'])

const open = ref(false)

const toggleOpen = (): void => {
  if (!props.disabled) {
    open.value = !open.value
    emits('open', open)
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
