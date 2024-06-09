"use client";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import DatePicker from "react-datepicker";
import { PaymentRequestCard } from "./PaymentRequestCard";

const payments = [
  {
    name: "Harshika",
    dueDate: "Sat, 20 Apr 2024",
    paymentDate: "-",
    amount: "$8 crore",
    status: "To be done",
  },
  {
    name: "Suraj",
    dueDate: "Fri, 19 Apr 2024",
    paymentDate: "-",
    amount: "$70.03",
    status: "Pending",
  },
  {
    name: "Sambodhii",
    dueDate: "Wed, 09 Apr 2024",
    paymentDate: "Tue, 19 May 2024",
    amount: "$30 billion",
    status: "Completed",
  },
  {
    name: "Sneha",
    dueDate: "Mon, 23 Mar 2024",
    paymentDate: "Thurs, 27 Mar 2024",
    amount: "$380.57",
    status: "Completed",
  },
];

const tableHeading = [
  "Name",
  "Due Date",
  "Date of payment",
  "Amount",
  "Status",
];

const statusColors: any = {
  "To be done": "bg-red-200 text-red-800",
  Pending: "bg-yellow-200 text-yellow-800",
  Completed: "bg-green-200 text-green-800",
};

export function Payout() {
  const defaultStartDate = new Date("2024-08-01");
  const defaultEndDate = new Date("2024-10-01");
  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(defaultEndDate);
  const [showCard, setShowCard] = useState(true);

  const handleChange = ([newStartDate, newEndDate]) => {
    setStartDate(newStartDate);
    setEndDate(newEndDate);
  };

  return (
    <div>
      {showCard && (
        <div className="w-screen h-screen top-0 left-0 bg-white/[70%] z-50 absolute flex justify-center items-center">
          <PaymentRequestCard setShowCard={setShowCard} />
        </div>
      )}
      <div className="w-full flex-col flex gap-8 rounded-[40px] bg-white  py-10 px-7">
        {/* page-title | search-bar | filter  */}
        <div className="w-full bg-white flex justify-between">
          {/* title */}
          <div>
            <p className="text-[#FF0000] font-semibold text-3xl">
              Transactions
            </p>
          </div>

          {/* search | filter */}
          <div className="flex mt-5 justify-center gap-6 items-center">
            {/* Search */}
            <div className="flex justify-center items-center rounded-lg p-2 border-[#8C89B4] border-[1px]">
              <input
                type="text"
                placeholder="Search for payments...."
                className="outline-none w-[350px]"
              />
              <button className=" cursor-pointer">
                <IoSearch fontSize={20} />
              </button>
            </div>

            {/* Date */}
            <div className="bg-white flex z-20 gap-1 justify-center items-center border-[#8C89B4] border-[1px] p-2 rounded-lg">
              <DatePicker
                selected={startDate}
                startDate={startDate}
                endDate={endDate}
                onChange={handleChange}
                excludeDates={[
                  new Date("2024-05-01"),
                  new Date("2024-02-01"),
                  new Date("2024-01-01"),
                  new Date("2024-11-01"),
                ]}
                dateFormat="MM/yyyy"
                placeholderText="Select a month other than the disabled months"
                showMonthYearPicker
                selectsRange
                className="bg-white outline-none"
              />
            </div>
          </div>
        </div>

        {/* Transaction table */}
        <div className="w-full">
          <table className="w-full overflow-hidden">
            {/* Heading */}
            <thead className="bg-[#ED1212]/[75%] font-normal rounded-xl text-white">
              <tr>
                {tableHeading.map((value, index) => {
                  return (
                    <th
                      key={index}
                      className="border border-white px-4 py-3 text-left"
                    >
                      <p className="text-xl font-normal">{value}</p>
                    </th>
                  );
                })}
              </tr>
            </thead>

            {/* Body */}
            <tbody className="text-[#282458]">
              {payments.map((payment, index) => (
                <tr
                  onClick={() => setShowCard(true)}
                  key={index}
                  className="cursor-pointer"
                >
                  <td className="px-4 py-2 text-start">{payment.name}</td>
                  <td className=" px-4 py-2 text-start">{payment.dueDate}</td>
                  <td className=" px-4 py-2 text-center">
                    {payment.paymentDate}
                  </td>
                  <td className=" px-4 py-2 text-center">{payment.amount}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`inline-block text-base w-2/3 text-center py-2 rounded ${
                        statusColors[payment.status]
                      }`}
                    >
                      {payment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
