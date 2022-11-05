import React from 'react';

const ContactForm = ({contact, body, disabled}) => {

  if (!contact) {
    return (
      <div className="card flex-shrink-0 w-full bg-base-100">
        <div className="card-body">
          <h1 className="font-bold text-neutral text-2xl">
            Send an email about this item
          </h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="name" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" className="input input-bordered" />
          </div>
          
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea className="input input-bordered h-[200px] resize-none" value={body} />
          </div>
          <div className="form-control mt-6">
            <button className={`btn btn-primary ${disabled}`}>Send Email</button>
          </div>
        </div>
      </div>
    )  
  }

  if (contact) {
    return (
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <h1 className="font-bold text-neutral text-2xl">
            Send us a message
          </h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="name" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" className="input input-bordered" />
          </div>
          
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea placeholder="Leave a message" className="input input-bordered h-[200px] resize-none" />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Send</button>
          </div>
        </div>
      </div>
    )  
  }
}

export default ContactForm;