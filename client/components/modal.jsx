import React from 'react';
import parse from 'html-react-parser';

const Modal = ({name, bio, img, slug}) => {
  return (
    <>
      <input type="checkbox" id={`my-modal-${slug}`} className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <label htmlFor={`my-modal-${slug}`} className="btn btn-primary btn-sm btn-circle absolute right-5 top-5">✕</label>
          <div className="avatar my-5">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} />
            </div>
          </div>
          <h3 className="font-bold text-xl">About {name}</h3>
          <p className="py-4">{parse(bio)}</p>
          <button className="btn btn-primary sm:btn-sm md:btn-md lg:btn-md">Sponsor {name}</button>
        </div>
      </div>
    </>
  )
}

export default Modal;