"use client"

import Calendar from "@/components/dashboard/calendar/Calendar"
import CustomCalendar from "@/components/dashboard/calendar/CustomCalendar"

export default function CalendarPage() {

    return (


        <div className="bg-white">
                  
            <CustomCalendar year={2024}></CustomCalendar>

        </div>
    )
}