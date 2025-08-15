import "./styles.css";

import React, { useState } from "react";

import DatePicker from "react-datepicker"; //Date-picker npm
// CSS Modules, react-datepicker-cssmodules.css
// import "react-datepicker/dist/react-datepicker-cssmodules.css";
import "react-datepicker/dist/react-datepicker.css";

// React Icons
import { FaUser, FaUserFriends } from "react-icons/fa"; // User profile and userFriends
import { MdEmail } from "react-icons/md"; //Email
import { BsCalendarDateFill } from "react-icons/bs"; // Date
import { FaPhone, FaClock } from "react-icons/fa6"; // Phone & Clock

// Reservation table Time
const reservationTimeSlots = [
  { id: "9:00 AM", timeDisplayText: "9:00 AM" },
  { id: "10:00 AM", timeDisplayText: "10:00 AM" },
  { id: "11:00 AM", timeDisplayText: "11:00 AM" },
  { id: "12:00 PM", timeDisplayText: "12:00 PM" },
  { id: "1:00 PM", timeDisplayText: "1:00 PM" },
  { id: "2:00 PM", timeDisplayText: "2:00 PM" },
  { id: "3:00 PM", timeDisplayText: "3:00 PM" },
  { id: "4:00 PM", timeDisplayText: "4:00 PM" },
  { id: "5:00 PM", timeDisplayText: "5:00 PM" },
  { id: "6:00 PM", timeDisplayText: "6:00 PM" },
  { id: "7:00 PM", timeDisplayText: "7:00 PM" },
  { id: "8:00 PM", timeDisplayText: "8:00 PM" },
  { id: "9:00 PM", timeDisplayText: "9:00 PM" },
  { id: "10:00 PM", timeDisplayText: "10:00 PM" },
  { id: "11:00 PM", timeDisplayText: "11:00 PM" },
];

const TableReservation = () => {
  const [startDate, setStartDate] = useState(new Date());

  const tableReservationFormSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted!");
  };

  return (
    <div className="tableReservation-container">
      <h1 className="section-title">Table Reservation</h1>
      <div className="form-card">
        <div className="form-card-words">
          <h1 className="reservation-title">
            "Your special moments, our special table."
          </h1>
        </div>
        {/*Table Reservation  Form */}
        <div className="form-container">
          <form
            className="tableReservation-form"
            onSubmit={tableReservationFormSubmit}
          >
            {/* Input Name */}
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <div className="input-card">
                <input type="text" placeholder="Name" id="name" required />
                <FaUser className="reservation-icons" />
              </div>
            </div>
            {/* Input Email */}
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <div className="input-card">
                <input type="mail" placeholder="Email" id="email" required />
                <MdEmail className="reservation-icons" />
              </div>
            </div>
            {/* Input Phone Number */}
            <div className="input-group">
              <label htmlFor="phone">Phone</label>
              <div className="input-card">
                <input
                  id="phone"
                  type="tel"
                  placeholder="Phone No"
                  pattern="[0-9]{10}"
                  required
                />
                <FaPhone className="reservation-icons" />
              </div>
            </div>
            {/* Input Number of Persons */}
            <div className="input-group">
              <label htmlFor="person">No. of Persons</label>
              <div className="input-card">
                <input
                  id="person"
                  type="number"
                  placeholder="No. of Persons"
                  required
                />
                <FaUserFriends className="reservation-icons" />
              </div>
            </div>
            {/* Date and Time Input Group */}
            <div className="date_time-card">
              {/*  Date  */}
              <div className="input-group">
                <label htmlFor="date">Date</label>
                <div className="input-card">
                  <DatePicker
                    id="date"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Select date"
                    className="custom-date-picker"
                    required
                  />
                  <BsCalendarDateFill className="reservation-icons" />
                </div>
              </div>
              {/* Input Time */}
              <div className="input-group">
                <label htmlFor="time">Time</label>
                <div className="input-card">
                  <select id="time" required>
                    {reservationTimeSlots.map((time) => (
                      <option key={time.id}>{time.timeDisplayText}</option>
                    ))}
                  </select>
                  <FaClock className="reservation-icons" />
                </div>
              </div>
            </div>
            <button type="submit" className="reservation-form-submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TableReservation;
