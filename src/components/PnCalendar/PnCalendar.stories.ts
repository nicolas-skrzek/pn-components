import PnCalendar from './PnCalendar.vue'
import type { CalendarEvent } from './PnCalendar.types'

export default {
  title: 'Ponion Components/Calendar',
  component: PnCalendar,
}

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

const Template = (args: any) => ({
  components: { PnCalendar },
  data: () => ({
    selectedDate: new Date(),
    eventsDays: events,
  }),
  setup() {
    return { args }
  },
  template: `
  <pn-calendar v-bind="args" :date="selectedDate" :is-monday-first="true" :events="eventsDays"></pn-calendar>
  `,
})

export const Default = Template.bind({})
