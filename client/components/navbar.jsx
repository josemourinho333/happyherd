import MenuItem from "./menuitem";
import { HiOutlineArrowRight } from "react-icons/hi";

const NavBar = () => {

  return (
    <nav className="flex justify-between items-center bg-[#fff] sticky top-0 z-[500] px-[12rem]">
        <div className="logo w-[15%] py-1">
          <a href="/">
            <img src="https://happyherd.org/wp-content/uploads/2022/10/hh-logo.png" alt="logo" className="logo-img w-full" />
            {/* <img src="https://happyherd.org/wp-content/uploads/2017/12/TheHappyHerd-Logo.png" alt="logo" className="logo-img w-full" /> */}
          </a>
        </div>
        <div className="flex items-center text-black">
          <ul className="flex text-xs">
            <MenuItem 
              name="Animals" 
              subMenu={["Rescued Animals", "In Loving Memory"]} 
            />
            <MenuItem 
              name="News & Events" 
              subMenu={["Pig Yoga", "Featured In"]}
            />
            <MenuItem
              name="Support Us" 
              subMenu={["Sponsor an Animal", "Garths Gift Shop", "Donate", "Supporters"]}
            />
            <MenuItem
              name="Volunteer" 
              subMenu={null}
            />
            <MenuItem
              name="Contact" 
              subMenu={null}
            />
          </ul>
          <button className="text-xs bg-black text-white py-1 px-3 rounded-full font-semibold flex items-center hover:text-black hover:bg-white border border-black">
            Book a Tour
            <HiOutlineArrowRight className="ml-2 mt-0.5"/>
          </button>
      </div>
    </nav>
  )
}

export default NavBar