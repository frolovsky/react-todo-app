import { NavCalendarGridProps} from './NavCalendarGrid.types';
import styled from 'styled-components';
import { APP_BORDER_RADIUS } from '../../../common/styles/config';

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
`;

const CalendarHeader = styled.div<{ columns: number }>`
  display: inline-grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  width: 100%;
  border-top: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
  border-radius: ${APP_BORDER_RADIUS}px;
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

const NavCalendarGrid = ({ gridHeaders, columns, rows, items }: NavCalendarGridProps) => {
  const getCalendarBodyItems = () => {
    const content = [];
    for (let i = 1; i <= items; i++) {
      content.push(<CalendarCell key={i}>{i}</CalendarCell>)
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
