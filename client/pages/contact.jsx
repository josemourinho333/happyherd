import React from 'react';
import { SiFacebook, SiTwitter, SiInstagram } from 'react-icons/si';
import styles from '../styles/Contact.module.scss';
import { HiOutlineArrowRight } from "react-icons/hi";

const Contact = () => {
  return (
    <section className={styles.contact}>

      <div className="shadow-lg">
        <h1>We're here</h1>
        <p>Please note visits are by appointment only.</p>
        <p>
          <strong>Address </strong><br/>
          1920 269a Street <br/>
          Aldergrove BC <br/>
          V4W 2S5
        </p>
        <div className="flex">
          <a><SiFacebook className="w-4 h-4 mr-2"/></a>
          <a><SiInstagram className="w-4 h-4 mr-2"/></a>
          <a><SiTwitter className="w-4 h-4 mr-2"/></a>
        </div>
      </div>

      <div>
        <h1>Send us a message</h1>
        <p>Requests for tours and volunteering will be missed. Please visit appropriate page for your respective requests.</p>
        <form action="POST">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Name"/>

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="your@email.com"/>

          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" placeholder="Thank you for wishing to contact us. We will get back to you as soon as we can."></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>


    </section>
  )
}

export default Contact;