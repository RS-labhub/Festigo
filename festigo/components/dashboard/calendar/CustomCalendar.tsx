import React, { useState } from 'react';
import ResuableModal from '../../common/Modal'
import { FaChevronLeft ,FaChevronRight} from "react-icons/fa6";
import EventForm  from '../../common/EventForm'
interface CustomCalendarProps {
  year: number;
}
const monthsValue = [
  { month: "January", idx: 0 },
  { month: "February", idx: 1 },
  { month: "March", idx: 2 },
  { month: "April", idx: 3 },
  { month: "May", idx: 4 },
  { month: "June", idx: 5 },
  { month: "July", idx: 6 },
  { month: "August", idx: 7 },
  { month: "September", idx: 8 },
  { month: "October", idx: 9 },
  { month: "November", idx: 10 },
  { month: "December", idx: 11 }
];


const getDaysInMonth = (month: number, year: number): number => {
  return new Date(year, month, 0).getDate();
};



interface Event {
  date: string; 
  title: string; 
  description?: string; 
  startDate?: string; 
  endDate?: string; 
  venue?: string;
  edit?:boolean;
  fromTime?:string;
  toTime?:string;
}
const  groupByStartDate=(arr: Event[])=>{
  const result: { [key: string]: Event[] } = {};
  arr.forEach(item => {
      const startDate = item.startDate;
      if (startDate) {
        const [year, month, day] = startDate.split('-');
        const monthDay = `${parseInt(month)}:${parseInt(day)}`;
        if (!result[monthDay]) {
            result[monthDay] = [];
        }
        result[monthDay].push(item);
      }
  });
  console.log(result)
  return result;
}
const organizedEvents: { [key: string]: Event[] } = {};

const sampleEvents: Event[] = [
  { date: '2024-05-15', title: 'Jazz\'s birthday', description: 'Description for Event 1', startDate: '2024-05-15', endDate: '2024-05-15', venue: 'Venue 1',fromTime:"11:00am",toTime:"11:40pm" },
  { date: '2024-05-15', title: 'Harpreet\'s wedding', description: 'Description for Event 1', startDate: '2024-06-15', endDate: '2024-06-15', venue: 'Venue 1',fromTime:"11:00am",toTime:"11:40pm"  },
  { date: '2024-05-22', title: 'Diane graduation party', description: 'Description for Event 2', startDate: '2024-06-22', endDate: '2024-06-22', venue: 'Venue 2',fromTime:"11:00am",toTime:"11:40pm"  },
  { date: '2024-05-28', title: 'Mira\'s wedding', description: 'Description for Event 3', startDate: '2024-05-28', endDate: '2024-05-28', venue: 'Venue 3',fromTime:"11:00am",toTime:"11:40pm"  },

  // Add more events as needed
];


const getFirstDayOfWeek = (month: number, year: number): number => {
  return new Date(year, month - 1, 1).getDay(); 
};

// Function to generate an array of dates for a month
const getDatesForMonth = (month: number, year: number): number[] => {
  const daysInMonth = getDaysInMonth(month, year);
  return Array.from({ length: daysInMonth }, (_, index) => index + 1);
};
const getCurrentMonth = () => {
  const currentDate = new Date();
  const currentMonthIndex = currentDate.getMonth();
  const months = [
    { month: "January", idx: 0 },
    { month: "February", idx: 1 },
    { month: "March", idx: 2 },
    { month: "April", idx: 3 },
    { month: "May", idx: 4 },
    { month: "June", idx: 5 },
    { month: "July", idx: 6 },
    { month: "August", idx: 7 },
    { month: "September", idx: 8 },
    { month: "October", idx: 9 },
    { month: "November", idx: 10 },
    { month: "December", idx: 11 }
  ];

  return months[currentMonthIndex];
};




const months = Array.from({ length: 12 }, (_, index) => index + 1); // Array of month numbers from 1 to 12
const iconStyle = { color: "red", fontSize: "2.5em",cursorStyle:"pointer"}


