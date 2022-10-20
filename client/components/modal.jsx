import React from 'react';
import parse from 'html-react-parser';

const Modal = ({name, bio, img}) => {
  return (
    <>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <label htmlFor="my-modal-6" className="btn btn-primary btn-sm btn-circle absolute right-2 top-2">✕</label>
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} />
            </div>
          </div>
          <h3 className="font-bold text-lg">About {name}</h3>
          <p className="py-4">{parse(bio)}</p>
          <button className="btn btn-primary sm:btn-sm md:btn-sm lg:btn-sm">Sponsor Me</button>
        </div>
      </div>
    </>
  )
}

export default Modal;