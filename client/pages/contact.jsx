import React from 'react';
import { SiFacebook, SiTwitter, SiInstagram } from 'react-icons/si';
import ContactForm from '../components/ContactForm';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className="hero min-h-[90vh]" style={{ backgroundImage: `url("https://happyherd.org/wp-content/uploads/2022/12/Screen-Shot-2022-12-13-at-4.35.19-PM.png")`, backgroundPosition: '50% 50%', backgroundSize: 'contain' }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content w-full justify-evenly flex-col gap-y-8 lg:flex-row">

        <div className="flex flex-col gap-5 text-center text-neutral-content lg:text-left">
          <h1 className="text-5xl font-bold">Contact us</h1>
          <h1 className="text-lg italic">Please note visits are by appointment only.</h1>
          <h1 className="text-4xl font-bold">Address</h1>

          <p className="text-xl">
            1920 269a Street <br/>
            Aldergrove BC <br/>
            V4W 2S5
          </p>

          <div className="flex gap-3 justify-center lg:justify-start">
            <Link href="https://www.facebook.com/HappyHerdBC/" target="_blank" rel="noreferrer"><SiFacebook className="w-7 h-7"/></Link>
            <Link href="https://www.instagram.com/thehappyherd/?hl=en" target="_blank" rel="noreferrer"><SiInstagram className="w-7 h-7"/></Link>
            <Link href="https://twitter.com/TheHappyHerd?lang=en" target="_blank" rel="noreferrer"><SiTwitter className="w-7 h-7"/></Link>
          </div>
        </div>

        <ContactForm contact={true}/>

      </div>
    </div>
  )
}

export default Contact;