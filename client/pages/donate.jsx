import React from 'react';
import Script from 'next/script';
import Hero from '../components/hero';
import Collapse from '../components/Collapse';

const Donate = () => {
  return (
    <>
      <Script async type="text/javascript" src="https://d3n6by2snqaq74.cloudfront.net/forms/keela-forms.min.js"/>
      <Script async>
        {` 
          window.Keela = { id: "zgBpP6eQ2D3ApCQEy"};
        `}
      </Script>
      <div className="flex flex-col items-center">
        <Hero title="Sponsor an Animal">
          The sponsorship program gives you a way to support the Happy Herd and also connect with one of our animals in particular.
        </Hero>
        <div className="keela-embed-form" data-src="https://give-can.keela.co/embed/S2K755sDi4FsY28wB">
            <div className="keela-loading"><div></div><div></div><div></div><div></div></div>
        </div>
      </div>
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-5xl font-bold my-10">FAQ</h2>
        <Collapse question="What your funds will be used for"> 
          <p>Your donation is used for things like food, bedding, and medical care. Your donation also goes into a general fund which allows us to build infrastructure, and enables us to pay for operational expenses.</p>
        </Collapse>
        <Collapse question="What you can expect as a donor">
          <div className="flex flex-col">
            <ul>
              <li>An emailed sponsorship certificate</li>
              <li>An emailed factsheet about your sponsor animal</li>
              <li>A mailed magnet print of your sponsor animal</li>
              <li>A quarterly update on the Happy Herd and your sponsor animal, exclusively for sponsors</li>
              <li>An invitiation to visit the sanctuary for a tour and to meet your sponsor animal</li>
              <li>An official donation receipt for tax purposes (please note that the donation receipt cannot be issued to anyone other than the person making the donation)</li>
            </ul>
          </div>
        </Collapse>
        <Collapse question="I can't choose an animal, they're all so cute!" answer="">
          <p>You can choose “Lucky Dip” as your animal and we will choose an animal for you based on the monthly/annual amount you have chosen and which animal is most in need of a new sponsor.</p>
        </Collapse>
        <Collapse question="I want to sponsor all of them" answer="">
          <p>You can join our Compassion Club for VIP sponsors who donate a monthly donation of more than $100 each month or an annual donation over $1000.</p>
        </Collapse>
        <Collapse question="Still have questions?" answer="">
          <p>Email us at sponsor@happyherd.org, and we will get back to you as soon as possible.</p>
        </Collapse>
      </div>
    </>
  )
}

export default Donate;