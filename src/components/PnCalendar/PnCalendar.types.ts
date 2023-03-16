export interface CalendarEvent {
  date: Date;
  label: string;
  time?: string;
  style?: string;
}

export interface DayFormated {
  date: Date;
  day: string;
  timestamp: number;
  class?: string[] | undefined;
  events?: CalendarEvent[] | any[] | undefined;
}
