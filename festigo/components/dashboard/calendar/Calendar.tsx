"use client"
import { useEffect,useState } from 'react'; 
import Paper from '@mui/material/Paper';
import { AppointmentModel, ViewState } from '@devexpress/dx-react-scheduler';
import { styled, alpha } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import {
  Scheduler,
  DayView,
  WeekView,
  Toolbar,
  MonthView,
  DateNavigator,
  
  TodayButton,
  ViewSwitcher,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
const classes = {
  todayCell: 'todayCell',
  weekendCell: 'weekendCell',
  today: 'today',
  weekend: 'weekend',
};

const redTheme = {
  color: '#DC2626',
};

const StyledWeekViewTimeTableCell = styled(WeekView.TimeTableCell)(({ theme }) => ({
  [`&.${classes.todayCell}`]: {
    backgroundColor: alpha(redTheme.color, 0.1),
    '&:hover': {
      backgroundColor: alpha(redTheme.color, 0.14),
    },
    '&:focus': {
      backgroundColor: alpha(redTheme.color, 0.16),
    },
  },
  [`&.${classes.weekendCell}`]: {
    backgroundColor: alpha(theme.palette.action.disabledBackground, 0.04),
    '&:hover': {
      backgroundColor: alpha(theme.palette.action.disabledBackground, 0.04),
    },
    '&:focus': {
      backgroundColor: alpha(theme.palette.action.disabledBackground, 0.04),
    },
  },
}));

const StyledWeekViewDayScaleCell = styled(WeekView.DayScaleCell)(({ theme }) => ({
  [`&.${classes.today}`]: {
    backgroundColor: alpha(redTheme.color, 0.16),
  },
  [`&.${classes.weekend}`]: {
    backgroundColor: alpha(theme.palette.action.disabledBackground, 0.06),
  },
}));









const schedulerData :Array<AppointmentModel>= [
  { startDate: new Date('2024-05-29T09:45:00'), endDate: new Date('2024-05-29T11:00:00'), title: 'Meeting' },
  { startDate: new Date('2024-05-30T12:00:00'), endDate:new Date( '2024-05-30T13:30:00'), title: 'Go to the gym' }
];


 const Calendar = ()=> {
  const router = useRouter();
  const [currentViewName,setCurrentViewName]=useState('Week')
  const [currentDate, setCurrentDate] = useState(Date.now);

  const handleCurrentDateChange = (newDate:any) => {
    setCurrentDate(newDate);
  };
  const handleCurrentViewNameChange = (newViewName:any) => {
    setCurrentViewName(newViewName);
  };

  const TimeTableCell = (props:WeekView.TimeTableCellProps) => {
    const { startDate ,onDoubleClick} = props;
   // const date = new Date(startDate);
      const handleDoubleClick=(e:any)=>{
      router.push('/');
     }
    if (startDate?.getDate() === new Date().getDate()) {
      return <StyledWeekViewTimeTableCell {...props} className={classes.todayCell} onDoubleClick={handleDoubleClick}/>;
    }  return <StyledWeekViewTimeTableCell {...props} onDoubleClick={handleDoubleClick}/>;
  };

  const DayScaleCell = (props:DayView.DayScaleCellProps) => {
    const { startDate, today ,} = props;
  
    if (today) {
      return <StyledWeekViewDayScaleCell {...props} className={classes.today} />;
    }  return <StyledWeekViewDayScaleCell {...props} />;
  };
  
  return (
    <div className=' w-full'>
    
    <Scheduler 
      data={schedulerData} rootComponent={}> 
   
      <ViewState
        currentDate={currentDate}
        defaultCurrentViewName='Week'
        currentViewName={currentViewName}
        onCurrentDateChange={handleCurrentDateChange}
        onCurrentViewNameChange={handleCurrentViewNameChange}

      />
      <DayView
        startDayHour={0}
        endDayHour={23}
        timeTableCellComponent={TimeTableCell}
        dayScaleCellComponent={DayScaleCell}
      />
       <WeekView
             startDayHour={0}
             endDayHour={24}
             timeTableCellComponent={TimeTableCell}
             dayScaleCellComponent={DayScaleCell}
          
          />
           <MonthView 
           
           displayName='calendar'
           />
       <Toolbar />
       <DateNavigator  />
          <TodayButton />
         <ViewSwitcher />
      <Appointments />
    </Scheduler>
 
  </div>

);
  }

  export default  Calendar;