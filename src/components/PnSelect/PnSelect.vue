<script setup lang="ts">
import {
  defineComponent, computed, ref,
} from 'vue'
import { selectedOptions, getOptionValue, getOptionLabel } from './PnSelect.utils'
import {
  PnMenu, PnTextField, PnIcon, PnList, PnListItem,
} from '@/components'

export interface IPnSelectPros {
  clearable?: boolean;
  disabled?: boolean;
  items: any[];
  modelValue?: any | any[];
  multiple?: boolean;
  placeholder?: string;
}

defineComponent({
  name: 'PnSelect',
})

const emits = defineEmits(['update:modelValue'])

const props = withDefaults(defineProps<IPnSelectPros>(), {
  clearable: false,
  disabled: false,
  modelValue: undefined,
  multiple: false,
  placeholder: undefined,
})

const internalValue = computed({
  get: (): any | any[] => props.modelValue,
  set: (value: any | any[]) => emits('update:modelValue', value),
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

const unseletOption = (opt: any): any[] => internalValue.value.filter((item: any) => getOptionValue(item) !== getOptionValue(opt))

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
  <div class="pn-select" :class="{ clearable, disabled, multiple }">
    <pn-menu v-model="isOpen" :disabled="disabled" :close-on-click-content="!multiple">
      <template #activator>
        <pn-text-field class="readonly:cursor-pointer" :disabled="disabled" :placeholder="placeholder" :readonly="!disabled">
          <div v-if="options.length" class="form-input readonly:cursor-pointer">
            <template v-for="(option, i) in options" :key="i">
              <span class="pn-select-tag"
                :class="{
                  'flex': multiple,
                  'items-center': multiple,
                  'justify-center': multiple,
                  'py-0.5': multiple,
                  'px-3': multiple,
                  'm-0.5': multiple,
                  'rounded-sm': multiple,
                  'bg-stone-200': multiple,
                  'pl-0.5': clearable,
                  }">
                <span class="pn-select-tag-text">{{ getOptionLabel(option) }}</span>
                <pn-icon
                v-if="isClearable && multiple"
                class="pn-select-tag-remove"
                :class="{
                  'text-stone-400': multiple,
                  'hover:text-stone-500': multiple,
                  'pl-1': clearable,
                  }"
                name="cancel"
                @click="selectOption(option)" />
              </span>
            </template>
          </div>
          <template #append>
            <div class="pn-select-action flex items-center justify-between pl-2">
              <pn-icon v-if="isClearable && !multiple" name="close" @click.prevent.stop="handleClear()" />
              <pn-icon v-if="isOpen" name="expand_less" />
              <pn-icon v-else name="expand_more" />
            </div>
          </template>
        </pn-text-field>
      </template>
      <template #content>
        <div class="pn-card min-w-full">
          <div class="p-0.5">
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
