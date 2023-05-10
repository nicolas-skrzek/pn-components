<script setup lang="ts">
import { defineComponent } from 'vue'
import type { PnColor, IPnListItemProps, SizeElement } from '@/types'

import PnMenu from '@/components/PnMenu/PnMenu.vue'
import PnTextField from '@/components/PnTextField/PnTextField.vue'
import PnCard from '@/components/PnCard/PnCard.vue'
import PnList from '@/components/PnList/PnList.vue'

export interface IPnSelectPros {
  disabled?: boolean;
  items: IPnListItemProps[];
  multiple?: boolean;
  placeholder?: string;
  size?: SizeElement;
  status?: PnColor | undefined;
}

defineComponent({
  name: 'PnSelect',
})

withDefaults(defineProps<IPnSelectPros>(), {
    disabled: false,
    multiple: false,
    placeholder: undefined,
    status: 'primary',
    size: 'medium',
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
