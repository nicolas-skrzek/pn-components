<script setup lang="ts">
import { defineComponent } from 'vue'
import { Dates } from '@/utils/dates.utils'
import { getDaysInWeek } from './PnCalendar.utils'
import { NUMBER_WEEKS, FIRST_DAY_OF_MONTH } from './PnCalendar.const'

defineEmits(['date', 'click:day', 'click:event'])
</script>
<script lang="ts">

export default defineComponent({
  name: 'PnCalendar',
  props: {
    isMondayFirst: {
      type: Boolean,
      default: false,
    },
    date: {
      type: Date,
      default: new Date(),
    },
    events: {
      type: Array,
      default: () => [],
    },
    weekPerMonth: {
      type: Number,
      default: NUMBER_WEEKS,
    },
  },
  data() {
    const dates = new Dates('', this.isMondayFirst)

    return {
      dates,
    }
  },
  computed: {
    firtDayOfWeek() {
      return this.dates.firtDayOfWeek()
    },
    firstDayOfMonth() {
      return new Date(this.year, this.month, FIRST_DAY_OF_MONTH)
    },
    daysName() {
      return this.dates.daysNameShort()
    },
    month() {
      return this.dates.month(this.selectedDate)
    },
    monthName() {
      return this.dates.monthName(this.selectedDate)
    },
    year() {
      return this.dates.year(this.selectedDate)
    },
    numberDaysInMonth() {
      return this.dates.numberDaysInMonth(this.firstDayOfMonth)
    },
    firstDayOfWeekOfMonth() {
      return this.dates.dayOfWeek(this.firstDayOfMonth)
    },
    lastDayOfWeekOfMonth() {
      return this.dates.dayOfWeek(new Date(this.year, this.month, this.numberDaysInMonth))
    },
    lastDayOfMonth() {
      return this.dates.lastDayOfMonth(this.firstDayOfMonth)
    },
    selectedDate: {
      get() {
        return this.date
      },
      set(date: Date) {
        this.$emit('date', date)
      },
    },
    weeks() {
      const weeks = []
      for (let i = 1; i <= this.weekPerMonth; i += 1) {
        const days = getDaysInWeek(
          this.dates,
          this.firstDayOfWeekOfMonth,
          this.firtDayOfWeek,
          this.lastDayOfWeekOfMonth,
          this.numberDaysInMonth,
          this.year,
          this.month,
          i,
          this.events,
        )

        weeks.push({ id: i, days })
      }

      return weeks
    },
  },
})
</script>

<template>
  <div class="calendar">
    <div class="calendar-header">
      <div v-for="day in daysName" :key="day" class="calendar-day">
        {{ day }}
      </div>
    </div>
    <div class="calendar-weeks">
      <div v-for="week in weeks" :key="week.id" class="calendar-week">
        <div
          v-for="day in week.days"
          :key="day.timestamp"
          :class="['calendar-day', ...(day.class as [])]"
          aria-hidden="true"
          @click="$emit('click:day', day)"
          @keyDown="$emit('click:day', day)"
        >
          <div class="calendar-day-label">
            {{ day.day }}
          </div>
          <template v-if="day?.events?.length">
            <div
              v-for="(event, i) in day.events"
              :key="day.timestamp + '_event_' + i"
              class="calendar-event"
              :style="event.style"
              :data-date="event.date"
              aria-hidden="true"
              @click="$emit('click:event', event)"
              @keyDown="$emit('click:event', event)"
            >
              <div v-if="event?.time" class="calendar-event-time">
                {{ event.time }}
              </div>
              <div class="calendar-event-label">
                {{ event.label }}
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
