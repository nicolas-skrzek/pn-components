<script setup lang="ts">
import { ref } from 'vue'
import { PnCalendar } from '@/components'
import ControlsView from '@/view/controlsView.vue'
import { NUMBER_WEEKS } from '@/components/PnCalendar/PnCalendar.const'
import type { CalendarEvent } from '@/components/PnCalendar/PnCalendar.types'

const events: CalendarEvent[] = [
  {
    date: new Date(),
    time: '12:30',
    label: 'Test',
    style: 'background-color: #0ea5e9; color: #f0f9ff',
  },
  {
    date: new Date(),
    time: '14:30',
    label: 'Conf',
    style: 'background-color: #1e40af; color: #f0f9ff',
  },
  {
    date: new Date(2023, 2, 17),
    label: 'Free day',
    style: 'background-color: #9333EA; color: #FAF5FF',
  },
  {
    date: new Date(2023, 2, 18),
    time: '14:30',
    label: 'Grasse mat',
    style: 'background-color: #f59e0b; color: #f0f9ff',
  },
]
const props = ref([
  { label: 'isMondayFirst', type: 'boolean', value: true },
  { label: 'date', type: 'text' },
  { label: 'weekPerMonth', type: 'number', value: NUMBER_WEEKS },
])

</script>

<template>
  <controls-view v-model:controls="props">
    <pn-calendar :is-monday-first="(props[0].value as any)" :date="(props[1].value as any)" :week-per-month="(props[2].value as any)" :events="events">
      test
    </pn-calendar>
  </controls-view>
</template>
