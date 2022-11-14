import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Hero from '../components/hero';
import DayModal from '../components/DayModal';

const Tour = () => {
  const [value, onChange] = useState(new Date());
  const [clickedDay, setClickedDay] = useState(value.toLocaleDateString());

  const clickDay = (value) => {
    console.log('clicked', typeof value.toLocaleDateString("en-US"));
    setClickedDay(value.toLocaleDateString());
  };

  useEffect(() => {
    const modalPointer = document.getElementById(value.toLocaleDateString());
    if (!modalPointer) {
      return;
    } else {
      document.getElementById(value.toLocaleDateString()).checked = true;
    }
  }, [value])

  return (
    <div className="flex flex-col justify-center items-center">
      <Hero title="Visit the Happy Herd" cta="book a tour" link="#tour">
        We love to have visitors at The Happy Herd! We like to remind all guests that this is a sanctuary for animals that were previously abused or at risk for abuse. This is their home, which is why we do not have public visiting hours but instead offer small group tours. Visits are by donation and provide approximately half of our total raised donations. You will also have the opportunity to visit Garth’s Gift Shop to pick up merchandise like a hat or hoodie.
      </Hero>

      <div className="alert alert-warning shadow-lg flex flex-col w-5/6 items-start p-10 my-5">
        <div className="py-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>In keeping with public health guidelines regarding COVID-19, please remember to keep socially distant with our volunteers.</span>
        </div>
      </div>

      <div className="alert alert-info shadow-lg flex flex-col w-5/6 items-start p-10 my-5">
        <div className="py-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>Guests are encouraged to wear closed-toe shoes, and clothing you don’t mind getting a little dirty. Aside from the gift shop, the tour is outdoors so dress appropriately for the weather.</span>
        </div>
        <div className="py-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>Children are allowed to visit, but please let us know how many children and their ages at the time of booking.
          </span>
        </div>
        <div className="py-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>Please do not bring friends with you unless you have been a minimum of 4x to volunteer & have checked with Diane first. Too many people can make things confusing and jobs can get missed. It works best when everyone is in a routine and doesn’t need to be supervised.</span>
        </div>
        <div className="py-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>Unfortunately we do not allow outside dogs/pets.</span>
        </div>
        <div className="py-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>We do not charge a set admission, tours are by donation and go towards our operating costs.</span>
        </div>
        <div className="py-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>As we schedule our daily tasks and feedings around these tours, we are unable to accommodate guests who arrive late. If you need to cancel, please email us as soon as possible so someone else may take your time slot.</span>
        </div>
        <div className="py-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>Tours are weather permitting, and can be cancelled due to weather or other circumstances beyond our control. When it rains, for example, most animals hide inside so it’s not as fun.</span>
        </div>
        <div className="py-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>Please ensure you provide a cell phone number and check your email the day before your tour.</span>
        </div>
        <div className="py-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>All guests must sign a liability form prior to entry to the sanctuary.</span>
        </div>
        <div className="py-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>Please don’t feed anything to the animals without getting approval from your guide.</span>
        </div>
        <div className="py-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>Bring your own hand sanitzer and water to drink.</span>
        </div>
      </div>

      <div id="tour" className="w-5/6 my-5">
        <Calendar onChange={onChange} value={value} minDate={new Date()} onClickDay={(value) => clickDay(value)}/>
      </div>
      <DayModal clickedDay={clickedDay}/>
    </div>
  )
}

export default Tour;