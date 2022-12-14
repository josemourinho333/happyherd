import { SiFacebook, SiTwitter, SiInstagram } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="footer px-5 py-2 bg-primary text-primary-content justify-items-center">
      <div className="md:justify-self-start items-center grid-flow-col font-light">
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.facebook.com/HappyHerdBC/" target="_blank" rel="noreferrer"><SiFacebook className="w-5 h-5"/></a>
          <a href="https://www.instagram.com/thehappyherd/?hl=en" target="_blank" rel="noreferrer"><SiInstagram className="w-5 h-5"/></a>
          <a href="https://twitter.com/TheHappyHerd?lang=en" target="_blank" rel="noreferrer"><SiTwitter className="w-5 h-5"/></a>
        </div>
      </div> 
      <div className="md:place-self-center md:justify-self-end font-extralight">
        <p>&copy; 2022 The Happy Herd Farm Animal Sanctuary | Privacy Policy | Created by Phil Yoo</p>
      </div>
    </footer>
  )
}

export default Footer;