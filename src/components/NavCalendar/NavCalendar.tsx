import { NavCalendarProps } from './NavCalendar.types';
import { useEffect, useState } from 'react';
import { getDaysInMonth } from './helpers';
import styled from 'styled-components';
import { APP_BORDER_RADIUS } from '../../common/styles/_variables';
import NavCalendarGrid from './NavCalendarGrid/NavCalendarGrid';

const CalendarWrapper = styled.div`
  box-shadow: 0 0 4px rgba(255, 255, 255, .3);
  border-radius: ${APP_BORDER_RADIUS}px;
  padding: 20px;
  background-color: #fff;
`;

export default function NavCalendar (props: NavCalendarProps) {
  const [gridData, setGridData] = useState({ items: 1, rows: 1 });
  const gridHeaders = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  const dayInWeek = gridHeaders.length;

  useEffect(() => {
    const date = new Date();
    const days = getDaysInMonth(date.getMonth(), date.getFullYear());
    const rows =  Math.ceil(days / dayInWeek);
    setGridData({ items: days, rows });
  }, [dayInWeek]);

  return (
    <CalendarWrapper>
      <NavCalendarGrid
        rows={gridData.rows}
        columns={dayInWeek}
        items={gridData.items}
        gridHeaders={gridHeaders}
        setDate={props.setDate}
        date={props.date}
      />
    </CalendarWrapper>
  )
}
