"use client"
import { useState } from 'react';
import InputField from './InputField';
import DropdownMenu from './Dropdown';
import TimePicker from './TimeFields';
const YourComponent = (props:any) => {
  console.log(props)
  console.log("object")
  const options=["Wedding","Birthday","Lunch Party","Dance party"]
  const venueOptions=["Central hall","Daisy hall","lotus banquet hall","Park hall"]
  const [eventType,setEventType]=useState(props?.eventType||"");
  const [venue,setVenue]=useState(props?.venue||"");
  const [toTime,settoTime]=useState("");
  const [title,setTitle]=useState(props?.title||"");
  
  const [fromTime,setFromTime]=useState("");
  const [startDate,setStartDate]=useState(props?.startDate||"");
  const [endDate,setEndDate]=useState(props?.endDate||"");



  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
    fromDuration: '',
    toDuration: '',
    eventType: '',
    venue: '',
    eventTitle: '',
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
const handleSelect=(value:string)=>{
setEventType(value);
}
const handleVenueSelect=(value:string)=>{
  setVenue(value)
}
const handleToTimeChange=(value:string)=>{
settoTime(value);
}
const handleFromTimeChange=(value:string)=>{
  setFromTime(value);
  }
  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(formData);
    // Your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg pr-10">
 <div className="mb-4">
        <label htmlFor="eventTitle" className="block text-gray-700 font-bold mb-2">
          Event Title
        </label>
        <input
          type="text"
          id="eventTitle"
          name="eventTitle"
          value={title}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
     <div className='flex justify-between'>
      <div className="mb-4 ">
      <label htmlFor="startDate" className="block text-gray-700 font-bold mb-2">
          Event Type
        </label>
       <DropdownMenu options={options} onSelect={handleSelect} value={eventType||""}/>
       
      </div>
      <div className="mb-4">
      <label htmlFor="startDate" className="block text-gray-700 font-bold mb-2">
          Venue 
        </label>
       <DropdownMenu options={venueOptions} onSelect={handleVenueSelect} value={venue||""}/>
       
      </div>
      </div>
        <div className='flex justify-between'>
       
      <div className="mb-4">
      <label htmlFor="startDate" className="block text-gray-700 font-bold mb-2">
         Start Date
        </label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={startDate}
          onChange={(e)=>{setStartDate(e.target.value)}}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="endDate" className="block text-gray-700 font-bold mb-2">
          End Date
        </label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={endDate}
          onChange={(e)=>{setEndDate(e.target.value)}}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      </div>
      <div className='flex justify-between gap-3'>
        
      <div className="mb-4">
        <label htmlFor="fromDuration" className="block text-gray-700 font-bold mb-2">
        From
        </label>
        <TimePicker handleChange={handleFromTimeChange} value={props?.fromTime}/>
      </div>

   
      <div className="mb-4">
        <label htmlFor="toDuration" className="block text-gray-700 font-bold mb-2">
        To
        </label>
        <TimePicker handleChange={handleToTimeChange} value={props?.toTime}/>
      </div>

</div>
      
   
      

      


      <div className="mb-4 justify-center flex gap-3 mt-4">
      { props?.edit?
      <div>
         <button
      type="submit"
      className="bg-[#f94444] mx-3 hover:bg-[#FD0123] text-white text-center font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
   Delete
    </button>
    <button
      type="submit"
      className="bg-[#f94444] mx-3 hover:bg-[#FD0123] text-white text-center font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
   Save Changes
    </button>
      </div>
      :
      
      
      <button
      type="submit"
      className="bg-[#f94444] mx-3 hover:bg-[#FD0123] text-white text-center font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
   Submit
    </button>}
       
      </div>
    </form>
  );
};

export default YourComponent;
