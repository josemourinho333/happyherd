import React from 'react'

const GiftShopModal = ({ id, color, size, name }) => {

  const body = 
    !color && !size
      ? "You must select size and color."
      : !color && size
      ? "You must select color."
      : color && !size
      ? "You must select size."
      : `I would like to order the ${name} with the ${color} color and size ${size}`

  return (
    <>
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
        <label htmlFor={id} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-lg">Send email to Happy Herd about this item</h3>
          <p className="py-4">{body}</p>
          <div className="modal-action">
            <button className="btn btn-primary sm:btn-sm md:btn-sm lg:btn-sm">Send Email</button>
            {/* <label htmlFor={id} className="btn">Yay!</label> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default GiftShopModal;