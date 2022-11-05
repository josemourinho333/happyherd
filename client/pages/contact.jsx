import React from 'react';
import { SiFacebook, SiTwitter, SiInstagram } from 'react-icons/si';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="hero h-[90vh]" style={{ backgroundImage: `url("https://happyherd.org/wp-content/uploads/2022/10/farmlocation.png")`, backgroundPosition: '350px 150px', backgroundSize: 'contain' }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content w-full justify-evenly flex-col lg:flex-row-reverse">

        <div className="text-center text-neutral-content lg:text-left">
          <h1 className="text-5xl font-bold">We're here</h1>
          <h1 className="text-lg my-1">Please note visits are by appointment only.</h1>
          <h1 className="text-4xl font-bold my-5">Address</h1>

          <p>
            1920 269a Street <br/>
            Aldergrove BC <br/>
            V4W 2S5
          </p>

          <div className="flex my-5">
            <a><SiFacebook className="w-4 h-4 mr-2"/></a>
            <a><SiInstagram className="w-4 h-4 mr-2"/></a>
            <a><SiTwitter className="w-4 h-4 mr-2"/></a>
          </div>
        </div>

        <ContactForm contact={true}/>

      </div>
    </div>
  )
}

export default Contact;