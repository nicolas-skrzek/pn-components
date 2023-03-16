import {
  format,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  lastDayOfMonth,
  getDaysInMonth,
  getMonth,
  getYear,
  previousDay,
  nextDay,
  isEqual,
} from 'date-fns'

import type { Day } from 'date-fns'

import {
  DAY_OF_WEEK,
  DAY_NAME_LONG,
  DAY_NAME_SHORT,
  DAY_NAME_VERY_SHORT,
  DAY_OF_WEEK_SHORT_NUMBER,
  DAY_OF_YEAR_NUMBER,
  MONTH_NAME_LONG,
  MONTH_NAME_SHORT,
  MONTH_NUMBER_LONG,
  MONTH_NUMBER_SHORT,
} from '@/const/dates.const'

export class Dates {
  protected locale: string

  protected weekStartsOn: Day

  protected currentDate: Date

  protected internalDaysOfWeek: Date[]

  constructor(locale: string = '', weekStartsOn: boolean = false) {
    this.locale = locale
    this.weekStartsOn = weekStartsOn ? DAY_OF_WEEK.monday : DAY_OF_WEEK.sunday
    this.currentDate = new Date()
    this.internalDaysOfWeek = this.daysOfWeek(this.currentDate)
  }

  public daysName = (): string[] => this.internalDaysOfWeek.map((day) => format(day, DAY_NAME_LONG))

  public daysNameShort = (): string[] => this.internalDaysOfWeek.map((day) => format(day, DAY_NAME_SHORT))

  public daysNameExtraShort = (): string[] => this.internalDaysOfWeek.map((day) => format(day, DAY_NAME_VERY_SHORT))

  public firtDayOfWeek = () => this.weekStartsOn

  public daysOfWeek = (date: Date): Date[] => eachDayOfInterval({
    start: startOfWeek(date, { weekStartsOn: this.weekStartsOn }),
    end: endOfWeek(date, { weekStartsOn: this.weekStartsOn }),
  })

  public dayOfWeek = (date: Date): number => Number(format(date, DAY_OF_WEEK_SHORT_NUMBER))

  public numberDaysInMonth = (date: Date): number => getDaysInMonth(date)

  public daysInterval = (start: Date, end: Date): Date[] => eachDayOfInterval({ start, end })

  public lastDayOfMonth = (date: Date): Date => lastDayOfMonth(date)

  public previousDay = (date: Date, day: number): Date => previousDay(date, day)

  public previousDayNumber = (date: Date, day: number): string => format(previousDay(date, day), DAY_OF_YEAR_NUMBER)

  public nextDay = (date: Date, day: Day): Date => nextDay(date, day)

  public nextDayNumber = (date: Date, day: Day): string => format(nextDay(date, day), DAY_OF_YEAR_NUMBER)

  public monthName = (date: Date): string => format(date, MONTH_NAME_LONG)

  public monthNameShort = (date: Date): string => format(date, MONTH_NAME_SHORT)

  public dayOfMonth = (date: Date): string => format(date, DAY_OF_YEAR_NUMBER)

  public month = (date: Date): number => getMonth(date)

  public monthNumber = (date: Date): string => format(date, MONTH_NUMBER_LONG)

  public monthNumberShort = (date: Date): string => format(date, MONTH_NUMBER_SHORT)

  public year = (date: Date): number => getYear(date)

  public isSame = (firstDate: Date, secondDate: Date): boolean => isEqual(firstDate.setHours(0, 0, 0, 0), secondDate.setHours(0, 0, 0, 0))
}
