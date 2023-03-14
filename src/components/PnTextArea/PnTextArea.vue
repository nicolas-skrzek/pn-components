<script setup lang="ts">
import { defineComponent } from 'vue'
import { sizeValidator, statusValidator } from '@/utils/validator.utils'
</script>

<script lang="ts">
import PnInputDetail from '../PnInputDetail/PnInputDetail.vue'

export default defineComponent({
  name: 'PnTextArea',
  components: { PnInputDetail },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'medium',
      validator: sizeValidator,
    },
    status: {
      type: String,
      default: 'primary',
      validator: statusValidator,
    },
    placeholder: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    rows: {
      type: Number,
      default: 5,
    },
    value: {
      type: String,
      default: '',
    },
    displayDetails: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['value'],
  computed: {
    counter() {
      return this.value.length
    },
    text: {
      get() {
        return this.value
      },
      set(v: String) {
        this.$emit('value', v)
      },
    },
  },
})
</script>

<template>
  <div :class="['input-field', `input-field-${status}`]">
    <textarea v-model="text" class="form-input" :placeholder="placeholder" :name="name" :rows="rows" />
  </div>
  <pn-input-detail v-if="displayDetails" :counter="counter" />
</template>
