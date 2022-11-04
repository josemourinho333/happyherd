import { SiFacebook, SiTwitter, SiInstagram } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="footer flex justify-between items-center bg-white px-[3rem] sm:px-[5rem] md:px-[7rem] lg:px-[12rem] py-5">
      <div className="grid grid-flow-col gap-2">
        <a><SiFacebook className="w-4 h-4"/></a> 
        <a><SiInstagram className="w-4 h-4"/></a> 
        <a><SiTwitter className="w-4 h-4"/></a>
      </div>
      {/* <div className="flex flex-col items-center my-3">
        <div className="w-1/4">
          <img src="https://happyherd.org/wp-content/uploads/2017/12/TheHappyHerd-Logo.png" alt="happy-herd-logo" className="w-full"/>
        </div>
      </div>  */}
      <p className="text-xs text-[#4a4a4a]">
        The Happy Herd Farm Animal Sanctuary Copyright © 2022 - All right reserved | Website created by Phil Yoo
      </p> 
    </footer>
  )
}

export default Footer;