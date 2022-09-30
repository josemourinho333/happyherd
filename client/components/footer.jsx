import { SiFacebook, SiTwitter, SiInstagram } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="footer flex flex-col items-center bg-slate-100 py-5 px-3">
      <div className="flex flex-col items-center my-3">
        <div className="w-1/3">
          <img src="https://happyherd.org/wp-content/uploads/2017/12/TheHappyHerd-Logo.png" alt="happy-herd-logo" className="w-full"/>
        </div>
        <p className=" my-2 text-center text-sm">
          The Happy Herd Farm Animal Sanctuary <br/>Copyright © 2022 - All right reserved
        </p> 
      </div> 
      <div className="flex flex-col items-center">
        <div className="grid grid-flow-col gap-4">
          <a><SiFacebook className="w-5 h-5"/></a> 
          <a><SiInstagram className="w-5 h-5"/></a> 
          <a><SiTwitter className="w-5 h-5"/></a>
        </div>
        <p className="text-xs mt-2">Website created by Phil Yoo</p>
      </div>
    </footer>
  )
}

export default Footer;