const CustomCalendar: React.FC<CustomCalendarProps> = ({ year }) => {
const [title,setTitle]=useState("Create an Event")
 const [currentMonth,setCurrentMonth]=useState(getCurrentMonth());
 const [modalOpen, setModalOpen] = useState(false);
 const [event,setEvent]=useState();
 const handleLeftClick=()=>{
  setCurrentMonth(monthsValue[(currentMonth.idx-1)%12]);
}
const handleRightClick=()=>{
  setCurrentMonth(monthsValue[(currentMonth.idx+1)%12]);
}
function getRandomColor():string {
  const colors = ["red", "green", "yellow", "blue","purple"]; 
  const randomIndex = Math.floor(Math.random() * (colors.length-1)); 
  
  return colors[randomIndex]; 
}
const OpenPopUp=(event?:any)=>{
  setModalOpen(true);
  if(event?.edit)setTitle("Edit your event")
  setEvent(event);
}

const dynamicClassName = `border border-dashed border-red-950 rounded-md m-2 bg-red-200 p-2 cursor-pointer`;
const totalDays = getDaysInMonth(currentMonth.idx + 1, year);
const firstDayOfWeek = getFirstDayOfWeek(currentMonth.idx + 1, year);
const totalCells = Math.ceil((totalDays + firstDayOfWeek) / 7) * 7;
  return (
   <>
  <ResuableModal
        open={modalOpen}
        setOpen={setModalOpen}
        title={title}
        content={EventForm} 
        contentProps={event} 
        
      />
    <div className="w-full h-full flex flex-col mb-9 relative">
      <div className='abolute object-contain'>
  <div className='w-[200px] h-[100px] flex justify-evenly items-center  '>
    <FaChevronLeft style={{...iconStyle,cursor: 'pointer' }} onClick={handleLeftClick}  />
    <div className='text-lg'>{currentMonth.month}</div>
    <FaChevronRight style={{...iconStyle,cursor: 'pointer' }} onClick={handleRightClick}/>
  </div>
  </div>
  <div className="grid grid-cols-7">
    {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day, index) => (
      <div key={index} className="p-2">{day}</div>
    ))}
  </div>
  
  <div className="flex-1 pr-12">
  <div className="grid grid-cols-7 grid-auto-rows-[1fr]">
    {/* Fill dates of the first week of the current month */}
    {[...Array(getFirstDayOfWeek(currentMonth.idx + 1, year))].map((_, index) => {
      const day = getDaysInMonth(currentMonth.idx, year) - getFirstDayOfWeek(currentMonth.idx + 1, year) + index + 1;
      return (
        <div key={index} className="empty border border-gray-300  text-gray-500 h-[120px] px-2">
          
          {groupByStartDate(sampleEvents)[`${(currentMonth.idx)+1}:${day}`]?.length>0?"yes":day
           
        }
        
        </div>
      );
    })}
    {/* Fill dates of the current month */}
    {[...Array(getDaysInMonth(currentMonth.idx + 1, year)).keys()].map((day:number, index) => (
      <div key={index + getFirstDayOfWeek(currentMonth.idx + 1, year)} className="date border border-gray-300 h-[120px] px-2"
     
      >

{groupByStartDate(sampleEvents)[`${(currentMonth.idx)+1}:${new String(day)}`]?.length>0?

groupByStartDate(sampleEvents)[`${currentMonth.idx + 1}:${ new String(day)}`]?.map((item, key) => (<div>
  {day+1}
  <p key={key} className={dynamicClassName}
onClick={()=>{OpenPopUp({...item,edit:true})}}
>{item?.title.slice(0,15)}</p>
</div>)) : <p className='cursor-pointer h-full' onClick={()=>{OpenPopUp({})}} >{day+1} </p> }
</div>
    ))}
    {/* Fill dates of the next month in the last row */}
    {[...Array(totalCells - totalDays - firstDayOfWeek).keys()].map((_, index) => {
  const day = index + 1;
  return (
    <div key={index + totalDays + firstDayOfWeek} className="empty border border-gray-300 text-gray-500 h-[120px] px-2">{day}</div>
  );
})}
  </div>
</div>
</div>
</>
  );
};

export default CustomCalendar;
