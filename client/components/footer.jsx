import { SiFacebook, SiTwitter, SiInstagram } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-primary">
      <div>
        <div className="w-1/2">
          <img src="https://happyherd.org/wp-content/uploads/2017/12/TheHappyHerd-Logo.png" alt="happy-herd-logo" className="w-full"/>
        </div>
        <p className="font-md">
          The Happy Herd Farm Animal Sanctuary <br/>Copyright © 2022 - All right reserved
        </p> 
      </div> 
      <div>
        <div className="grid grid-flow-col gap-4">
          <a><SiFacebook className="w-5 h-5"/></a> 
          <a><SiInstagram className="w-5 h-5"/></a> 
          <a><SiTwitter className="w-5 h-5"/></a>
        </div>
        <p className="text-xs">Website created by Phil Yoo</p>
      </div>
    </footer>
  )
}

export default Footer;