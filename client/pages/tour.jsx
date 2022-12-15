import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Hero from '../components/hero';
import DayModal from '../components/DayModal';
import HeroCard from '../components/HeroCard';
import Script from 'next/script';

const Tour = () => {
  const [value, onChange] = useState(new Date());
  const [clickedDay, setClickedDay] = useState('');

  const clickDay = (value) => {
    setClickedDay(value.toLocaleDateString());

    if (clickedDay === value.toLocaleDateString()) {
      document.getElementById(clickedDay).classList.remove('open-modal');
      document.getElementById(clickedDay).checked = true;
    }
  };

  useEffect(() => {
    if (!clickedDay) {
      return;
    } else {
      document.getElementById(clickedDay).checked = true;
    }
    
  }, [clickedDay])

  return (
    <div className="grid grid-cols-2 p-4 gap-4 bg-primary-content">
      <HeroCard 
        title="Visit the Happy Herd" 
        cta="Book a tour" 
        path="#tour"
        defCol={2}
        defRow=""
        smCol=""
        smRow=""
        mdCol=""
        mdRow=""
        lgCol=""
        lgRow=""
        xlCol=""
        xlRow=""
      >
        We love to have visitors at The Happy Herd! We like to remind all guests that this is a sanctuary for animals that were previously abused or at risk for abuse. This is their home, which is why we do not have public visiting hours but instead offer small group tours. Visits are by donation and provide approximately half of our total raised donations. You will also have the opportunity to visit Garth’s Gift Shop to pick up merchandise like a hat or hoodie.
      </HeroCard>

      <div className="col-span-2 alert shadow-lg flex flex-col justify-start items-start">
        <div className="p-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <div>
            <h3 className="font-bold">Guests are encouraged to wear closed-toe shoes, and clothing you don’t mind getting a little dirty. Aside from the gift shop, the tour is outdoors so dress appropriately for the weather.</h3>
          </div>
        </div>
        <div className="p-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <div>
            <h3 className="font-bold">Children are allowed to visit, but please let us know how many children and their ages at the time of booking.</h3>
          </div>
        </div>
        <div className="p-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <div>
            <h3 className="font-bold">Unfortunately we do not allow outside dogs/pets.</h3>
          </div>
        </div>
        <div className="p-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <div>
            <h3 className="font-bold">We do not charge a set admission, tours are by donation and go towards our operating costs.</h3>
          </div>
        </div>
        <div className="p-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <div>
            <h3 className="font-bold">As we schedule our daily tasks and feedings around these tours, we are unable to accommodate guests who arrive late. If you need to cancel, please email us as soon as possible so someone else may take your time slot.</h3>
          </div>
        </div>
        <div className="p-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <div>
            <h3 className="font-bold">Tours are weather permitting, and can be cancelled due to weather or other circumstances beyond our control. When it rains, for example, most animals hide inside so it’s not as fun.</h3>
          </div>
        </div>
        <div className="p-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <div>
            <h3 className="font-bold">All guests must sign a liability form prior to entry to the sanctuary.</h3>
          </div>
        </div>
        <div className="p-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <div>
            <h3 className="font-bold">Bring your own hand sanitzer and water to drink.</h3>
          </div>
        </div>
      </div>

      <div id="tour" className="col-span-full min-h-screen">
        <div className="calendly-inline-widget" data-url="https://calendly.com/yoo-phil92" style={{minWidth: "320px", height:"100%"}}></div>
        <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></Script>
        {/* <Calendar onChange={onChange} value={value} minDate={new Date()} onClickDay={(value) => clickDay(value)}/> */}
      </div>
      {/* <DayModal clickedDay={clickedDay}/> */}
    </div>
  )
}

export default Tour;