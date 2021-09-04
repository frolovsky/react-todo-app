import { NavCalendarGridProps} from './NavCalendarGrid.types';
import { APP_BORDER_RADIUS } from '../../../common/styles/_variables';
import styled from 'styled-components';

const CalendarBody = styled.div<{ columns: number; rows: number }>`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  grid-template-rows: repeat(${props => props.rows}, 50px);
  align-items: center;
`;

const CalendarCell = styled.span`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  &:hover {
    background-color: #eee;
  }
  
  &.active {
    background-color: #eee;
  }
`;

const CalendarHeader = styled.div<{ columns: number }>`
  display: inline-grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  width: 100%;
  border-top: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
  border-radius: ${APP_BORDER_RADIUS}px;
  margin-bottom: 10px;
`;

const CalendarHeaderText = styled.span`
  font-weight: bold;
  text-align: center;
  padding: 10px 0;
  border-right: 2px dashed #ccc;
  &:first-child {
    border-left: 2px dashed #ccc;
  }
`;

const NavCalendarGrid = ({ gridHeaders, columns, rows, items, setDate, date }: NavCalendarGridProps) => {
  const handleClickCell = (dayNumber: number) => {
    const date = String(new Date());
    const dateModify = date.replace(/[0-9]{2}/, String(dayNumber));
    setDate(new Intl.DateTimeFormat('en-GB').format(new Date(dateModify)));
  }

  const getCalendarBodyItems = () => {
    const content = [];
    const selectedDay = date.match(/\d{2}(?=\/)/);
    for (let i = 1; i <= items; i++) {
      const isActiveCell = i === Number(selectedDay);
      content.push(
        <CalendarCell
          key={i}
          onClick={() => handleClickCell(i)}
          className={isActiveCell ? 'active' : ''}
        >
          {i}
        </CalendarCell>
      );
    }
    return content;
  };

  return (
    <div>
      <CalendarHeader columns={columns}>
        { gridHeaders.map((header, i) => {
          return (
            <CalendarHeaderText key={i}>
              { header }
            </CalendarHeaderText>
          )
        })}
      </CalendarHeader>
      <CalendarBody columns={columns} rows={rows}>
        { getCalendarBodyItems() }
      </CalendarBody>
    </div>
  )
};

export default NavCalendarGrid;
