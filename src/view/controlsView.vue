<script setup lang="ts">
import { computed } from 'vue'
import { PnCheckbox, PnSelect, PnTextField } from '@/components'
import type { PnMode } from '@/types'

interface IControls {
  label: string;
  options?: any[];
  type: string;
  value?: any;
}

interface IProps {
  controls?: IControls[];
  hasMode?: boolean;
  mode?: PnMode;
  title?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  controls: undefined,
  disabled: false,
  mode: 'light',
  title: '',
})

const emit = defineEmits(['update:controls', 'update:mode'])

const internalControls = computed({
  get: () => props.controls,
  set: (value: any) => {
    emit('update:controls', value)
  },
})
const internalMode = computed({
  get: () => props.mode,
  set: (value: PnMode) => {
    emit('update:mode', value)
  },
})
</script>

<template>
  <div class="flex flex-col flex-1 justify-stretch w-full h-full">
    <h2 v-if="title" class="text-3xl font-semibold p-4">
      {{ title }}
    </h2>
    <div class="flex flex-auto items-center justify-center p-4 dark:bg-stone-800" :class="[internalMode]">
      <slot />
    </div>
    <div v-if="controls" class="flex flex-col gap-2 p-4 h-1/4 overflow-y-auto border border-solid border-stone-400">
      <label v-if="hasMode" class="flex w-full">
        <span>Mode</span>
        <pn-select
          v-model="internalMode"
          class="w-1/4"
          name="input_mode"
          :items="['light', 'dark']"
        />
      </label>
      <template v-for="(control, i) in internalControls" :key="i">
        <label v-if="control.type === 'text' || control.type === 'number'" class="grid grid-cols-2 items-center justify-start w-full">
          <span>{{ control.label }}</span>
          <pn-text-field v-model="control.value" :name="`input_${i}`" />
        </label>
        <label v-if="control.type === 'boolean'" class="grid grid-cols-2 items-center justify-start w-full">
          <span>{{ control.label }}</span>
          <pn-checkbox v-model="control.value" :name="`input_${i}`" />
        </label>
        <label v-if="control.type === 'select' && control?.options?.length" class="grid grid-cols-2 items-center justify-start w-full">
          <span>{{ control.label }}</span>
          <pn-select
            v-model="control.value"
            class="ml-4 rounded py-px px-1.5"
            :items="control.options"
            :name="`input_${i}`"
          />
        </label>
      </template>
    </div>
  </div>
</template>
