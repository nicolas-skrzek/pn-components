<script setup lang="ts">
import {
  defineComponent, computed, ref,
} from 'vue'
import { selectedOptions, getOptionValue, getOptionLabel } from './PnSelect.utils'
import type {
  PnColor, PnMode, SizeElement,
} from '@/types'
import {
  PnMenu, PnTextField, PnIcon, PnList, PnListItem,
} from '@/components'

export interface IPnSelectPros {
  clearable?: boolean;
  disabled?: boolean;
  items: any[];
  modelValue?: any;
  mode?: PnMode;
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
  clearable: false,
  disabled: false,
  modelValue: undefined,
  mode: 'light',
  multiple: false,
  placeholder: undefined,
  status: 'primary',
  size: 'medium',
})

const internalValue = computed({
  get: (): string => props.modelValue,
  set: (value: string) => emits('update:modelValue', value),
})

const isEmptyValue = computed(() => {
  if (props.multiple) {
    return !internalValue.value?.length
  }

  return internalValue.value === undefined
})

const isClearable = computed(() => (props.clearable && !isEmptyValue.value))

const isOpen = ref(false)

const isSelectOption = (opt: any): boolean => {
  if (Array.isArray(internalValue.value)) {
    const item = internalValue.value.find((el) => el.value === getOptionValue(opt))
    return item !== undefined
  }

  return internalValue.value === getOptionValue(opt)
}

const unseletOption = (opt: any): void => internalValue.value.filter((item) => getOptionValue(item) !== getOptionValue(opt))

const selectOption = (opt: any): void => {
  if (props.multiple && !isEmptyValue.value) {
    internalValue.value = isSelectOption(opt)
      ? unseletOption(opt)
      : [...internalValue.value, opt]
  }

  if (props.multiple && isEmptyValue.value) {
    internalValue.value = [opt]
  }

  if (!props.multiple) {
    internalValue.value = isSelectOption(opt) ? '' : opt
  }
}

const options = computed(() => selectedOptions(internalValue.value, props.multiple))

const handleClear = () => {
  const emptyValue: string | any[] | undefined = Array.isArray(internalValue.value) ? [] : undefined

  internalValue.value = emptyValue
}
</script>

<template>
  <div class="pn-select" :class="[mode, { clearable, disabled, multiple }]">
    <pn-menu v-model="isOpen" :disabled="disabled" :close-on-click-content="!multiple">
      <template #activator>
        <pn-text-field :disabled="disabled" :size="size" :status="status" :placeholder="placeholder" :readonly="!disabled">
          <div v-if="options.length" class="form-input">
            <template v-for="(option, i) in options" :key="i">
              <span class="pn-select-tag">
                <span class="pn-select-tag-text">{{ getOptionLabel(option) }}</span>
                <pn-icon v-if="isClearable && multiple" class="pn-select-tag-remove" name="cancel" @click="selectOption(option)" />
              </span>
            </template>
          </div>
          <template #append>
            <div class="pn-select-action">
              <pn-icon v-if="isClearable && !multiple" name="close" @click.prevent.stop="handleClear()" />
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
