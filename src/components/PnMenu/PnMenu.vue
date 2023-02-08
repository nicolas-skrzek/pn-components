<script setup lang="ts">
import { sizeValidator, statusValidator } from "./../../utils/validator.utils";

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
      if (this.closeOnClickContent && !this.disabled) {
        this.open = !this.open
        this.$emit('open', this.open)
      }
    }
  }
})
</script>

<template>
    <div class="pn-menu">
        <div class="pn-menu-activator" @click="toggleOpen()">
          <slot name="activator" />
        </div>
        <div v-if="open" class="pn-menu-content">
          <slot name="content" />
        </div>
    </div>
</template>
