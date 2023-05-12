<script setup lang="ts">
import { computed, ref } from 'vue'

interface IControls {
  type: string;
  label: string;
  value?: any;
  options?: number[] | string[]
}

interface IProps {
  controls?: IControls[];
  hasMode?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
    controls: undefined,
    disabled: false,
})

const emit = defineEmits(['update:controls', 'update:mode'])

const internalControls = computed({
    get: () => props.controls,
    set: (value: any) => {
      emit('update:controls', value)
    },
})

const mode = ref('light')

const onChangeMode = () => {
  emit('update:mode', mode)
}
</script>
<template>
  <div class="controls">
    <div class="controls-view" :class="[mode]">
      <slot />
    </div>
    <div v-if="controls" class="controls-list">
      <div v-if="hasMode" class="controls-input">
        <label for="input_mode">
          Mode
        </label>
        <select v-model="mode" name="input_mode" @change="onChangeMode()">
          <option value="light">
            Light
          </option>
          <option value="dark">
            Dark
          </option>
        </select>
      </div>
      <template v-for="(control, i) in internalControls" :key="i">
        <div v-if="control.type === 'text'" class="controls-input">
          <label :for="`input_${i}`">
            {{ control.label }}
          </label>
          <input v-model="control.value" type="text" :name="`input_${i}`">
        </div>
        <div v-if="control.type === 'boolean'" class="controls-input">
          <label :for="`input_${i}`">
            {{ control.label }}
          </label>
          <input v-model="control.value" type="checkbox" :name="`input_${i}`">
        </div>
        <div v-if="control.type === 'number'" class="controls-input">
          <label :for="`input_${i}`">
            {{ control.label }}
          </label>
          <input v-model="control.value" type="number" :name="`input_${i}`">
        </div>
        <div v-if="control.type === 'select'" class="controls-input">
          <label :for="`input_${i}`">
            {{ control.label }}
          </label>
          <select v-model="control.value" :name="`input_${i}`">
            <template v-for="option in control.options" :key="`${i}_key_${option}`">
              <option :value="option">
                {{ option }}
              </option>
            </template>
          </select>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss">
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
      background-color: #44403c;
    }
  }
  .controls-list {
    flex-direction: column;
    gap: 8px;
    border-top: 1px solid rgba(#292524, 0.3);
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
