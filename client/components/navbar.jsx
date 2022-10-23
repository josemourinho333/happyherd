import MenuItem from "./menuitem";
import { HiOutlineArrowRight } from "react-icons/hi";

const NavBar = () => {

  return (
    <nav className="flex justify-between items-center bg-[#fff] sticky top-0 z-[500] px-[12rem]">
        <div className="logo w-[9%] py-2">
          <a href="/">
            {/* <img src="https://happyherd.org/wp-content/uploads/2022/10/hh-logo.png" alt="logo" className="logo-img w-full" /> */}
            <img src="https://happyherd.org/wp-content/uploads/2017/12/TheHappyHerd-Logo.png" alt="logo" className="logo-img w-full" />
          </a>
        </div>
        <div className="flex items-center text-neutral">
          <ul className="flex text-sm">
            <MenuItem 
              name="Animals" 
              subMenu={["Rescued Animals", "In Loving Memory"]} 
            />
            <MenuItem
              name="Support Us" 
              subMenu={["Sponsor an Animal", "Garths Gift Shop", "Donate", "Supporters"]}
            />
            <MenuItem 
              name="Pig Yoga" 
              subMenu={null}
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
          <button className="btn btn-neutral ml-1 sm:btn-sm md:btn-sm lg:btn-sm">
            Book a Tour
          </button>
          <button className="btn btn-primary ml-4 sm:btn-sm md:btn-sm lg:btn-sm">
            Donate
          </button>
      </div>
    </nav>
  )
}

export default NavBar