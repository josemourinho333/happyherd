import React from 'react';
import ContactForm from './ContactForm';

const GiftShopModal = ({ id, color, size, name }) => {

  const body = 
    !color && !size
      ? "You must select size and color."
      : !color && size
      ? "You must select color."
      : color && !size
      ? "You must select size."
      : `I would like to order the ${name} with the ${color} color and size ${size}`

  const confirmation =
    !color && !size
      ? <ContactForm id={id} disabled="btn-disabled" body="You must select a color and a size."/>
      : !color && size
      ? <ContactForm id={id} disabled="btn-disabled" body="You must select a color."/>
      : color && !size
      ? <ContactForm id={id} disabled="btn-disabled" body="You must select a size."/>
      : <ContactForm id={id} disabled="" body={`I would like to order the ${size} ${name} in ${color}.`}/>

  return (
    <>
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label htmlFor={id} className="btn btn-sm btn-circle absolute right-2 top-2 z-[100]">✕</label>
          {confirmation}
        </div>
      </div>
    </>
  )
}

export default GiftShopModal;