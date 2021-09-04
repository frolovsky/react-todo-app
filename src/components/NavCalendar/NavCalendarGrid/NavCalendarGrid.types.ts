export interface NavCalendarGridProps {
  rows: number;
  columns: number;
  items: number;
  gridHeaders: string[];
  setDate: (date: string) => void;
  date: string;
}
