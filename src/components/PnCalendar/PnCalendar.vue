<script setup lang="ts">
import { defineComponent, computed } from 'vue'
import { Dates } from '@/utils/dates.utils'
import { getDaysInWeek } from './PnCalendar.utils'
import { NUMBER_WEEKS, FIRST_DAY_OF_MONTH } from './PnCalendar.const'
import type { DayFormated, CalendarEvent } from './PnCalendar.types'

export interface IPnCalendarProps {
    isMondayFirst?: boolean;
    date?: any;
    events?: CalendarEvent[] | any[];
    weekPerMonth?: number;
}

export interface WeeksType {
    id: number;
    days: DayFormated[];
}

defineComponent({
  name: 'PnCalendar',
})

const emits = defineEmits(['date', 'click:day', 'click:event'])

const props = withDefaults(defineProps<IPnCalendarProps>(), {
  isMondayFirst: false,
  date: new Date(),
  events: () => [],
  weekPerMonth: NUMBER_WEEKS,
})

const dates = new Dates('', props.isMondayFirst)

const selectedDate = computed({
  get: (): Date => props.date,
  set: (date: Date) => emits('date', date),
})

const firtDayOfWeek = computed(() => dates.firtDayOfWeek())
const month = computed(() => dates.month(selectedDate.value))
const year = computed(() => dates.year(selectedDate.value))
const firstDayOfMonth = computed(() => new Date(year.value, month.value, FIRST_DAY_OF_MONTH))
const daysName = computed(() => dates.daysNameShort())
const numberDaysInMonth = computed(() => dates.numberDaysInMonth(firstDayOfMonth.value))
const firstDayOfWeekOfMonth = computed(() => dates.dayOfWeek(firstDayOfMonth.value))
const lastDayOfWeekOfMonth = computed(() => dates.dayOfWeek(new Date(year.value, month.value, numberDaysInMonth.value)))

const weeks = computed((): WeeksType[] => {
  const internalweeks: WeeksType[] = []
  if (props?.weekPerMonth) {
    for (let i = 1; i <= props.weekPerMonth; i += 1) {
      const days = getDaysInWeek(
        dates,
        firstDayOfWeekOfMonth.value,
        firtDayOfWeek.value,
        lastDayOfWeekOfMonth.value,
        numberDaysInMonth.value,
        year.value,
        month.value,
        i,
        props.events,
      )

      internalweeks.push({ id: i, days })
    }
  }

  return internalweeks
})

</script>

<template>
  <div class="w-full h-full flex flex-col">
    <div class="calendar-header flex  border-l border-y border-solid border-gray-200">
      <div v-for="day in daysName" :key="day" class="calendar-day flex-1 font-semibold border-r border-solid border-gray-200 border-separate text-gray-700 p-1.5 text-center">
        {{ day }}
      </div>
    </div>
    <div class="calendar-weeks flex flex-col flex-1 border-l border-solid border-gray-200">
      <div v-for="week in weeks" :key="week.id" class="calendar-week flex flex-1">
        <div
          v-for="day in week.days"
          :key="day.timestamp"
          class="calendar-day flex-1 rounded-sm border-l border-b border-solid border-gray-200 border-separate text-gray-700 p-1.5 text-center"
          :class="[...(day.class as [])]"
          aria-hidden="true"
          @click="$emit('click:day', day)"
          @keyDown="$emit('click:day', day)"
        >
          <div class="calendar-day-label pt-2 pb-1 px-1.5 cursor-pointer">
            {{ day.day }}
          </div>
          <template v-if="day?.events?.length">
            <div
              v-for="(event, i) in day.events"
              :key="day.timestamp + '_event_' + i"
              class="calendar-event flex rounded-sm p-0.5 text-left text-xs mb-px cursor-pointer"
              :style="event.style"
              :data-date="event.date"
              aria-hidden="true"
              @click="emits('click:event', event)"
              @keyDown="emits('click:event', event)"
            >
              <div v-if="event?.time" class="calendar-event-time font-semibold">
                {{ event.time }}
              </div>
              <div class="calendar-event-label overflow-hidden text-ellipsis whitespace-nowrap w-full pl-1">
                {{ event.label }}
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
