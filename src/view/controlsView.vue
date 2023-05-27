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
}

const props = withDefaults(defineProps<IProps>(), {
  controls: undefined,
  disabled: false,
  mode: 'light',
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
  <div class="controls">
    <div class="controls-view" :class="[internalMode]">
      <slot />
    </div>
    <div v-if="controls" class="controls-list">
      <div v-if="hasMode" class="controls-input">
        <label for="input_mode">
          Mode
        </label>
        <pn-select
          v-model="internalMode"
          name="input_mode"
          :items="['light', 'dark']"
        />
      </div>
      <template v-for="(control, i) in internalControls" :key="i">
        <div v-if="control.type === 'text' || control.type === 'number'" class="controls-input">
          <label :for="`input_${i}`">
            {{ control.label }}
          </label>
          <pn-text-field v-model="control.value" :name="`input_${i}`" />
        </div>
        <div v-if="control.type === 'boolean'" class="controls-input">
          <label :for="`input_${i}`">
            {{ control.label }}
          </label>
          <pn-checkbox v-model="control.value" :name="`input_${i}`" />
        </div>
        <div v-if="control.type === 'select' && control?.options?.length" class="controls-input">
          <label :for="`input_${i}`">
            {{ control.label }}
          </label>
          <pn-select
            v-model="control.value"
            :items="control.options"
            :name="`input_${i}`"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.controls {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  width: 100%;
  height: 100%;
  flex: 1 1 0%;

  .controls-view,
  .controls-list  {
    display: flex;
    justify-content: center;
    padding: 1rem;
  }

  .controls-view {
    align-items: center;
    flex: 1 1 auto;

    &.dark {
      background-color: var(--pn-color-stone-800);
    }
  }
  .controls-list {
    flex-direction: column;
    gap: 8px;
    border-top: 1px solid var(--pn-color-stone-400);
    height: 25%;
    overflow-y: auto;

    .controls-input {
      display: flex;

      > label {
        width: 25%;
      }

      > input,
      > select {
        margin-left: 1rem;
        width: 75%;
        border-style: solid;
        border-radius: 4px;
        padding: 1px 6px;
      }
    }
  }
}
</style>
