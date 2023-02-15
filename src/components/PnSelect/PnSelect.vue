<script setup lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import { sizeValidator, statusValidator } from '@/utils/validator.utils'
import type { PnColor } from '@/types/color/type'
import type { listItem } from '@/PnListItem/PnListItem.vue'
</script>

<script lang="ts">
import PnMenu from '@/components/PnMenu/PnMenu.vue'
import PnTextField from '@/components/PnTextField/PnTextField.vue'
import PnCard from '@/components/PnCard/PnCard.vue'
import PnList from '@/components/PnList/PnList.vue'

export default defineComponent({
  name: 'PnSelect',
  components: {
    PnMenu, PnTextField, PnCard, PnList,
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'medium',
      validator: sizeValidator,
    },
    status: {
      type: String as PropType<PnColor>,
      default: 'primary',
      validator: statusValidator,
    },
    placeholder: {
      type: String,
      default: '',
    },
    items: {
      type: Array as PropType<listItem[]>,
      required: true,
    },
  },
  emits: ['open'],
  data() {
    return {
      open: false,
    }
  },
  methods: {
    toggleOpen() {
      this.open = !this.open
      this.$emit('open', this.open)
    },
  },
})
</script>

<template>
  <div class="pn-select">
    <pn-menu :disabled="disabled" :close-on-click-content="!multiple">
      <template #activator>
        <pn-text-field :disabled="disabled" :size="size" :status="status" :placeholder="placeholder" readonly />
      </template>
      <template #content>
        <PnCard>
          <template #content>
            <pn-list :items="items" />
          </template>
        </PnCard>
      </template>
    </pn-menu>
  </div>
</template>
