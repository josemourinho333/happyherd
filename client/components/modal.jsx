import React from 'react';
import Script from 'next/script';

const Modal = ({name, bio, img, slug, dead}) => {

  return (
    <>
      <Script async type="text/javascript" src="https://d3n6by2snqaq74.cloudfront.net/forms/keela-forms.min.js"/>
      <Script async>{` 
          window.Keela = { id: "zgBpP6eQ2D3ApCQEy"};
      `}</Script>
      <input type="checkbox" id={`my-modal-${slug}`} className="modal-toggle" />
      <div className="!ml-0 modal modal-bottom sm:modal-middle">
        <div className="modal-box relative !p-0">
          <label htmlFor={`my-modal-${slug}`} className="btn btn-primary btn-sm btn-circle absolute right-5 top-5 z-[10]">✕</label>
          <div className="w-full relative">
            <img className="w-full h-[500px]" src={img} />
            <div className="w-full absolute bottom-0 px-[1.5rem] bg-gradient-to-t from-white to-transparent">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={img} />
                </div>
              </div>
              <div className="text-3xl font-bold mt-2">{name}</div>
            </div>
          </div>
          
          <div className="p-[1.5rem] flex flex-col">
            <div className="py-4">{bio}</div>
            {dead
              ? <></>
              : <div className="keela-embed-form" data-src="https://give-can.keela.co/embed/S2K755sDi4FsY28wB">
                    <div className="keela-loading"><div></div><div></div><div></div><div></div></div>
                </div>
            }
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Modal;