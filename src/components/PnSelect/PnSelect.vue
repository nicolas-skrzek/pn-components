<script setup lang="ts">
import { defineComponent, computed, ref } from 'vue'
import type {
  PnColor, SizeElement,
} from '@/types'
import {
  PnMenu, PnTextField, PnIcon, PnList, PnListItem,
} from '@/components'

export interface IPnSelectPros {
  disabled?: boolean;
  items: any[];
  modelValue: any | null;
  multiple?: boolean;
  placeholder?: string;
  size?: SizeElement;
  status?: PnColor | undefined;
}

defineComponent({
  name: 'PnSelect',
})

const emits = defineEmits(['update:modelValue'])

const props = withDefaults(defineProps<IPnSelectPros>(), {
  disabled: false,
  multiple: false,
  placeholder: undefined,
  status: 'primary',
  size: 'medium',
})

const internalValue = computed({
  get: (): string => props.modelValue,
  set: (value: string) => emits('update:modelValue', value),
})

const getOptionValue = (opt: any) => (typeof opt === 'object' ? opt.value : opt)

const getOptionLabel = (opt: any) => (typeof opt === 'object' ? opt.label : opt)

const isSelectOption = (opt: any): boolean => internalValue.value === getOptionValue(opt)

const selectOption = (opt: any) => {
  if (isSelectOption(opt)) {
    internalValue.value = ''
  } else {
    internalValue.value = getOptionValue(opt)
  }
}

const selectedOption = computed(() => props.items.filter((item) => getOptionValue(item) === internalValue.value).reduce((acc, opt) => {
  acc.push(getOptionLabel(opt))
  return acc
}, []))

const isOpen = ref(false)
</script>

<template>
  <div class="pn-select" :class="{ disabled }">
    <pn-menu v-model="isOpen" :disabled="disabled" :close-on-click-content="!multiple">
      <template #activator>
        <pn-text-field :disabled="disabled" :size="size" :status="status" :placeholder="placeholder" :readonly="!disabled">
          <div class="form-input">
            <template v-for="(option, i) in selectedOption" :key="i">
              <span>{{ option }}</span>
            </template>
          </div>
          <template #append>
            <div class="pn-select-action">
              <pn-icon v-if="isOpen" name="expand_less" />
              <pn-icon v-else name="expand_more" />
            </div>
          </template>
        </pn-text-field>
      </template>
      <template #content>
        <div class="pn-card">
          <div class="pn-card-content">
            <pn-list>
              <template v-for="(item, i) in items" :key="`item-${i}`">
                <pn-list-item :disabled="disabled" :selected="isSelectOption(item)" link @click="selectOption(item)">
                  {{ getOptionLabel(item) }}
                </pn-list-item>
              </template>
            </pn-list>
          </div>
        </div>
      </template>
    </pn-menu>
  </div>
</template>
