import React from 'react';

const DayModal = ({clickedDay}) => {
  console.log('inside modal', clickedDay);
  return (
    <>
      <input type="checkbox" id={clickedDay} className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{clickedDay}</h3>
          <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
          <div className="modal-action">
            <label htmlFor={clickedDay} className="btn">Yay!</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default DayModal;