import { getUnixTime } from 'date-fns'
// import type { Dates } from '@/utils/dates.utils'
import { FIRST_DAY_OF_MONTH, OTHER_DAYS } from './PnCalendar.const'
import type { DayFormated, CalendarEvent } from './PnCalendar.types'

export const buildDay = (dates: any, date: Date, type: string, events: CalendarEvent[], dayOfWeek: number = 0): DayFormated => {
  const eventsOfday = events?.filter((event) => dates.isSame(event.date, date)) || []

  if (type === 'previous') {
    const prevDate = dates.previousDay(date, dayOfWeek)

    return {
      date: prevDate,
      day: dates.previousDayNumber(date, dayOfWeek),
      timestamp: getUnixTime(prevDate),
      class: [type],
      events: eventsOfday,
    }
  }

  return {
    date,
    day: dates.dayOfMonth(date),
    timestamp: getUnixTime(date),
    class: [type],
    events: eventsOfday,
  }
}

export const getDaysInWeek = (
  dates: any,
  firstDayOfWeekOfMonth: number,
  firtDayOfWeek: number,
  lastDayOfWeekOfMonth: number,
  numberDaysInMonth: number,
  year: number,
  month: number,
  row: number,
  events: CalendarEvent[] | any[],
): DayFormated[] => {
  const prevDays: DayFormated[] = []
  let nextDays: DayFormated[] = []
  let days: DayFormated[] = []
  let endIndex = row * 7

  if (firstDayOfWeekOfMonth > firtDayOfWeek) {
    endIndex = endIndex - firstDayOfWeekOfMonth + firtDayOfWeek
  }

  const nbNextDay = endIndex - numberDaysInMonth

  let startIndex = endIndex - OTHER_DAYS

  if (startIndex < FIRST_DAY_OF_MONTH) {
    startIndex = FIRST_DAY_OF_MONTH
  }

  const startDate = new Date(year, month, startIndex)
  let endDate = new Date(year, month, endIndex)

  if (startIndex === FIRST_DAY_OF_MONTH && firstDayOfWeekOfMonth > firtDayOfWeek) {
    for (let i = firtDayOfWeek; i < firstDayOfWeekOfMonth; i += 1) {
      prevDays.push(buildDay(dates, startDate, 'previous', events, i))
    }
  }

  if (nbNextDay > 0) {
    const interval = dates.daysInterval(startDate, endDate).map((day: Date) => (buildDay(dates, day, 'next', events)))

    nextDays = nbNextDay < 7
      ? interval.slice(lastDayOfWeekOfMonth)
      : interval

    endIndex = numberDaysInMonth
  }

  if (endIndex <= numberDaysInMonth && nbNextDay < 7) {
    endDate = new Date(year, month, endIndex)
    days = dates.daysInterval(startDate, endDate).map((day: Date) => (buildDay(dates, day, 'current', events)))
  }

  return [...prevDays, ...days, ...nextDays]
}
