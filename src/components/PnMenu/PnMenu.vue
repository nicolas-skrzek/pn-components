<script setup lang="ts">
defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  closeOnClickContent: {
    type: Boolean,
    default: true,
  },
})
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PnMenu',
  emits: ['open'],
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggleOpen() {
      if (!this.disabled) {
        this.open = !this.open
        this.$emit('open', this.open)
      }
    },
    eventCloseClickOnContent() {
      if (this.closeOnClickContent) {
        this.toggleOpen()
      }
    },
  }
})
</script>

<template>
    <div class="pn-menu">
        <div class="pn-menu-activator" @click="toggleOpen()">
          <slot name="activator" />
        </div>
        <div v-if="open" class="pn-menu-content" @click="eventCloseClickOnContent()">
          <slot name="content" />
        </div>
    </div>
</template>
